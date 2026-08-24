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
  x: {
    label: "X (Twitter) Feed",
    color: "#00f0ff",
    glow: "shadow-[0_0_15px_rgba(0,240,255,0.4)]",
    hoverBg: "hover:bg-[#00f0ff]/20 hover:border-[#00f0ff]",
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
  github: {
    label: "GitHub Codebase",
    color: "#00ff88",
    glow: "shadow-[0_0_15px_#00ff88]",
    hoverBg: "hover:bg-[#00ff88]/20 hover:border-[#00ff88]",
  },
};

const FloatingSocialDock = () => {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <aside 
      aria-label="Social Uplink Dock"
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 p-2 rounded-2xl bg-black-100/90 border border-white-50/15 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] print:hidden select-none"
    >
      {/* Top Telemetry Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping my-0.5" title="Uplink Ready" />

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
              className={`size-10 sm:size-11 flex items-center justify-center rounded-xl bg-black-200/80 border border-white-50/10 transition-all duration-300 hover:scale-115 ${
                config.hoverBg
              } ${isHovered ? config.glow : ""}`}
              aria-label={config.label}
            >
              <img
                src={social.imgPath}
                alt={social.name}
                className="size-5 sm:size-5.5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Futuristic Hover Tooltip (Slides Out to the Right) */}
            <div
              className={`absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-black/90 border border-white-50/20 backdrop-blur-xl font-mono text-[11px] font-bold text-white whitespace-nowrap pointer-events-none transition-all duration-200 shadow-xl flex items-center gap-1.5 ${
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
    </aside>
  );
};

export default FloatingSocialDock;
