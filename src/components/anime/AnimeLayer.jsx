import { useEffect, useRef } from "react";
import { animeFX, prefersReducedMotion } from "../../utils/animeFX";
import { useAnimeMode } from "../../utils/animeMode";
import { audioFX } from "../../utils/audioFX";

// Drop your clip here: public/sounds/anime-click.mp3
const CLICK_SOUND_URL = "/sounds/anime-click.mp3";

/**
 * Site-wide anime interaction layer (mounted once in App).
 * Everything works by event delegation, so no existing component needs to
 * change to get:
 *   • squash-and-stretch press on every button / link
 *   • impact bursts on click (+ a manga SFX every few clicks)
 *   • speed lines at the screen edges while scrolling fast
 */
const INTERACTIVE = "button, a[href], [role='button'], [role='tab'], summary, label[for]";
// Places with their own FX, or where FX would get in the way (typing, 3D drag).
const SKIP = ".ani-squash, .ani-panel, input, textarea, select, canvas, [contenteditable]";
const WORDS = ["POW!", "BAM!", "DON!", "ZAP!", "BOOM!", "SUGOI!", "YOSH!", "KA-CHING!"];

// Spring-ish squash keyframes, *added* on top of whatever transform the
// element already has (Tailwind hover:scale, GSAP, etc.).
const SQUASH = [
  { transform: "scale(1, 1)" },
  { transform: "scale(1.08, 0.86)", offset: 0.2 },
  { transform: "scale(0.95, 1.07)", offset: 0.5 },
  { transform: "scale(1.02, 0.98)", offset: 0.75 },
  { transform: "scale(1, 1)" },
];

const AnimeLayer = () => {
  const on = useAnimeMode();
  const linesRef = useRef(null);

  // Anime click voice: replaces the synth click while Anime Mode is on.
  useEffect(() => {
    if (!on) return;
    audioFX.setClickSample(CLICK_SOUND_URL);
    return () => audioFX.clearClickSample();
  }, [on]);

  // Press squash + click impact
  useEffect(() => {
    if (!on) return;
    let clicks = 0;

    const onDown = (e) => {
      if (e.button !== 0 || prefersReducedMotion()) return;
      const el = e.target.closest?.(INTERACTIVE);
      if (!el || el.closest(SKIP) || getComputedStyle(el).display === "inline") return;
      try {
        el.animate(SQUASH, { duration: 420, easing: "ease-out", composite: "add" });
      } catch {
        // composite:add unsupported → skip squash, keep the rest
      }
    };

    const onClick = (e) => {
      const hitTarget = e.target.closest?.(INTERACTIVE);
      // Click voice for every interactive component (deduped inside audioFX
      // when the component already called playClick itself).
      if (hitTarget && !e.target.closest?.("input, textarea, select")) audioFX.playClick();

      // Keyboard-triggered clicks report 0,0, so skip them; skip our own controls.
      if ((!e.clientX && !e.clientY) || e.target.closest?.(SKIP)) return;
      const { clientX: x, clientY: y } = e;
      if (hitTarget) {
        clicks++;
        animeFX.burst(x, y, { size: 26, spikes: 9, color: clicks % 3 ? "accent" : "hot" });
        if (clicks % 3 === 0) {
          animeFX.sfx(x, y - 32, WORDS[(clicks / 3) % WORDS.length], { size: 24 });
        }
      } else {
        animeFX.sparkles(x, y, { count: 5, spread: 30 });
      }
    };

    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("click", onClick);
    };
  }, [on]);

  // Scroll-velocity speed lines
  useEffect(() => {
    const el = linesRef.current;
    if (!on || !el) return;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let level = 0;
    let raf = 0;

    const loop = () => {
      level *= 0.9;
      el.style.opacity = String(Math.min(level, 1) * 0.6);
      if (level > 0.02) raf = requestAnimationFrame(loop);
      else {
        el.style.opacity = "0";
        raf = 0;
      }
    };

    const onScroll = () => {
      const now = performance.now();
      const dy = window.scrollY - lastY;
      const v = Math.abs(dy) / Math.max(now - lastT, 1); // px per ms
      lastY = window.scrollY;
      lastT = now;
      if (v < 2 || prefersReducedMotion()) return;
      level = Math.max(level, Math.min((v - 2) / 3, 1.2));
      el.dataset.dir = dy > 0 ? "down" : "up";
      if (!raf) raf = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [on]);

  if (!on) return null;
  return <div ref={linesRef} className="ani-speedlines" aria-hidden="true" />;
};

export default AnimeLayer;
