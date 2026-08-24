import { useState } from "react";
import TitleHeader from "./TitleHeader";
import GlowingBorderCard from "./GlowingBorderCard";
import { audioFX } from "../utils/audioFX";

const BENCHMARK_PROTOCOLS = [
  {
    id: "websocket",
    name: "WebSocket (Socket.IO + Redis)",
    tag: "DevNet Real-Time Engine",
    color: "#00f0ff",
    badgeBg: "bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30",
    baseLatency: 18,
    headerOverhead: "2 - 6 Bytes (Binary)",
    connectionMode: "Full-Duplex Persistent TCP",
    throughput: "14,500 msg/sec",
    bestFor: "Real-time chat, multiplayer whiteboards, presence heartbeats",
  },
  {
    id: "sse",
    name: "Server-Sent Events (SSE)",
    tag: "DevNet Chat Streaming Engine",
    color: "#00ff88",
    badgeBg: "bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30",
    baseLatency: 24,
    headerOverhead: "8 - 14 Bytes (Text UTF-8)",
    connectionMode: "Unidirectional HTTP/2 Backpressure",
    throughput: "11,200 msg/sec",
    bestFor: "LLM token streaming, notification feeds, stock tickers",
  },
  {
    id: "http_polling",
    name: "HTTP REST Short Polling",
    tag: "Legacy Architecture Baseline",
    color: "#ff0055",
    badgeBg: "bg-[#ff0055]/10 text-[#ff0055] border-[#ff0055]/30",
    baseLatency: 185,
    headerOverhead: "650 - 900 Bytes (Full HTTP Headers)",
    connectionMode: "Ephemeral Request/Response Loop",
    throughput: "850 req/sec",
    bestFor: "Static CRUD operations, background polling fallback",
  },
];

const LatencyBenchmarkPlayground = () => {
  const [packetCount, setPacketCount] = useState(500);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [simulationResults, setSimulationResults] = useState(null);

  const runBenchmark = () => {
    if (isRunning) return;

    audioFX.playClick();
    setIsRunning(true);
    setProgress(0);
    setSimulationResults(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          audioFX.playSuccess();
          setSimulationResults({
            totalTransferred: packetCount,
            wsTime: `${((packetCount * 0.018) + Math.random() * 2).toFixed(2)}ms`,
            sseTime: `${((packetCount * 0.024) + Math.random() * 3).toFixed(2)}ms`,
            httpTime: `${((packetCount * 0.185) + Math.random() * 15).toFixed(2)}ms`,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <section id="benchmark" className="w-full section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="Live Network Protocol & Latency Playground"
          sub="⚡ Interactive performance benchmark comparing WebSockets, Server-Sent Events, and REST Polling 🚀"
        />

        <div className="mt-14 w-full">
          <GlowingBorderCard>
            <div className="p-6 md:p-10 bg-black-100/95 rounded-2xl border border-white-50/10 backdrop-blur-xl relative overflow-hidden">
              
              {/* HUD Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white-50/10 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
                  <span className="text-white font-bold tracking-wider">
                    DISTRIBUTED_TELEMETRY // BENCHMARK_SUITE
                  </span>
                </div>
                <div className="flex items-center gap-4 text-white-50/60 text-[11px]">
                  <span>SIMULATOR: AWS EC2 ap-south-1</span>
                  <span>|</span>
                  <span className="text-[#00ff88]">PACKET ENGINE: READY</span>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-6 bg-black-200/50 p-4 rounded-xl border border-white-50/5">
                <div className="flex items-center gap-3 font-mono text-xs text-white-50">
                  <span className="text-white-50/70">PACKET_BURST:</span>
                  {[100, 500, 1000].map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        audioFX.playClick();
                        setPacketCount(count);
                      }}
                      disabled={isRunning}
                      className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                        packetCount === count
                          ? "bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]"
                          : "bg-black/40 text-white-50/60 border-white-50/10 hover:text-white"
                      }`}
                    >
                      {count} PACKETS
                    </button>
                  ))}
                </div>

                <button
                  onClick={runBenchmark}
                  disabled={isRunning}
                  className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                    isRunning
                      ? "bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/50 animate-pulse cursor-wait"
                      : "bg-[#00f0ff] text-black hover:bg-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] border-[#00f0ff]"
                  }`}
                >
                  {isRunning ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                      <span>TRANSMITTING BATCH ({progress}%)...</span>
                    </>
                  ) : (
                    <>
                      <span>RUN BENCHMARK SIMULATION</span>
                      <span>⚡</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Visualizer */}
              {isRunning && (
                <div className="mt-6 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-white-50/70 text-[11px]">
                    <span>DISPATCHING {packetCount} CONCURRENT PAYLOADS</span>
                    <span className="text-[#00f0ff]">{progress}% COMPLETED</span>
                  </div>
                  <div className="w-full h-2 bg-black-200 rounded-full overflow-hidden border border-white-50/10">
                    <div
                      className="h-full bg-gradient-to-r from-[#00f0ff] to-[#00ff88] transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Protocol Comparison Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                {BENCHMARK_PROTOCOLS.map((proto) => {
                  return (
                    <div
                      key={proto.id}
                      className="p-5 rounded-xl bg-black/60 border border-white-50/10 flex flex-col justify-between hover:border-white-50/30 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border font-semibold ${proto.badgeBg}`}
                          >
                            {proto.tag}
                          </span>
                          <span className="text-xs font-mono text-white-50/40">p99</span>
                        </div>

                        <h4 className="text-base font-bold text-white mb-4">
                          {proto.name}
                        </h4>

                        <div className="space-y-3 font-mono text-xs text-white-50/80">
                          <div className="flex justify-between border-b border-white-50/5 pb-1.5">
                            <span className="text-white-50/40">Avg Latency:</span>
                            <span
                              className="font-bold"
                              style={{ color: proto.color }}
                            >
                              ~{proto.baseLatency}ms
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-white-50/5 pb-1.5">
                            <span className="text-white-50/40">Header Overhead:</span>
                            <span className="text-white-50 font-semibold">
                              {proto.headerOverhead}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-white-50/5 pb-1.5">
                            <span className="text-white-50/40">Throughput:</span>
                            <span className="text-[#00ff88] font-bold">
                              {proto.throughput}
                            </span>
                          </div>
                          <div className="pt-1 text-[11px] text-white-50/60 leading-relaxed font-sans">
                            <strong>Use Case:</strong> {proto.bestFor}
                          </div>
                        </div>
                      </div>

                      {simulationResults && (
                        <div className="mt-4 pt-3 border-t border-white-50/10 font-mono text-xs">
                          <div className="flex justify-between items-center text-[11px]">
                            <span className="text-white-50/40">Simulation Time:</span>
                            <span
                              className="font-bold"
                              style={{ color: proto.color }}
                            >
                              {proto.id === "websocket"
                                ? simulationResults.wsTime
                                : proto.id === "sse"
                                ? simulationResults.sseTime
                                : simulationResults.httpTime}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </GlowingBorderCard>
        </div>
      </div>
    </section>
  );
};

export default LatencyBenchmarkPlayground;
