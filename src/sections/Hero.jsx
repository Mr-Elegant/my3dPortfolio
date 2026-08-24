import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import SystemTelemetryBar from "../components/SystemTelemetryBar";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { audioFX } from "../utils/audioFX";

// Register plugins with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onResumeClick, onOpenCopilot }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  useGSAP(() => {
    // 1. Existing Text Animation
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // 2. Scroll Down Indicator Fade Out
    gsap.to(".scroll-indicator", {
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "top -150px",
        scrub: true,
      },
    });
  });

  const [roomTheme, setRoomTheme] = useState("cyan");

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none opacity-40">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout relative">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 z-20">
          <div className="flex flex-col gap-6">
            
            {/* Futuristic Terminal Boot Sequence Badge */}
            <div className="flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black-100/90 border border-[#00f0ff]/30 text-[11px] font-mono text-[#00f0ff] w-fit shadow-[0_0_20px_rgba(0,240,255,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse inline-block" />
              <span className="text-white-50/70 font-semibold">&gt; SYS_BOOT:</span>
              <span className="text-[#00f0ff]">PREET_OS v2.6.4</span>
              <span className="text-white-50/40">|</span>
              <span className="text-[#00ff88]">DISTRIBUTED_CORE: ONLINE</span>
              <span className="text-white-50/40">|</span>
              <span className="text-white-50/80">LATENCY: 18ms</span>
            </div>

            <div className="hero-text">
              <h1 className="flex items-center gap-1 md:gap-3 whitespace-nowrap">
                <span>Architecting</span>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 h-[40px] md:h-[78px]"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] bg-clip-text text-transparent leading-none">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Resilient Systems</h1>
              <h1>that Scale &amp; Deliver</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 max-w-2xl leading-relaxed">
              Hi, I’m <strong className="text-white">Preet Karwal</strong> — Full-Stack &amp; AI Systems Engineer.<br />
              <span className="text-[#839cb5] text-sm md:text-base mt-1 block">
                Designing high-throughput distributed backends, autonomous multi-agent automation pipelines, and enterprise cloud architectures.
              </span>
            </p>

            <div className="flex flex-wrap gap-3.5 items-center relative z-20 mt-1">
              <Button
                text="Featured Projects 🚀"
                className="w-auto"
                id="work"
              />
              <Button
                text="System Topologies 📐"
                className="w-auto"
                id="architecture"
              />
              <Button
                text="Curriculum Vitae 📄"
                className="w-auto"
                onClick={onResumeClick}
              />
            </div>

          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        {isDesktop && (
          <figure className="relative z-20 w-full xl:h-full h-[45vh] min-h-[350px] xl:mr-[10%] mr-0">
            {/* 3D Room Ambient Light Controller HUD */}
            <div className="absolute top-2 right-2 xl:right-10 z-40 flex items-center gap-1.5 p-1.5 rounded-xl bg-black-100/90 border border-white-50/15 backdrop-blur-xl font-mono text-[10px] shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <span className="text-white-50/50 px-1 hidden sm:inline">3D_LIGHT:</span>
              {[
                { id: "cyan", color: "#00f0ff", label: "CYAN" },
                { id: "emerald", color: "#00ff88", label: "MATRIX" },
                { id: "violet", color: "#f72585", label: "VIOLET" },
                { id: "amber", color: "#ffb703", label: "AMBER" },
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    audioFX.playClick();
                    setRoomTheme(preset.id);
                  }}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer font-bold ${
                    roomTheme === preset.id
                      ? "bg-white/15 border border-white-50/30"
                      : "text-white-50/50 hover:text-white border border-transparent"
                  }`}
                  style={{ color: preset.color }}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="hero-3d-layout">
              <HeroExperience themeMode={roomTheme} />
            </div>
          </figure>
        )}
      </div>

      {/* Live System Telemetry Bar */}
      <SystemTelemetryBar onOpenCopilot={onOpenCopilot} />

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator absolute bottom-24 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-2 z-30 pointer-events-none">
        <span className="text-white-50/50 text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</span>
        <div className="w-[24px] h-[42px] rounded-full border border-white/20 flex justify-center p-1.5">
          <div className="w-1 h-2 bg-[#4cc9f0] rounded-full scroll-dot" />
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;