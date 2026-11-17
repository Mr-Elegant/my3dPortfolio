import { useEffect, useRef, useState } from "react";
import { useAnimeMode, useAnimeBg } from "../../utils/animeMode";
import { prefersReducedMotion } from "../../utils/animeFX";
import AnimeMascot from "./AnimeMascot";

/**
 * Fixed background dancer, behind all content, while Anime Mode is on.
 *
 * Default: Kōdo, the original SVG mascot (AnimeMascot.jsx); no assets needed.
 * Optional override: drop a licensed transparent clip in /public/videos:
 *   anime-dance.webm  → VP9 with alpha  (Chrome, Edge, Firefox)
 *   anime-dance.mov   → HEVC with alpha (Safari)
 * If the clip loads, it replaces Kōdo; if it's missing, Kōdo keeps dancing.
 *
 * Optional scene: /public/videos/anime-scene.mp4, a normal (opaque) clip
 * shown full-screen and dimmed behind the content. Priority:
 *   transparent clip  >  scene clip  >  Kōdo
 * Make one from any MP4 (muted, 720p, web-optimized):
 *   ffmpeg -i in.mp4 -an -vf scale=1280:-2 -c:v libx264 -crf 27 \
 *          -pix_fmt yuv420p -movflags +faststart public/videos/anime-scene.mp4
 *
 * Reacts to the site: hops on clicks, dances faster while you scroll fast.
 * Skipped on phones, for reduced motion, and on data-saver connections;
 * paused while the tab is hidden.
 */
const SOURCES = {
  webm: "/videos/anime-dance.webm",
  mov: "/videos/anime-dance.mov",
  // Optional full-scene clip (no transparency): shown full-screen, dimmed.
  scene: "/videos/anime-scene.mp4",
};

const JUMP = [
  { transform: "translateY(0) scale(1, 1)" },
  { transform: "translateY(0) scale(1.08, 0.9)", offset: 0.15 },
  { transform: "translateY(-46px) scale(0.95, 1.06)", offset: 0.45 },
  { transform: "translateY(0) scale(1.06, 0.94)", offset: 0.8 },
  { transform: "translateY(0) scale(1, 1)" },
];

// Safari can't play VP9 alpha (it would render a black box), so it gets the HEVC file.
const isSafari = () =>
  typeof navigator !== "undefined" &&
  /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);

const shouldRender = () => {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (window.matchMedia("(max-width: 767px)").matches) return false;
  if (navigator.connection?.saveData) return false;
  return true;
};

const DanceBackground = () => {
  const animeOn = useAnimeMode();
  const bgOn = useAnimeBg(); // navbar 🎬 toggle
  const videoRef = useRef(null);
  const mascotRef = useRef(null);
  const [allowed] = useState(shouldRender);
  const [src, setSrc] = useState(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const sceneRef = useRef(null);
  const [sceneOn, setSceneOn] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);

  // Off → unmounts everything, so videos stop playing and downloading.
  const active = animeOn && bgOn && allowed;
  const showVideo = videoReady && !videoFailed;
  const showScene = !showVideo && sceneReady && !sceneFailed;

  // Probe for optional clips after the page settles.
  useEffect(() => {
    if (!active || src || videoFailed) return;
    const start = () => {
      setSrc(isSafari() ? SOURCES.mov : SOURCES.webm);
      setSceneOn(true);
    };
    let timer;
    const onLoad = () => (timer = setTimeout(start, 1200));
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, [active, src, videoFailed]);

  // Pause whichever dancer is showing while the tab is hidden.
  useEffect(() => {
    if (!active) return;
    const onVis = () => {
      [videoRef.current, sceneRef.current].forEach((v) => {
        if (v) document.hidden ? v.pause() : v.play().catch(() => {});
      });
      mascotRef.current?.getAnimations?.({ subtree: true }).forEach((a) =>
        document.hidden ? a.pause() : a.play()
      );
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [active, showVideo, showScene]);

  // React to the page: jump on click, dance faster on fast scroll.
  useEffect(() => {
    if (!active) return;
    const target = () => (showVideo ? videoRef.current : mascotRef.current);

    const setSpeed = (rate) => {
      if (showVideo && videoRef.current) videoRef.current.playbackRate = rate;
      else if (showScene && sceneRef.current) sceneRef.current.playbackRate = Math.min(rate, 1.6);
      else
        mascotRef.current?.getAnimations?.({ subtree: true }).forEach((a) => {
          a.playbackRate = rate;
        });
    };

    const onClick = () => {
      if (showScene) return; // a full-screen scene shouldn't jump around
      try {
        target()?.animate(JUMP, { duration: 520, easing: "ease-out", composite: "add" });
      } catch {
        // ignore (no composite support)
      }
    };

    let rate = 1;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let raf = 0;
    const settle = () => {
      rate = Math.max(1, rate - 0.03);
      setSpeed(rate);
      raf = rate > 1 ? requestAnimationFrame(settle) : 0;
    };
    const onScroll = () => {
      const now = performance.now();
      const speed = Math.abs(window.scrollY - lastY) / Math.max(now - lastT, 1); // px/ms
      lastY = window.scrollY;
      lastT = now;
      if (speed > 1.5) {
        rate = Math.min(2, Math.max(rate, 1 + speed / 5));
        setSpeed(rate);
        if (!raf) raf = requestAnimationFrame(settle);
      }
    };

    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      setSpeed(1);
    };
  }, [active, showVideo, showScene]);

  if (!active) return null;

  return (
    <>
      {!showVideo && !showScene && <AnimeMascot ref={mascotRef} />}
      {sceneOn && !sceneFailed && !showVideo && (
        <video
          ref={sceneRef}
          className="ani-scene-bg"
          data-ready={sceneReady}
          src={SOURCES.scene}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setSceneReady(true)}
          onError={() => setSceneFailed(true)}
        />
      )}
      {src && !videoFailed && (
        <video
          ref={videoRef}
          className="ani-dance-bg"
          data-ready={videoReady}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        />
      )}
    </>
  );
};

export default DanceBackground;
