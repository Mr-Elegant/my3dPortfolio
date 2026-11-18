import { useSyncExternalStore } from "react";

/**
 * Global "Anime Mode" switch. ON by default (index.html also ships
 * <html data-anime="on"> so the first paint is already anime-styled).
 * Sets <html data-anime="on|off"> (drives the CSS skin in index.css) and
 * notifies React subscribers (drives AnimeLayer's interaction FX).
 *
 * Key is versioned: "_v2" ignores stale "off" values saved by an early
 * build where the lab toggle defaulted to off. Only an explicit opt-out
 * via the toggle turns it off now.
 */
const KEY = "preet_anime_mode_v2";
if (typeof window !== "undefined") {
  localStorage.removeItem("preet_anime_mode");
  localStorage.removeItem("sk_anime_mode");
}
const listeners = new Set();

export const getAnimeMode = () => {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(KEY) !== "0";
};

export const applyAnimeMode = (on = getAnimeMode()) => {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.anime = on ? "on" : "off";
};

export const setAnimeMode = (on) => {
  localStorage.setItem(KEY, on ? "1" : "0");
  applyAnimeMode(on);
  listeners.forEach((l) => l());
};

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const useAnimeMode = () => useSyncExternalStore(subscribe, getAnimeMode, () => true);

/** Fired by "▶ Replay opening"; App listens and replays the full boot opening. */
export const REPLAY_OPENING_EVENT = "anime:replay-opening";
export const replayOpening = () => window.dispatchEvent(new Event(REPLAY_OPENING_EVENT));

/**
 * Background dancer / video layer switch (DanceBackground.jsx). ON by default.
 * Independent of Anime Mode, but only has a visible effect while it's on.
 */
const BG_KEY = "preet_anime_bg";

export const getAnimeBg = () => {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(BG_KEY) !== "0";
};

export const setAnimeBg = (on) => {
  localStorage.setItem(BG_KEY, on ? "1" : "0");
  listeners.forEach((l) => l());
};

export const useAnimeBg = () => useSyncExternalStore(subscribe, getAnimeBg, () => true);
