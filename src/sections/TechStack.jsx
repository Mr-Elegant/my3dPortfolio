import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import AbstractSkillModel from "../components/models/tech_logos/AbstractSkillModel";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack2DFallback = ({ techStackIcon }) => {
  const name = techStackIcon.name;

  if (name === "React Developer") {
    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          className="w-20 h-20 animate-[spin_10s_linear_infinite] text-[#4cc9f0] drop-shadow-[0_0_15px_rgba(76,201,240,0.6)]"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>
    );
  }

  if (name === "Backend Developer") {
    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-20 h-20 object-contain node-pulse-glow"
        />
      </div>
    );
  }

  if (name === "Interactive Developer") {
    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <img
          src="/images/logos/three.png"
          alt="Three.js"
          className="w-20 h-20 object-contain filter invert opacity-80 hover:opacity-100 transition-opacity duration-300 three-pulse-glow"
          onError={(e) => {
            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg
        className="w-20 h-20 text-[#a259ff] ai-pulse-glow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="3" fill="#a259ff" fillOpacity="0.4" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
        <circle cx="12" cy="22" r="1" fill="currentColor" />
        <circle cx="2" cy="12" r="1" fill="currentColor" />
        <circle cx="22" cy="12" r="1" fill="currentColor" />
        <circle cx="4.22" cy="4.22" r="1" fill="currentColor" />
        <circle cx="19.78" cy="19.78" r="1" fill="currentColor" />
        <circle cx="19.78" cy="4.22" r="1" fill="currentColor" />
        <circle cx="4.22" cy="19.78" r="1" fill="currentColor" />
      </svg>
    </div>
  );
};

const TechStack = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <section id="skills" className="w-full flex-center section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 w-full">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content flex flex-col items-center justify-between h-full p-6 text-center">
                <div className="tech-icon-wrapper w-full h-48 flex justify-center items-center">
                  {isDesktop ? (
                    techStackIcon.abstractType ? (
                      <AbstractSkillModel type={techStackIcon.abstractType} />
                    ) : (
                      <TechIconCardExperience model={techStackIcon} />
                    )
                  ) : (
                    <TechStack2DFallback techStackIcon={techStackIcon} />
                  )}
                </div>
                <div className="padding-x w-full mt-4 flex flex-col gap-2 relative z-20">
                  <p className="font-bold text-lg text-white group-hover:text-white transition-colors">{techStackIcon.name}</p>
                  {techStackIcon.desc && (
                    <p className="text-sm text-[#839cb5] font-normal leading-relaxed group-hover:text-white/80 transition-colors">
                      {techStackIcon.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;