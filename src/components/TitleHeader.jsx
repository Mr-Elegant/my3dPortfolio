const TitleHeader = ({ title, sub, badge }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3.5 mb-2">
      {/* Eyebrow / Category Badge */}
      {sub && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black-100/90 border border-[#00f0ff]/30 text-[11px] font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.12)]">
          <span className="size-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">
            {sub.replace(/[^\w\s—&/-]/g, "").trim()}
          </span>
        </div>
      )}

      {/* Main Section Heading (Semantic H2) */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
