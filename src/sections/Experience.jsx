import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
// import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // 1. Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // 2. Loop through each expText element and animate them in
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 75%",
        },
      });
    });

    // 2b. Animate the left tech panels in
    gsap.utils.toArray(".exp-tech-panel").forEach((panel) => {
      gsap.from(panel, {
        opacity: 0,
        x: -30,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
        },
      });
    });

    // 3. Apple-style scroll-linked word reveal for each bullet point
    gsap.utils.toArray(".reveal-bullet").forEach((bullet) => {
      const words = bullet.querySelectorAll(".reveal-word");
      gsap.to(words, {
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: bullet,
          start: "top 85%",
          end: "top 55%",
          scrub: 0.5,
        },
      });
    });

    // 4. Timeline Logo activation scroll animation
    gsap.utils.toArray(".exp-card-wrapper").forEach((wrapper) => {
      const logo = wrapper.querySelector(".timeline-logo");
      gsap.fromTo(logo, 
        {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 0px rgba(76, 201, 240, 0)",
        },
        {
          scale: 1.15,
          borderColor: "#4cc9f0",
          boxShadow: "0 0 20px rgba(76, 201, 240, 0.6)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 65%",
            end: "bottom 65%",
            toggleActions: "play reverse play reverse",
          }
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
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, idx) => (
              <div key={card.title + idx} className="exp-card-wrapper">
                {/* LEFT COLUMN: Role Tech-Stack & Company Telemetry Panel */}
                <div className="xl:w-2/6 exp-tech-panel">
                  <div className="bg-black-100/90 border border-white-50/15 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.06)] relative group hover:border-[#00f0ff]/50 transition-all duration-500">
                    <span className="hud-corner-cross -top-1 -left-1 opacity-70" />
                    <span className="hud-corner-cross -top-1 -right-1 opacity-70" />
                    <span className="hud-corner-cross -bottom-1 -left-1 opacity-70" />
                    <span className="hud-corner-cross -bottom-1 -right-1 opacity-70" />

                    <div className="flex items-center justify-between text-[10px] font-mono text-white-50/60 pb-3 border-b border-white-50/10">
                      <span className="text-[#00f0ff] font-bold">// TENURE_SYS</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                        {card.badge || "VERIFIED"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 my-4">
                      <div className="size-12 rounded-xl bg-black-200 border border-white/10 p-2 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(76,201,240,0.2)]">
                        <img
                          src={card.logoPath}
                          alt={card.company}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base line-clamp-1">{card.company}</h3>
                        <p className="text-xs text-[#839cb5] font-mono">{card.date}</p>
                      </div>
                    </div>

                    {card.techStack && card.techStack.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white-50/10">
                        <p className="text-[11px] font-mono text-white-50/60 uppercase tracking-wider mb-2">
                          // Core Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {card.techStack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-1 rounded-md bg-white/5 hover:bg-[#00f0ff]/15 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 border border-white-50/10 text-[11px] font-mono text-white-50 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN: Responsibilities Timeline */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="text-xl text-[#4cc9f0] mt-1 font-medium">{card.company}</p>
                        <p className="my-3 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Key Deliverables &amp; Impact
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg reveal-bullet">
                                {responsibility.split(" ").map((word, wordIndex) => (
                                  <span
                                    key={wordIndex}
                                    className="reveal-word inline-block mr-1 opacity-25"
                                  >
                                    {word}
                                  </span>
                                ))}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
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