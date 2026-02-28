import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

// Register the Draggable plugin with GSAP
gsap.registerPlugin(Draggable);

const Hero = () => {
  useGSAP(() => {
    // 1. Existing Text Animation
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // 2. The Floating Animation (Targets the INNER div)
    gsap.to(".floating-anim", {
      y: -20, 
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // 3. The Draggable Feature (Targets the OUTER wrapper)
    Draggable.create(".draggable-photo", {
      type: "x,y",
      bounds: "#hero", // Keeps the photo from being dragged off the screen
      onDragStart: function () {
        // Pops the image up slightly when you grab it
        gsap.to(this.target, { scale: 1.05, duration: 0.2 }); 
      },
      onDragEnd: function () {
        // Smoothly returns to normal scale when you drop it
        gsap.to(this.target, { scale: 1, duration: 0.2, ease: "back.out(1.5)" }); 
      },
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout relative">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Preet Karwal, Full-Stack Software Engineer, <br />
              Proficient in | MERN Stack | Automation | System Design
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />

            {/* MOBILE PHOTO: Draggable Outer, Floating Inner */}
            <div className="mt-10 block xl:hidden draggable-photo relative z-30 w-48 h-48 cursor-grab active:cursor-grabbing">
              <div className="floating-anim w-full h-full relative">
                <div className="absolute inset-0 bg-[#4cc9f0]/40 blur-2xl rounded-full pointer-events-none"></div>
                {/* UPDATE THIS PATH TO YOUR PHOTO */}
                <img 
                  src="/images/mpsl.png" 
                  alt="Preet Karwal" 
                  className="w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl relative z-10 pointer-events-none"
                />
              </div>
            </div>

          </div>
        </header>

        {/* DESKTOP PHOTO: Draggable Outer, Floating Inner */}
        <div className="hidden xl:block absolute left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2 z-50 draggable-photo cursor-grab active:cursor-grabbing pointer-events-auto">
            <div className="floating-anim w-64 h-64 relative">
              <div className="absolute inset-0 bg-[#4cc9f0]/30 blur-3xl rounded-full pointer-events-none"></div>
              {/* UPDATE THIS PATH TO YOUR PHOTO */}
              <img 
                src="/images/mpsl.png" 
                alt="Preet Karwal" 
                className="w-full h-full object-cover rounded-full border-[3px] border-white/20 shadow-[0_0_30px_rgba(76,201,240,0.4)] relative z-10 pointer-events-none"
              />
            </div>
        </div>

        {/* RIGHT: 3D Model or Visual */}
        {/* Added z-20 here to ensure the 3D canvas stays visible! */}
        <figure className="relative z-20 w-full h-full mr-[10%]">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;