import { useEffect, useRef } from "react";
import { animeFX, prefersReducedMotion } from "../utils/animeFX";

// Overshooting "impact" entrance, layered on top of any existing transform.
const POP = [
  { transform: "scale(0.55) skewX(-14deg)", offset: 0 },
  { transform: "scale(1.12) skewX(4deg)", offset: 0.55 },
  { transform: "scale(0.97) skewX(-1deg)", offset: 0.8 },
  { transform: "scale(1) skewX(0deg)", offset: 1 },
];

const TitleHeader = ({ title, sub }) => {
  const headingRef = useRef(null);

  // Pop the heading in once, when anime mode is on.
  useEffect(() => {
    const el = headingRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (document.documentElement.dataset.anime !== "on" || prefersReducedMotion()) return;
        el.classList.add("ani-title--hit");
        // Section transition: a quick slash across the heading as it lands.
        const r = el.getBoundingClientRect();
        animeFX.slash(r.left - 30, r.bottom + 6, r.right + 30, r.top - 6, { width: 14, color: "hot" });
        try {
          el.animate(POP, { duration: 600, easing: "cubic-bezier(.2,.9,.3,1.15)" });
        } catch {
          // ignore
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ani-title-wrap flex flex-col items-center text-center max-w-3xl mx-auto gap-3.5 mb-2">
      {/* Eyebrow / Category Badge */}
      {sub && (
        <div className="ani-title-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black-100/90 border border-[#00f0ff]/30 text-[11px] font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.12)]">
          <span className="size-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">
            {sub.replace(/[^\w\s—&/-]/g, "").trim()}
          </span>
        </div>
      )}

      {/* Main Section Heading (Semantic H2) */}
      <h2
        ref={headingRef}
        className="ani-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
