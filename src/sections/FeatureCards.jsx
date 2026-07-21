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
    <div className="w-full padding-x-lg feature-cards-grid my-20">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className="feature-card">
            <GlowingBorderCard>
              <div className="flex flex-col gap-4 min-h-48 justify-between">
                <div>
                  <div className="size-14 flex items-center justify-center rounded-full bg-white/5 border border-white-50/10 p-3">
                    <img src={imgPath} alt={title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mt-4">{title}</h3>
                </div>
                <p className="text-[#839cb5] text-sm leading-relaxed">{desc}</p>
              </div>
            </GlowingBorderCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;