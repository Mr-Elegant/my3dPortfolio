import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { audioFX } from "../utils/audioFX";

const BOOT_LOGS = [
  { text: "INITIALIZING PREET_OS KERNEL v2.6.4...", color: "text-[#00f0ff]" },
  { text: "CHECKING SYSTEM INTEGRITY & CRYPTO BUS... OK", color: "text-[#00ff88]" },
  { text: "LOADING DISTRIBUTED TOPOLOGY & SHADERS...", color: "text-[#d9ecff]" },
  { text: "CONNECTING AUTONOMOUS AGENT PIPELINE...", color: "text-[#9d4edd]" },
  { text: "SYSTEM READY — WELCOME TO THE MATRIX", color: "text-[#00ff88]" },
];

const BootLoader = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const hasFinished = useRef(false);

  useEffect(() => {
    // Check session storage so user doesn't get blocked repeatedly unless requested
    const alreadyBooted = sessionStorage.getItem("preet_os_booted");
    if (alreadyBooted) {
      if (onComplete) onComplete();
      return;
    }

    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 120);

    const timeouts = [];
    BOOT_LOGS.forEach((_, idx) => {
      const timeout = setTimeout(() => {
        setCurrentStep(idx + 1);
        try {
          audioFX.playBeep();
        } catch {
          // ignore audio failure
        }
      }, idx * 380 + 100);
      timeouts.push(timeout);
    });

    const exitTimeout = setTimeout(() => {
      if (hasFinished.current) return;
      hasFinished.current = true;
      sessionStorage.setItem("preet_os_booted", "true");

      try {
        audioFX.playSuccess();
      } catch {
        // ignore
      }

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          yPercent: -100,
          opacity: 0.9,
          duration: 0.7,
          ease: "power4.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      } else {
        if (onComplete) onComplete();
      }
    }, BOOT_LOGS.length * 380 + 450);

    return () => {
      clearInterval(progressInterval);
      timeouts.forEach(clearTimeout);
      clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#060709] flex flex-col justify-between p-6 sm:p-12 font-mono text-xs sm:text-sm select-none hud-grid-bg border-b-2 border-[#00f0ff]/40 shadow-2xl"
    >
      {/* Top HUD Telemetry */}
      <div className="flex items-center justify-between text-white-50/60 pb-4 border-b border-white-50/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-[#00f0ff] font-bold tracking-widest">BOOT_SEQ // PREET_OS</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-xs">
          <span>MEM: 64TB OK</span>
          <span>LATENCY: 12ms</span>
          <span className="text-[#00ff88]">STATUS: ONLINE</span>
        </div>
      </div>

      {/* Center Console Output */}
      <div className="max-w-3xl w-full mx-auto my-auto flex flex-col gap-3.5 bg-black-100/80 p-6 sm:p-8 rounded-2xl border border-white-50/10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.08)] relative">
        <div className="hud-corner-cross -top-1 -left-1" />
        <div className="hud-corner-cross -top-1 -right-1" />
        <div className="hud-corner-cross -bottom-1 -left-1" />
        <div className="hud-corner-cross -bottom-1 -right-1" />

        <div className="text-[#839cb5] text-xs pb-2 border-b border-white/5 flex items-center justify-between">
          <span>&gt; TERMINAL BOOTSTRAP INITIALIZED</span>
          <span className="text-[#00f0ff] animate-pulse">SYS_DIAGNOSTICS</span>
        </div>

        <div className="flex flex-col gap-2 min-h-[140px] justify-center">
          {BOOT_LOGS.slice(0, currentStep).map((log, i) => (
            <div key={i} className={`flex items-center gap-2 ${log.color} transition-all duration-200`}>
              <span className="text-white-50/40">&gt;&gt;</span>
              <span className="font-bold tracking-wide">{log.text}</span>
            </div>
          ))}
          {currentStep < BOOT_LOGS.length && (
            <div className="flex items-center gap-2 text-[#00f0ff]">
              <span className="text-white-50/40">&gt;&gt;</span>
              <span className="hud-cursor" />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 flex flex-col gap-1.5">
          <div className="flex justify-between text-[11px] text-white-50/70">
            <span>COMPILING KERNEL MODULES...</span>
            <span className="font-bold text-[#00f0ff]">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white-50/10 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#4cc9f0] to-[#00ff88] rounded-full transition-all duration-150 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="flex flex-wrap items-center justify-between text-[11px] text-white-50/40 pt-4 border-t border-white-50/10">
        <span>ARCH: x86_64 NEURAL DISTRIBUTED CLUSTER</span>
        <button
          onClick={() => {
            sessionStorage.setItem("preet_os_booted", "true");
            if (onComplete) onComplete();
          }}
          className="text-[#00f0ff] hover:underline cursor-pointer tracking-wider"
        >
          [SKIP BOOT &gt;&gt;]
        </button>
        <span>AUTH: ZERO_TRUST RSA-4096</span>
      </div>
    </div>
  );
};

export default BootLoader;
