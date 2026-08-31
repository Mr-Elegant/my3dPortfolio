import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";
import GlowingBorderCard from "../components/GlowingBorderCard";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-cards-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full section-padding feature-cards-grid">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <div className="grid-3-cols">
          {abilities.map(({ imgPath, title, desc, accent }, idx) => {
            const cardAccent = accent || "#00f0ff";

            return (
              <div key={title} className="feature-card">
                <GlowingBorderCard>
                  <div className="flex flex-col gap-4 min-h-52 justify-between group cursor-default">
                    <div>
                      {/* Top HUD Index Tag */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-white-50/50 pb-2 border-b border-white-50/10 mb-4">
                        <span style={{ color: cardAccent }} className="font-bold">
                          // ABILITY_0{idx + 1}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cardAccent }} />
                      </div>

                      {/* Icon Container with interactive micro-animation */}
                      <div
                        className="size-16 flex items-center justify-center rounded-2xl p-3.5 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          backgroundColor: `${cardAccent}15`,
                          borderColor: `${cardAccent}40`,
                          boxShadow: `0 0 20px ${cardAccent}20`,
                        }}
                      >
                        <img
                          src={imgPath}
                          alt={title}
                          className="w-full h-full object-contain filter drop-shadow-md"
                        />
                      </div>

                      <h3 className="text-white text-xl font-bold mt-4 group-hover:text-white transition-colors">
                        {title}
                      </h3>
                    </div>

                    <p className="text-[#839cb5] text-sm leading-relaxed group-hover:text-white-50 transition-colors">
                      {desc}
                    </p>
                  </div>
                </GlowingBorderCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;