import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // 1. Stagger entrance animation of counter cards
    gsap.fromTo(
      ".hud-counter-card",
      { y: 35, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#counter",
          start: "top 85%",
        },
      }
    );

    // 2. Count-up numbers animation
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];
      if (!numberElement || !item) return;

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12 xl:mt-16 mt-20 relative z-20">
      <div className="grid-4-cols">
        {counterItems.map((item, index) => {
          const accent = item.accent || "#00f0ff";

          return (
            <div
              key={index}
              ref={(el) => el && (countersRef.current[index] = el)}
              className="hud-counter-card group relative bg-black-100/90 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] overflow-hidden"
              style={{
                borderColor: `${accent}35`,
                boxShadow: `0 0 25px ${accent}15`,
              }}
            >
              {/* Corner HUD Reticles */}
              <span className="hud-corner-cross -top-1 -left-1 opacity-70" />
              <span className="hud-corner-cross -top-1 -right-1 opacity-70" />
              <span className="hud-corner-cross -bottom-1 -left-1 opacity-70" />
              <span className="hud-corner-cross -bottom-1 -right-1 opacity-70" />

              {/* Ambient radial glow background on card hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${accent} 0%, transparent 70%)`,
                }}
              />

              {/* Top Telemetry Tag */}
              <div className="flex items-center justify-between text-[10px] font-mono mb-4 text-white-50/60 pb-2 border-b border-white-50/10">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="font-bold tracking-wider" style={{ color: accent }}>
                    {item.tag || `METRIC_0${index + 1}`}
                  </span>
                </div>
                <span className="text-[9px] text-white-50/40">CALIBRATED</span>
              </div>

              {/* Counter Value */}
              <div className="flex items-baseline gap-1 my-1">
                <div
                  className="counter-number text-4xl sm:text-5xl font-black tracking-tight font-mono transition-transform duration-300 group-hover:scale-105"
                  style={{
                    color: accent,
                    textShadow: `0 0 20px ${accent}60`,
                  }}
                >
                  0{item.suffix}
                </div>
              </div>

              {/* Counter Label */}
              <div className="text-white-50/90 text-sm sm:text-base font-medium mt-2 leading-snug">
                {item.label}
              </div>

              {/* Subtle Bottom Glow Accent Line */}
              <div
                className="w-full h-[2px] mt-4 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;
