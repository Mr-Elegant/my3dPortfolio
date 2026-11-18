/**
 * Tiny achievements system for Anime Mode.
 * unlock(id) records it (localStorage) and fires an event that
 * AchievementToasts.jsx turns into a manga-style toast. Repeat unlocks are no-ops.
 */
export const ACHIEVEMENTS = [
  { id: "first-impact", icon: "💥", title: "First Impact", desc: "Clicked your first impact frame" },
  { id: "lab-visitor", icon: "🧪", title: "Lab Rat", desc: "Found the Anime Lab" },
  { id: "over-9000", icon: "⚡", title: "It's Over 9000!", desc: "Maxed out the power level" },
  { id: "combo", icon: "🥋", title: "Triple Combo", desc: "Used POW, SHING and POOF" },
  { id: "manga-reader", icon: "📖", title: "Manga Reader", desc: "Read a project as a manga" },
  { id: "hacker", icon: "⌨️", title: "Terminal Hacker", desc: "Opened the HUD command line" },
  { id: "recruiter", icon: "📄", title: "Recruiter Mode", desc: "Opened the résumé" },
  { id: "day-night", icon: "🌗", title: "Day & Night", desc: "Switched the colour theme" },
  { id: "rerun", icon: "🎬", title: "Encore!", desc: "Replayed the opening" },
  { id: "explorer", icon: "🗺️", title: "Explorer", desc: "Scrolled all the way to Contact" },
];

const KEY = "preet_achievements";
const COMBO_KEY = "preet_combo_effects";
export const ACHIEVEMENT_EVENT = "anime:achievement";

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

export const getUnlocked = () => (typeof window === "undefined" ? [] : read(KEY));

export const unlock = (id) => {
  if (typeof window === "undefined") return;
  const def = ACHIEVEMENTS.find((a) => a.id === id);
  const unlocked = getUnlocked();
  if (!def || unlocked.includes(id)) return;
  unlocked.push(id);
  localStorage.setItem(KEY, JSON.stringify(unlocked));
  window.dispatchEvent(
    new CustomEvent(ACHIEVEMENT_EVENT, {
      detail: { ...def, count: unlocked.length, total: ACHIEVEMENTS.length },
    })
  );
};

/** Track impact effect styles used ("hit" | "slash" | "smoke"); all three → Triple Combo. */
export const trackComboEffect = (effect) => {
  if (typeof window === "undefined") return;
  const seen = new Set(read(COMBO_KEY));
  seen.add(effect);
  localStorage.setItem(COMBO_KEY, JSON.stringify([...seen]));
  if (["hit", "slash", "smoke"].every((e) => seen.has(e))) unlock("combo");
};
