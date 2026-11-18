import { useEffect, useState } from "react";
import { ACHIEVEMENT_EVENT } from "../../utils/achievements";
import { useAnimeMode } from "../../utils/animeMode";
import { audioFX } from "../../utils/audioFX";

/**
 * Manga-style "ACHIEVEMENT UNLOCKED" toasts (top-right, under the navbar).
 * Listens for unlock events from utils/achievements.js. Anime Mode only.
 */
const SHOW_MS = 3800;

const AchievementToasts = () => {
  const animeOn = useAnimeMode();
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (!animeOn) return;
    const onUnlock = (e) => {
      const toast = { ...e.detail, key: `${e.detail.id}-${Date.now()}` };
      setToasts((list) => [...list.slice(-2), toast]); // at most 3 on screen
      try {
        audioFX.playSuccess();
      } catch {
        // audio is optional
      }
      setTimeout(() => setToasts((list) => list.filter((t) => t.key !== toast.key)), SHOW_MS);
    };
    window.addEventListener(ACHIEVEMENT_EVENT, onUnlock);
    return () => window.removeEventListener(ACHIEVEMENT_EVENT, onUnlock);
  }, [animeOn]);

  if (!animeOn) return null;

  return (
    <div className="ani-toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.key} className="ani-toast">
          <span className="ani-toast__icon" aria-hidden="true">
            {t.icon}
          </span>
          <div className="ani-toast__body">
            <span className="ani-toast__kicker">
              🏆 Achievement unlocked · {t.count}/{t.total}
            </span>
            <strong className="ani-toast__title">{t.title}</strong>
            <span className="ani-toast__desc">{t.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementToasts;
