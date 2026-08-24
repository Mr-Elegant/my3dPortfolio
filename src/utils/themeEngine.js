// Theme Engine for Global Dark / Light / Cyberpunk Mode

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  CYBER: "cyber",
};

export const getInitialTheme = () => {
  if (typeof window === "undefined") return THEMES.DARK;
  const saved = localStorage.getItem("preet_portfolio_theme");
  if (saved && Object.values(THEMES).includes(saved)) {
    return saved;
  }
  return THEMES.DARK;
};

export const applyTheme = (theme) => {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preet_portfolio_theme", theme);
};
