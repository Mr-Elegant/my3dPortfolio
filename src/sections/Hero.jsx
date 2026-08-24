import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import SystemTelemetryBar from "../components/SystemTelemetryBar";
import { words } from "../constants";
import { audioFX } from "../utils/audioFX";

// Register plugins with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onResumeClick, onOpenCopilot }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Active unmask state triggers on hover (desktop) OR tap/touch (mobile/tablet)
  const isUnmasked = isHovered || isRevealed;

  const handleToggleReveal = () => {
    audioFX.playBeep();
    setIsRevealed((prev) => !prev);
  };

  useGSAP(() => {
    // 1. Text Animation
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

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none opacity-40">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout relative max-w-7xl mx-auto px-5 md:px-10 xl:px-12 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
        
        {/* LEFT: Hero Headline & CTA Actions */}
        <header className="flex flex-col justify-center w-full xl:w-[56%] z-20">
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

        {/* RIGHT: Interactive Cyber Identity Hologram (Mask Hover & Mobile Tap Reveal) */}
        <div className="relative z-20 w-full xl:w-[44%] flex justify-center items-center">
          <div 
            role="button"
            tabIndex={0}
            aria-label="Toggle anonymous mask reveal"
            onClick={handleToggleReveal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggleReveal();
              }
            }}
            onMouseEnter={() => {
              audioFX.playBeep();
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full max-w-[360px] sm:max-w-[420px] xl:max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#00f0ff]/30 bg-black-100/90 shadow-[0_0_40px_rgba(0,240,255,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-[#00f0ff]/70 hover:shadow-[0_0_50px_rgba(0,240,255,0.3)] select-none cursor-pointer"
          >
            {/* Corner HUD Reticles */}
            <span className="hud-corner-cross -top-1 -left-1 opacity-80" />
            <span className="hud-corner-cross -top-1 -right-1 opacity-80" />
            <span className="hud-corner-cross -bottom-1 -left-1 opacity-80" />
            <span className="hud-corner-cross -bottom-1 -right-1 opacity-80" />

            {/* Top HUD Badge Status */}
            <div className="absolute top-3.5 left-3.5 right-3.5 z-30 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/85 border border-white-50/15 backdrop-blur-md text-[10px] font-mono">
                <span className={`w-2 h-2 rounded-full ${isUnmasked ? "bg-[#00ff88]" : "bg-[#00f0ff]"} animate-ping`} />
                <span className="text-white-50/70">IDENTITY:</span>
                <span className={`font-bold ${isUnmasked ? "text-[#00ff88]" : "text-[#00f0ff]"}`}>
                  {isUnmasked ? "PREET KARWAL [UNMASKED]" : "MASKED [HOVER / TAP]"}
                </span>
              </div>
              <div className="px-2 py-1 rounded bg-black/85 border border-[#00f0ff]/30 text-[10px] font-mono text-[#00f0ff]">
                HUD // v2.6
              </div>
            </div>

            {/* 1. Base Layer: UNMASKED Image */}
            <img
              src="/images/hero_unmasked.jpg"
              alt="Preet Karwal Unmasked"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                isUnmasked ? "scale-105" : "scale-100"
              }`}
            />

            {/* 2. Top Layer: MASKED Image (Smooth Cross-fade on Hover or Mobile Tap) */}
            <img
              src="/images/hero_masked.jpg"
              alt="Anonymous Masked Engineer"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out ${
                isUnmasked ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />

            {/* Mobile Interaction Hint Badge */}
            <div className="block xl:hidden absolute bottom-12 right-3 z-30 px-2.5 py-1 rounded-lg bg-black/80 border border-[#00f0ff]/40 backdrop-blur-md font-mono text-[9px] text-[#00f0ff] font-bold shadow-lg">
              {isUnmasked ? "✓ UNMASKED (TAP TO MASK)" : "👆 TAP TO UNMASK"}
            </div>

            {/* Subtle CRT Scanline overlay */}
            <div className={`absolute inset-0 pointer-events-none hud-scanline transition-opacity ${
              isUnmasked ? "opacity-10" : "opacity-20"
            }`} />

            {/* Bottom Holographic HUD telemetry tag */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-30 flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-black/85 border border-white-50/15 backdrop-blur-md text-[10px] font-mono text-white-50 pointer-events-none">
              <span className="text-[#00f0ff]">SYS_OP: ARCHITECT</span>
              <span className="text-[#00ff88]">ZERO_TRUST: ACTIVE</span>
            </div>
          </div>
        </div>

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