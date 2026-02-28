import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroPhoto = () => {
  // Optional: A subtle floating animation for the photo
  useGSAP(() => {
    gsap.to("#hero-photo-container", {
      y: -15,
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  return (
    // This class names matches your grid layout in index.css
    <div className="hero-3d-layout w-full h-full flex-center relative z-10 md:mt-0 mt-12">
      {/* Main container for the photo and effects */}
      <div
        id="hero-photo-container"
        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] group"
      >
        {/* 1. The Glowing Blur Effect Behind */}
        {/* We use a complex border-radius to create an organic, non-perfect circle shape */}
        <div
          className="absolute -inset-4 bg-gradient-to-r from-primary-cyan/70 via-primary-purple/70 to-primary-cyan/70 opacity-60 blur-3xl group-hover:opacity-90 transition duration-500"
          style={{ borderRadius: "54% 46% 42% 58% / 58% 46% 54% 42%" }}
        ></div>

        {/* 2. The Border Container */}
        <div
          className="relative h-full w-full bg-black-200/80 backdrop-blur-sm overflow-hidden border-[3px] border-white/10 flex-center p-2 z-10 transition-all duration-500 group-hover:border-primary-cyan/50"
           style={{ borderRadius: "54% 46% 42% 58% / 58% 46% 54% 42%" }}
        >
          {/* 3. The Actual Image */}
          {/* IMPORTANT: Replace '/assets/preet-photo.png' with your actual image path */}
          <img
            src="/images/mpsl.png"
            alt="Preet Karwal"
            className="w-full h-full object-cover shadow-lg z-10 filter saturate-[1.1] hover:scale-[1.03] transition-transform duration-500"
             style={{ borderRadius: "50% 50% 46% 54% / 54% 50% 50% 46%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPhoto;