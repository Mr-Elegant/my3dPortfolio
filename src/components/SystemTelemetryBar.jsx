import { useState } from "react";
import { audioFX } from "../utils/audioFX";

const SystemTelemetryBar = ({ onOpenCopilot }) => {
  const [isMuted, setIsMuted] = useState(audioFX.getMuted());

  const handleAudioToggle = () => {
    const nextMuted = audioFX.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12 mt-6 relative z-20">
      <div className="bg-black-100/90 border border-white-50/15 rounded-2xl p-4 md:p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(76,201,240,0.1)] flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Operational Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]"></span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-white-50/60 font-semibold">System Architecture</div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>Full-Stack &amp; AI Systems</span>
              <span className="px-2 py-0.5 text-[10px] rounded bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/30 font-mono">v2.6 PROD</span>
            </div>
          </div>
        </div>

        {/* Middle Telemetry Badges */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-white-50/50 uppercase font-semibold">Core Latency</span>
            <span className="text-[#00ff88] font-mono font-bold">&lt; 35ms (p99)</span>
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] text-white-50/50 uppercase font-semibold">Infrastructure</span>
            <span className="text-white font-mono font-medium">AWS Linux • PM2 • Nginx</span>
          </div>

          <div className="hidden md:flex flex-col">
            <span className="text-[10px] text-white-50/50 uppercase font-semibold">Security Posture</span>
            <span className="text-[#00f0ff] font-mono font-medium">Zero-Trust • HMAC-SHA256</span>
          </div>

          <div className="hidden lg:flex flex-col">
            <span className="text-[10px] text-white-50/50 uppercase font-semibold">AI Tool Orchestration</span>
            <span className="text-[#7209b7] text-white font-mono font-bold bg-[#7209b7]/30 px-2 py-0.5 rounded border border-[#7209b7]/40">Active Autonomous</span>
          </div>
        </div>

        {/* Right: Sound Toggle & Preet AI Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Web Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              !isMuted
                ? "bg-[#00ff88]/15 text-[#00ff88] border-[#00ff88]/40 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                : "bg-white/5 text-white-50/60 border-white-50/10 hover:text-white"
            }`}
            title={isMuted ? "Unmute Sci-Fi Audio FX" : "Mute Audio FX"}
          >
            <span>{isMuted ? "🔇" : "🔊"}</span>
            <span className="hidden sm:inline font-bold">{isMuted ? "SFX: OFF" : "SFX: ON"}</span>
          </button>

          {/* Preet AI Copilot Launcher */}
          {onOpenCopilot && (
            <button
              onClick={() => {
                audioFX.playClick();
                onOpenCopilot();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00f0ff]/15 hover:bg-[#00f0ff]/25 text-[#00f0ff] border border-[#00f0ff]/40 text-xs font-bold font-mono transition-all hover:scale-105 cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
              <span>PREET_AI 🤖</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default SystemTelemetryBar;
