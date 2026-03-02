const GlowingBorderCard = ({ children }) => {
  return (
    // 1. Outer Container: `p-[2px]` acts as the border thickness. `overflow-hidden` clips the spinning background.
    <div className="relative overflow-hidden rounded-2xl p-[2px] group hover:scale-[1.02] transition-transform duration-300">
      
      {/* 2. The Running Line: A large spinning conic gradient. 
             It fades from transparent -> Green -> transparent to look like a shooting star/line. 
             `animate-[spin_4s_linear_infinite]` controls the speed. */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00ff33_50%,transparent_100%)]" />
      
      {/* 3. The Inner Card: Solid dark background that covers the middle of the gradient */}
      <div className="relative h-full w-full rounded-xl bg-[#050505] p-6 z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingBorderCard;