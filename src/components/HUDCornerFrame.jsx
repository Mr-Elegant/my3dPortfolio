const HUDCornerFrame = ({
  children,
  className = "",
  tag = "SYS_NODE // OK",
  showTag = true,
  glowColor = "#00f0ff",
}) => {
  return (
    <div
      className={`relative p-5 bg-black-100/90 border border-white-50/10 rounded-xl backdrop-blur-xl group transition-all duration-300 hover:border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.03)] ${className}`}
    >
      {/* 4 Glowing Corner Reticle Crosses */}
      <span className="hud-corner-cross -top-1 -left-1 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="hud-corner-cross -top-1 -right-1 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="hud-corner-cross -bottom-1 -left-1 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="hud-corner-cross -bottom-1 -right-1 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Optional Top Tag Marker */}
      {showTag && (
        <div className="flex items-center justify-between text-[10px] font-mono text-white-50/50 uppercase tracking-widest pb-3 mb-3 border-b border-white-50/5">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping inline-block"
              style={{ backgroundColor: glowColor }}
            />
            <span style={{ color: glowColor }}>{tag}</span>
          </div>
          <span className="text-white-50/30">FRAME_ID: {Math.floor(Math.random() * 900 + 100)}</span>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HUDCornerFrame;
