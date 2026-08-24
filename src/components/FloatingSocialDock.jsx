import { useState } from "react";
import { socialImgs } from "../constants";
import { audioFX } from "../utils/audioFX";

const SOCIAL_CONFIGS = {
  linkedin: {
    label: "LinkedIn Uplink",
    color: "#0A66C2",
    glow: "shadow-[0_0_15px_#0A66C2]",
    hoverBg: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]",
  },
  github: {
    label: "GitHub Codebase",
    color: "#00ff88",
    glow: "shadow-[0_0_15px_#00ff88]",
    hoverBg: "hover:bg-[#00ff88]/20 hover:border-[#00ff88]",
  },
  insta: {
    label: "Instagram Direct",
    color: "#E1306C",
    glow: "shadow-[0_0_15px_#E1306C]",
    hoverBg: "hover:bg-[#E1306C]/20 hover:border-[#E1306C]",
  },
  fb: {
    label: "Facebook Channel",
    color: "#1877F2",
    glow: "shadow-[0_0_15px_#1877F2]",
    hoverBg: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]",
  },
};

const FloatingSocialDock = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);

  const toggleMinimize = () => {
    audioFX.playClick();
    setIsMinimized((prev) => !prev);
  };

  return (
    <aside
      aria-label="Social Uplink Dock"
      className={`fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 print:hidden select-none ${
        isMinimized ? "-translate-x-[calc(100%-12px)] sm:-translate-x-[calc(100%-14px)]" : "translate-x-0"
      }`}
    >
      <div className="relative flex items-center">
        {/* Main Dock Capsule */}
        <div className="flex flex-col items-center gap-2 p-2 rounded-2xl bg-black-100/90 border border-white-50/15 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Top Status & Minimize Toggle */}
          <div className="flex items-center justify-between w-full px-1 mb-1 pb-1 border-b border-white-50/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping" title="Uplink Ready" />
            <button
              onClick={toggleMinimize}
              className="p-1 rounded-md text-white-50 hover:text-white hover:bg-white/10 transition-colors text-[10px] cursor-pointer"
              title={isMinimized ? "Expand Social Dock" : "Minimize Social Dock"}
              aria-label="Toggle Social Dock"
            >
              ◀
            </button>
          </div>

          {/* Social Links List */}
          {socialImgs.map((social) => {
            const config = SOCIAL_CONFIGS[social.name] || {
              label: social.name,
              color: "#00f0ff",
              glow: "shadow-[0_0_15px_#00f0ff]",
              hoverBg: "hover:bg-white/10 hover:border-white/30",
            };

            const isHovered = hoveredKey === social.name;

            return (
              <div key={social.name} className="relative flex items-center group">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => {
                    audioFX.playClick();
                    setHoveredKey(social.name);
                  }}
                  onMouseLeave={() => setHoveredKey(null)}
                  className={`size-9 sm:size-10 flex items-center justify-center rounded-xl bg-black-200/80 border border-white-50/10 transition-all duration-300 hover:scale-110 ${
                    config.hoverBg
                  } ${isHovered ? config.glow : ""}`}
                  aria-label={config.label}
                >
                  <img
                    src={social.imgPath}
                    alt={social.name}
                    className="size-4.5 sm:size-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Futuristic Hover Tooltip */}
                <div
                  className={`absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-black/95 border border-white-50/20 backdrop-blur-xl font-mono text-[11px] font-bold text-white whitespace-nowrap pointer-events-none transition-all duration-200 shadow-xl flex items-center gap-1.5 z-50 ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 invisible"
                  }`}
                  style={{ borderColor: config.color }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: config.color }}
                  />
                  <span style={{ color: config.color }}>{config.label}</span>
                  <span className="text-white-50/40 text-[10px]">↗</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Pull-Tab / Expand Handle when Minimized */}
        {isMinimized && (
          <button
            onClick={toggleMinimize}
            className="absolute -right-7 top-1/2 -translate-y-1/2 p-1.5 rounded-r-xl bg-black-100/90 border border-l-0 border-white-50/20 text-[#00f0ff] hover:text-white backdrop-blur-xl shadow-lg cursor-pointer flex flex-col items-center gap-1 text-[10px] font-mono hover:bg-[#00f0ff]/20 transition-all"
            title="Expand Social Dock"
            aria-label="Expand Social Dock"
          >
            <span>▶</span>
            <span className="[writing-mode:vertical-lr] tracking-widest text-[9px] font-bold py-1">
              CONNECT
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default FloatingSocialDock;
