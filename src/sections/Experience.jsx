import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Stagger animation for experience milestone cards
    gsap.utils.toArray(".exp-milestone-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    // Milestone node activation animation
    gsap.utils.toArray(".milestone-node").forEach((node) => {
      gsap.fromTo(
        node,
        { scale: 0.8, borderColor: "rgba(255, 255, 255, 0.15)" },
        {
          scale: 1.1,
          borderColor: "#00f0ff",
          boxShadow: "0 0 20px rgba(0, 240, 255, 0.6)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full flex-center section-padding relative z-20"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="Professional Engineering Experience"
          sub="💼 Production Architecture, Systems Engineering & Enterprise Impact"
        />

        <div className="mt-16 sm:mt-20 relative">
          {/* Vertical Timeline Guide Track (Desktop) */}
          <div className="hidden lg:block absolute left-[35%] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00f0ff]/40 via-[#4cc9f0]/30 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {expCards.map((card, idx) => (
              <div
                key={card.title + idx}
                className="exp-milestone-card relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* LEFT COLUMN: Role Tech-Stack & Company Telemetry Panel (col-span-4) */}
                <div className="lg:col-span-4">
                  <div className="bg-black-100/90 border border-white-50/15 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.06)] relative group hover:border-[#00f0ff]/50 transition-all duration-500">
                    <span className="hud-corner-cross -top-1 -left-1 opacity-70" />
                    <span className="hud-corner-cross -top-1 -right-1 opacity-70" />
                    <span className="hud-corner-cross -bottom-1 -left-1 opacity-70" />
                    <span className="hud-corner-cross -bottom-1 -right-1 opacity-70" />

                    <div className="flex items-center justify-between text-[11px] font-mono text-white-50/60 pb-3 border-b border-white-50/10">
                      <span className="text-[#00f0ff] font-bold tracking-wider">// TENURE_SYS</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 font-semibold">
                        {card.badge || "VERIFIED"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 my-4">
                      <div className="size-14 rounded-xl bg-black-200 border border-white-50/15 p-2.5 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(76,201,240,0.2)]">
                        <img
                          src={card.logoPath}
                          alt={card.company}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg leading-snug">{card.company}</h3>
                        <p className="text-xs text-[#00f0ff] font-mono mt-1 font-semibold">{card.date}</p>
                      </div>
                    </div>

                    {card.techStack && card.techStack.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white-50/10">
                        <p className="text-[11px] font-mono text-white-50/60 uppercase tracking-wider mb-2.5">
                          // Core Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {card.techStack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#00f0ff]/15 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 border border-white-50/10 text-[11px] font-mono text-white-50 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CENTER MILESTONE NODE (col-span-1 hidden lg:flex justify-center pt-8) */}
                <div className="hidden lg:flex lg:col-span-1 justify-center pt-8 relative z-10">
                  <div className="milestone-node size-8 rounded-full bg-[#060709] border-2 border-white/20 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <span className="size-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  </div>
                </div>

                {/* RIGHT COLUMN: Responsibilities & Impact (col-span-7) */}
                <div className="lg:col-span-7">
                  <div className="bg-black-100/70 border border-white-50/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl relative group hover:border-[#00f0ff]/40 transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white-50/10">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-[#4cc9f0] text-base sm:text-lg font-medium mt-0.5">
                          {card.company}
                        </p>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-white/5 border border-white-50/10 text-xs font-mono text-white-50/70">
                        {card.date}
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-mono text-[#00ff88] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span>▶</span>
                        <span>Key Deliverables &amp; Architectural Impact</span>
                      </p>

                      <ul className="space-y-4">
                        {card.responsibilities.map((responsibility, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3.5 text-sm sm:text-base text-white-50 leading-relaxed"
                          >
                            <span className="text-[#00f0ff] font-bold text-base mt-0.5 shrink-0 select-none">
                              ▹
                            </span>
                            <span className="text-white-50/90 group-hover:text-white transition-colors">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
