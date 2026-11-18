/**
 * animeFX — a tiny, dependency-free anime VFX engine.
 *
 * Everything is painted on ONE lazily-created, click-through canvas overlay.
 * The rAF loop only runs while effects are alive, so idle cost is zero.
 * All effects are skipped when the user prefers reduced motion.
 *
 * Coordinates are viewport (client) coordinates, e.g. from a PointerEvent.
 * Colours come from the --ani-* CSS variables (see index.css) so they can be
 * themed without touching this file.
 */

const TAU = Math.PI * 2;
const rand = (a, b) => a + Math.random() * (b - a);
const clamp01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t);
const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeOutBack = (t, s = 2.4) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const FALLBACK = {
  ink: "#060709",
  paper: "#ffffff",
  accent: "#00f0ff",
  hot: "#ff2e63",
  gold: "#ffd23f",
};

const readPalette = () => {
  if (typeof document === "undefined") return FALLBACK;
  const cs = getComputedStyle(document.documentElement);
  const read = (k) => cs.getPropertyValue(`--ani-${k}`).trim() || FALLBACK[k];
  return { ink: read("ink"), paper: read("paper"), accent: read("accent"), hot: read("hot"), gold: read("gold") };
};

/**
 * Palette with a resolver: `color` options accept either a palette key
 * ("accent" | "hot" | "gold" | "ink" | "paper") or any canvas colour string.
 */
const palette = () => {
  const p = readPalette();
  p.pick = (c, fallback) => (c ? p[c] || c : fallback);
  return p;
};

class AnimeFXEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.effects = [];
    this.running = false;
    this.dpr = 1;
    this.last = 0;
  }

  ensureCanvas() {
    if (this.canvas) return true;
    if (typeof document === "undefined") return false;
    const c = document.createElement("canvas");
    c.setAttribute("aria-hidden", "true");
    c.className = "animeFX-overlay";
    Object.assign(c.style, {
      position: "fixed",
      inset: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "9998",
    });
    document.body.appendChild(c);
    this.canvas = c;
    this.ctx = c.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());
    // Canvas text can't trigger web-font loading itself; kick it off so
    // SFX lettering switches to Bangers as soon as it's available.
    document.fonts?.load('40px "Bangers"').catch(() => {});
    return true;
  }

  resize() {
    if (!this.canvas) return;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(window.innerWidth * this.dpr);
    this.canvas.height = Math.round(window.innerHeight * this.dpr);
  }

  /** effect: { life: seconds, draw(ctx, t, age) } where t runs 0 → 1 over life. */
  add(effect) {
    if (prefersReducedMotion() || !this.ensureCanvas()) return;
    effect.age = 0;
    this.effects.push(effect);
    if (!this.running) {
      this.running = true;
      this.last = performance.now();
      requestAnimationFrame(this.tick);
    }
  }

  tick = (now) => {
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    const { ctx } = this;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.effects = this.effects.filter((fx) => {
      fx.age += dt;
      if (fx.age >= fx.life) return false;
      ctx.save();
      fx.draw(ctx, fx.age / fx.life, fx.age, dt);
      ctx.restore();
      return true;
    });

    if (this.effects.length) {
      requestAnimationFrame(this.tick);
    } else {
      this.running = false;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  };

  /* ------------------------------------------------------------------ */
  /* Primitive effects                                                   */
  /* ------------------------------------------------------------------ */

  /** Spiky star-burst with an ink outline and a white flash core. */
  burst(x, y, { color, size = 70, spikes = 12 } = {}) {
    const p = palette();
    const fill = p.pick(color, p.accent);
    const jitter = Array.from({ length: spikes * 2 }, (_, i) => (i % 2 ? rand(0.35, 0.5) : rand(0.85, 1.15)));
    const rot = rand(0, TAU);

    this.add({
      life: 0.42,
      draw(ctx, t) {
        const grow = easeOutBack(clamp01(t * 2.2));
        const r = size * grow;
        const alpha = t < 0.6 ? 1 : 1 - (t - 0.6) / 0.4;
        ctx.globalAlpha = alpha;
        ctx.translate(x, y);
        ctx.rotate(rot + t * 0.4);

        const star = (scale) => {
          ctx.beginPath();
          jitter.forEach((j, i) => {
            const a = (i / jitter.length) * TAU;
            const rr = r * j * scale;
            i ? ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
          });
          ctx.closePath();
        };

        star(1);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = p.ink;
        ctx.stroke();

        // Inner white core that collapses first — sells the "impact frame".
        star(Math.max(0, 0.6 - t));
        ctx.fillStyle = p.paper;
        ctx.fill();
      },
    });
  }

  /** 集中線 — focus/speed lines converging on a point. */
  focusLines(x, y, { count = 28, inner = 90, color } = {}) {
    const p = palette();
    const lines = Array.from({ length: count }, () => ({
      a: rand(0, TAU),
      w: rand(2, 7),
      inner: inner * rand(0.8, 1.6),
    }));
    const outer = Math.hypot(window.innerWidth, window.innerHeight);

    this.add({
      life: 0.3,
      draw(ctx, t) {
        ctx.globalAlpha = 1 - t;
        ctx.fillStyle = p.pick(color, p.paper);
        lines.forEach(({ a, w, inner: rIn }) => {
          const r0 = rIn + (1 - easeOutExpo(t)) * 120;
          const cos = Math.cos(a);
          const sin = Math.sin(a);
          const nx = -sin * w;
          const ny = cos * w;
          ctx.beginPath();
          ctx.moveTo(x + cos * r0, y + sin * r0); // sharp tip near the target
          ctx.lineTo(x + cos * outer + nx, y + sin * outer + ny);
          ctx.lineTo(x + cos * outer - nx, y + sin * outer - ny);
          ctx.closePath();
          ctx.fill();
        });
      },
    });
  }

  /** A tapered sword-slash arc from (x1,y1) to (x2,y2). */
  slash(x1, y1, x2, y2, { color, width = 14 } = {}) {
    const p = palette();
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const len = Math.hypot(x2 - x1, y2 - y1);
    const bend = len * 0.18;
    // Control point pushed perpendicular to the stroke → crescent shape.
    const cx = mx - ((y2 - y1) / len) * bend;
    const cy = my + ((x2 - x1) / len) * bend;
    const point = (u) => ({
      x: (1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * cx + u * u * x2,
      y: (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * cy + u * u * y2,
    });

    this.add({
      life: 0.38,
      draw(ctx, t) {
        const head = easeOutExpo(clamp01(t * 2.5));
        const tail = easeOutExpo(clamp01((t - 0.25) * 1.6));
        // Sample densely enough that the circles merge into one blade, even screen-wide.
        const steps = Math.max(24, Math.ceil(len / 4));
        const pass = (w, fill) => {
          ctx.beginPath();
          for (let i = 0; i <= steps; i++) {
            const u = tail + (head - tail) * (i / steps);
            const { x, y } = point(u);
            const taper = Math.sin((i / steps) * Math.PI) * w; // thin at both ends
            ctx.moveTo(x + taper, y);
            ctx.arc(x, y, Math.max(taper, 0.01), 0, TAU);
          }
          ctx.fillStyle = fill;
          ctx.fill();
        };
        pass(width / 2 + 3, p.ink);
        pass(width / 2, p.pick(color, p.hot));
        pass(width / 5, p.paper);
      },
    });
  }

  /** Cartoon smoke puffs with ink outlines that rise and dissolve. */
  smoke(x, y, { count = 7, color } = {}) {
    const p = palette();
    const puffs = Array.from({ length: count }, () => ({
      dx: rand(-1, 1) * 40,
      dy: rand(-60, -20),
      r: rand(10, 22),
      delay: rand(0, 0.12),
    }));

    this.add({
      life: 0.75,
      draw(ctx, t, age) {
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = p.ink;
        ctx.fillStyle = p.pick(color, p.paper);
        puffs.forEach((pf) => {
          const lt = clamp01((age - pf.delay) / (0.75 - pf.delay));
          if (lt <= 0) return;
          const e = easeOutExpo(lt);
          // Grow fast, then shrink to nothing (classic anime dissipate).
          const r = pf.r * (lt < 0.35 ? easeOutBack(lt / 0.35) : 1 - (lt - 0.35) / 0.65);
          if (r <= 0.5) return;
          ctx.beginPath();
          ctx.arc(x + pf.dx * e, y + pf.dy * e, r, 0, TAU);
          ctx.fill();
          ctx.stroke();
        });
      },
    });
  }

  /** Little four-point sparkle stars. */
  sparkles(x, y, { count = 8, color, spread = 60 } = {}) {
    const p = palette();
    const stars = Array.from({ length: count }, () => {
      const a = rand(0, TAU);
      const d = rand(0.5, 1) * spread;
      return { tx: Math.cos(a) * d, ty: Math.sin(a) * d, s: rand(5, 11), spin: rand(-4, 4) };
    });

    this.add({
      life: 0.6,
      draw(ctx, t) {
        const e = easeOutExpo(t);
        stars.forEach((st) => {
          const s = st.s * Math.sin(Math.PI * clamp01(t * 1.2));
          if (s <= 0.2) return;
          ctx.save();
          ctx.translate(x + st.tx * e, y + st.ty * e);
          ctx.rotate(st.spin * t);
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const a = (i / 8) * TAU;
            const rr = i % 2 ? s * 0.28 : s;
            ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
          }
          ctx.closePath();
          ctx.fillStyle = p.pick(color, p.gold);
          ctx.strokeStyle = p.ink;
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        });
      },
    });
  }

  /** Manga sound-effect lettering ("DON!", "BAM!") with pop + shake. */
  sfx(x, y, text, { color, size = 34, angle } = {}) {
    const p = palette();
    const rot = angle ?? (rand(-14, 14) * Math.PI) / 180;
    const drift = rand(-12, 12);

    this.add({
      life: 0.85,
      draw(ctx, t) {
        const pop = easeOutBack(clamp01(t * 4), 3);
        const shake = t < 0.3 ? Math.sin(t * 120) * 3 * (1 - t / 0.3) : 0;
        const alpha = t < 0.7 ? 1 : 1 - (t - 0.7) / 0.3;
        ctx.globalAlpha = alpha;
        ctx.translate(x + shake + drift * t, y - 26 * easeOutExpo(t));
        ctx.rotate(rot);
        ctx.scale(pop, pop);
        ctx.font = `${size * 1.15}px "Bangers", Impact, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineJoin = "round";
        ctx.lineWidth = 10;
        ctx.strokeStyle = p.paper;
        ctx.strokeText(text, 0, 0);
        ctx.lineWidth = 5;
        ctx.strokeStyle = p.ink;
        ctx.strokeText(text, 0, 0);
        ctx.fillStyle = p.pick(color, p.hot);
        ctx.fillText(text, 0, 0);
      },
    });
  }

  /* ------------------------------------------------------------------ */
  /* Combos                                                              */
  /* ------------------------------------------------------------------ */

  /** Full "impact frame": focus lines + burst + SFX text. */
  hit(x, y, { text = "DON!", color, size = 70 } = {}) {
    this.focusLines(x, y, { inner: size * 1.1 });
    this.burst(x, y, { color, size });
    if (text) this.sfx(x + rand(-10, 10), y - size * 0.9, text, { color });
  }
}

export const animeFX = new AnimeFXEngine();

/** Center of an element in viewport coords — handy for keyboard-triggered FX. */
export const centerOf = (el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};

/** Pointer position if the event came from a pointer, else the element center. */
export const fxPoint = (e, el) =>
  e && e.clientX && e.clientY ? { x: e.clientX, y: e.clientY } : centerOf(el || e.currentTarget);
