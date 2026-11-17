import { useCallback, useEffect, useRef } from "react";
import { prefersReducedMotion } from "../utils/animeFX";

/**
 * Under-damped springs that write straight to CSS custom properties on `ref`
 * (no React re-renders). Each channel `name` drives `--name`.
 *
 *   const { ref, set, kick } = useSpringVars({ sx: 1, sy: 1 });
 *   set({ sx: 1.15, sy: 0.85 });   // squash
 *   set({ sx: 1, sy: 1 });         // release → overshoots, wobbles, settles
 *   kick({ sy: 8 });               // add velocity for a "boing"
 *
 * Low damping relative to stiffness = more anime overshoot.
 */
export default function useSpringVars(initial, { stiffness = 520, damping = 14 } = {}) {
  const ref = useRef(null);
  const state = useRef(null);
  if (!state.current) {
    state.current = { raf: 0, last: 0, ch: {} };
    for (const [k, v] of Object.entries(initial)) state.current.ch[k] = { x: v, v: 0, target: v };
  }

  const write = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    for (const [k, c] of Object.entries(state.current.ch)) el.style.setProperty(`--${k}`, c.x.toFixed(4));
  }, []);

  const step = useCallback(
    (now) => {
      const st = state.current;
      const dt = Math.min((now - st.last) / 1000, 1 / 30);
      st.last = now;
      let moving = false;
      for (const c of Object.values(st.ch)) {
        // Semi-implicit Euler — stable enough for UI springs.
        c.v += (stiffness * (c.target - c.x) - damping * c.v) * dt;
        c.x += c.v * dt;
        if (Math.abs(c.v) > 0.001 || Math.abs(c.target - c.x) > 0.001) moving = true;
        else {
          c.x = c.target;
          c.v = 0;
        }
      }
      write();
      st.raf = moving ? requestAnimationFrame(step) : 0;
    },
    [stiffness, damping, write]
  );

  const start = useCallback(() => {
    const st = state.current;
    if (st.raf) return;
    st.last = performance.now();
    st.raf = requestAnimationFrame(step);
  }, [step]);

  const set = useCallback(
    (targets) => {
      const reduce = prefersReducedMotion();
      for (const [k, t] of Object.entries(targets)) {
        const c = state.current.ch[k];
        if (!c) continue;
        c.target = t;
        if (reduce) {
          c.x = t;
          c.v = 0;
        }
      }
      reduce ? write() : start();
    },
    [start, write]
  );

  const kick = useCallback(
    (velocities) => {
      if (prefersReducedMotion()) return;
      for (const [k, v] of Object.entries(velocities)) {
        const c = state.current.ch[k];
        if (c) c.v += v;
      }
      start();
    },
    [start]
  );

  useEffect(() => {
    write();
    const st = state.current;
    return () => cancelAnimationFrame(st.raf);
  }, [write]);

  return { ref, set, kick };
}
