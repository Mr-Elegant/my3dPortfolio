import { useCallback, useEffect, useRef, useState } from "react";
import AnimeMascot from "./AnimeMascot";
import { animeFX, prefersReducedMotion } from "../../utils/animeFX";
import { audioFX } from "../../utils/audioFX";

/**
 * Anime "episode opening" boot sequence (used instead of the terminal
 * BootLoader while Anime Mode is on). App picks the variant:
 *
 *   variant="full"  (first visit per session, or "Replay opening"), ~3.3s
 *     charge → Kōdo hops while a manga power gauge fills, loading tips cycle
 *     title  → impact frame + "DON!", title card slams in
 *     exit   → sword slash splits the screen; halves fly apart
 *
 *   variant="recap" (every later reload), ~1.1s
 *     straight to impact + title card → slash reveal
 *
 * Skippable with the button or Esc. Reduced motion → brief static title card.
 */
const TIPS = [
  "Compiling secret techniques...",
  "Summoning React components...",
  "Charging the render pipeline...",
  "Warming up the 3D engine...",
  "Brewing late-night ramen...",
  "Training montage in progress...",
];

const TIMELINES = {
  full: { title: 1450, exit: 2750, done: 3300 },
  recap: { title: 0, exit: 600, done: 1100 },
  reduced: { title: 0, exit: 1100, done: 1400 },
};

const impact = () => {
  animeFX.hit(window.innerWidth / 2, window.innerHeight / 2 - 40, { text: "DON!", size: 110, color: "hot" });
  try {
    audioFX.playSuccess();
  } catch {
    // audio is optional
  }
};

const AnimeBootLoader = ({ onComplete, variant = "full" }) => {
  const reduced = useRef(prefersReducedMotion()).current;
  const mode = reduced ? "reduced" : variant === "recap" ? "recap" : "full";
  const [phase, setPhase] = useState(mode === "full" ? "charge" : "title");
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState(0);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    sessionStorage.setItem("preet_os_booted", "true");
    onComplete?.();
  }, [onComplete]);

  // Timeline
  useEffect(() => {
    const t = TIMELINES[mode];
    const timers = [];

    // Recap opens straight on the impact frame.
    if (mode === "recap") impact();

    if (mode === "full") {
      // Gauge: ease-out fill to 100% just before the title card.
      const start = performance.now();
      let raf = 0;
      const tick = (now) => {
        const k = Math.min((now - start) / (t.title - 150), 1);
        setProgress(Math.round((1 - Math.pow(1 - k, 3)) * 100));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      timers.push(() => cancelAnimationFrame(raf));

      const tipTimer = setInterval(() => setTip((i) => (i + 1) % TIPS.length), 420);
      timers.push(() => clearInterval(tipTimer));

      const toTitle = setTimeout(() => {
        setPhase("title");
        impact();
      }, t.title);
      timers.push(() => clearTimeout(toTitle));
    }

    const toExit = setTimeout(() => {
      setPhase("exit");
      if (!reduced) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        animeFX.slash(w * 0.05, h * 0.95, w * 0.95, h * 0.05, { width: 22, color: "accent" });
      }
    }, t.exit);
    const toDone = setTimeout(finish, t.done);
    timers.push(() => clearTimeout(toExit), () => clearTimeout(toDone));

    return () => timers.forEach((stop) => stop());
  }, [finish, mode, reduced]);

  // Esc to skip
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finish]);

  return (
    <div
      className="ani-boot"
      data-phase={phase}
      data-reduced={reduced}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Preet Karwal's portfolio"
    >
      {/* Two diagonal halves, which split apart on exit */}
      <div className="ani-boot__half ani-boot__half--a" aria-hidden="true" />
      <div className="ani-boot__half ani-boot__half--b" aria-hidden="true" />

      <div className="ani-boot__stage">
        <div className="ani-boot__lines" aria-hidden="true" />
        <div className="ani-boot__flash" aria-hidden="true" />

        <div className="ani-boot__kicker">PREET.EXE // EP.01</div>

        {phase === "charge" && (
          <div className="ani-boot__charge">
            <AnimeMascot className="ani-mascot--inline" />
            <div className="ani-boot__gauge" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
              <div className="ani-boot__gauge-head">
                <span>POWER LEVEL</span>
                <span className="ani-boot__pct">{progress}%</span>
              </div>
              <div className="ani-boot__bar">
                <div className="ani-boot__fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="ani-boot__tip" aria-live="polite">
                {TIPS[tip]}
              </p>
            </div>
          </div>
        )}

        {phase !== "charge" && (
          <div className="ani-boot__title">
            <span className="ani-boot__ep">EPISODE 01</span>
            <h1 className="ani-boot__name">PREET KARWAL</h1>
            <span className="ani-boot__jp" lang="ja">プリート・カルワル</span>
            <span className="ani-boot__role">Full-Stack &amp; AI Systems Engineer</span>
          </div>
        )}

        <button type="button" className="ani-boot__skip" onClick={finish}>
          SKIP ▶▶
        </button>
      </div>
    </div>
  );
};

export default AnimeBootLoader;
