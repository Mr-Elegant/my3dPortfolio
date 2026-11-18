import { useCallback, useEffect, useRef, useState } from "react";
import AnimeMascot from "./AnimeMascot";
import { useAnimeMode } from "../../utils/animeMode";
import { unlock } from "../../utils/achievements";

/**
 * Kōdo as a guide: peeks in (bottom-right) with a speech-bubble tip the first
 * time each key section scrolls into view. Once per section per visit,
 * one tip at a time, auto-hides, dismissible, and "No more tips" persists.
 * Also unlocks the section-based achievements. Anime Mode only.
 */
const TIPS = {
  work: "These projects are live! Hit “Visit Live Site” to try one, or 📖 read its story as a manga.",
  architecture: "Click any layer in the blueprint to inspect its trade-offs.",
  sandbox: "Press “Run Pipeline Simulation” and watch the agents work step by step.",
  "anime-lab": "Psst… drag the power level all the way up. Trust me. ⚡",
  contact: "Send a message and I'll deliver it personally! 📨",
};
const SECTION_ACHIEVEMENTS = { "anime-lab": "lab-visitor", contact: "explorer" };

const SEEN_KEY = "preet_kodo_seen"; // sessionStorage: sections already tipped this visit
const OFF_KEY = "preet_kodo_tips_off"; // localStorage: user turned tips off
const SHOW_MS = 7000;
const MIN_GAP_MS = 6000;

const readSeen = () => {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(SEEN_KEY) || "[]"));
  } catch {
    return new Set();
  }
};

const KodoGuide = () => {
  const animeOn = useAnimeMode();
  const [tip, setTip] = useState(null); // { id, text }
  const [leaving, setLeaving] = useState(false);
  const [tipsOff, setTipsOff] = useState(() => typeof window !== "undefined" && localStorage.getItem(OFF_KEY) === "1");
  const lastShown = useRef(0);
  const hideTimer = useRef(0);

  const hide = useCallback(() => {
    clearTimeout(hideTimer.current);
    setLeaving(true);
    setTimeout(() => {
      setTip(null);
      setLeaving(false);
    }, 280);
  }, []);

  useEffect(() => {
    if (!animeOn) return;
    const seen = readSeen();
    const ids = Object.keys({ ...TIPS, ...SECTION_ACHIEVEMENTS });
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (SECTION_ACHIEVEMENTS[id]) unlock(SECTION_ACHIEVEMENTS[id]);

          if (tipsOff || !TIPS[id] || seen.has(id)) return;
          const now = Date.now();
          if (now - lastShown.current < MIN_GAP_MS) return; // don't spam on fast scroll
          seen.add(id);
          sessionStorage.setItem(SEEN_KEY, JSON.stringify([...seen]));
          lastShown.current = now;
          clearTimeout(hideTimer.current);
          setLeaving(false);
          setTip({ id, text: TIPS[id] });
          hideTimer.current = setTimeout(hide, SHOW_MS);
        });
      },
      // Fire when a section crosses the middle band of the screen. Works for very
      // tall sections (e.g. Projects) that can never be 25%+ visible at once.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      io.disconnect();
      clearTimeout(hideTimer.current);
    };
  }, [animeOn, tipsOff, hide]);

  if (!animeOn || !tip) return null;

  return (
    <div className="kodo-guide" data-leaving={leaving} role="status" aria-live="polite">
      <div className="kodo-guide__bubble">
        <p>{tip.text}</p>
        <div className="kodo-guide__actions">
          <button type="button" onClick={hide}>
            Got it
          </button>
          <button
            type="button"
            className="kodo-guide__off"
            onClick={() => {
              localStorage.setItem(OFF_KEY, "1");
              setTipsOff(true);
              hide();
            }}
          >
            No more tips
          </button>
        </div>
      </div>
      <AnimeMascot className="ani-mascot--guide" />
    </div>
  );
};

export default KodoGuide;
