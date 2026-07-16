import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import AbstractSkillModel from "../components/models/tech_logos/AbstractSkillModel";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 w-full">
          {/* Loop through the techStackIcons array and create a component for each item. */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content flex flex-col items-center justify-between h-full p-6 text-center">
                {/* The tech-icon-wrapper contains either AbstractSkillModel or TechIconCardExperience */}
                <div className="tech-icon-wrapper w-full h-48 flex justify-center items-center">
                  {techStackIcon.abstractType ? (
                    <AbstractSkillModel type={techStackIcon.abstractType} />
                  ) : (
                    <TechIconCardExperience model={techStackIcon} />
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

          {/* This is for the img part */}
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;