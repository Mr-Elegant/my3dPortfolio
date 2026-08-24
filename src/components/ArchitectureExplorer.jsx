import { useState } from "react";
import { systemTopologies } from "../constants";
import TitleHeader from "./TitleHeader";
import GlowingBorderCard from "./GlowingBorderCard";

const ArchitectureExplorer = ({ onOpenADR }) => {
  const [selectedSystemId, setSelectedSystemId] = useState("devnet-distributed");
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeLayerFilter, setActiveLayerFilter] = useState("all");

  const currentSystem =
    systemTopologies.find((s) => s.id === selectedSystemId) || systemTopologies[0];

  const layerColors = {
    client: { bg: "bg-blue-500/10", border: "border-blue-400/30", text: "text-blue-400", label: "Client Layer" },
    gateway: { bg: "bg-purple-500/10", border: "border-purple-400/30", text: "text-purple-400", label: "Gateway & Ingress" },
    compute: { bg: "bg-cyan-500/10", border: "border-cyan-400/30", text: "text-cyan-400", label: "Core Compute" },
    ai: { bg: "bg-emerald-500/10", border: "border-emerald-400/30", text: "text-emerald-400", label: "Agentic AI / Tool Calling" },
    integration: { bg: "bg-amber-500/10", border: "border-amber-400/30", text: "text-amber-400", label: "Integrations & Ledgers" },
    storage: { bg: "bg-rose-500/10", border: "border-rose-400/30", text: "text-rose-400", label: "Data Persistence" },
  };

  const filteredNodes =
    activeLayerFilter === "all"
      ? currentSystem.nodes
      : currentSystem.nodes.filter((node) => node.layer === activeLayerFilter);

  return (
    <section id="architecture" className="w-full section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto md:px-10 px-5">
        
        {/* Title Header */}
        <TitleHeader
          title="System Architecture Blueprints"
          sub="📐 Interactive Distributed Systems & Topology Explorer"
        />

        {/* System Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {systemTopologies.map((system) => {
            const isActive = system.id === selectedSystemId;
            return (
              <button
                key={system.id}
                onClick={() => {
                  setSelectedSystemId(system.id);
                  setSelectedNode(null);
                }}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] text-white border-white/30 shadow-[0_0_20px_rgba(76,201,240,0.4)] scale-105"
                    : "bg-black-200/80 text-white-50/80 border-white-50/10 hover:border-[#4cc9f0]/50 hover:text-white"
                }`}
              >
                {system.name.split("—")[0].split("(")[0]}
              </button>
            );
          })}
        </div>

        {/* Active System Header & Scale SLA Summary */}
        <div className="mt-8 bg-black-100 border border-white-50/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-white-50/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4cc9f0]/10 border border-[#4cc9f0]/30 text-[#4cc9f0] text-xs font-mono mb-2">
                <span>SYSTEM ID: {currentSystem.id.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentSystem.name}
              </h3>
              <p className="text-[#839cb5] text-sm md:text-base mt-1">
                {currentSystem.tagline}
              </p>
            </div>

            {onOpenADR && (
              <button
                onClick={() => onOpenADR(currentSystem.id)}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-[#4cc9f0] hover:text-black text-white font-semibold text-sm transition-all duration-300 border border-white-50/20 flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Read Architecture RFC / ADR</span>
                <span>📄</span>
              </button>
            )}
          </div>

          {/* Key Scale Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-black-200/50 p-4 rounded-xl border border-white-50/5">
              <span className="text-[11px] text-white-50/60 uppercase font-semibold block">Target Uptime</span>
              <span className="text-xl font-bold text-[#00ff88] font-mono mt-1 block">{currentSystem.scaleStats.uptime}</span>
            </div>
            <div className="bg-black-200/50 p-4 rounded-xl border border-white-50/5">
              <span className="text-[11px] text-white-50/60 uppercase font-semibold block">Latency SLA</span>
              <span className="text-xl font-bold text-[#4cc9f0] font-mono mt-1 block">{currentSystem.scaleStats.latency}</span>
            </div>
            <div className="bg-black-200/50 p-4 rounded-xl border border-white-50/5">
              <span className="text-[11px] text-white-50/60 uppercase font-semibold block">Throughput Model</span>
              <span className="text-sm font-bold text-white font-mono mt-1 block truncate">{currentSystem.scaleStats.throughput}</span>
            </div>
            <div className="bg-black-200/50 p-4 rounded-xl border border-white-50/5">
              <span className="text-[11px] text-white-50/60 uppercase font-semibold block">Compliance Standard</span>
              <span className="text-xs font-bold text-[#a259ff] font-mono mt-1 block truncate">{currentSystem.scaleStats.compliance}</span>
            </div>
          </div>
        </div>

        {/* Layer Filter Buttons */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-white-50/60">Filter Architecture Layers:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveLayerFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeLayerFilter === "all" ? "bg-[#4cc9f0] text-black font-bold" : "bg-white/5 text-white-50 hover:bg-white/10"
              }`}
            >
              All Layers ({currentSystem.nodes.length})
            </button>
            {Object.entries(layerColors).map(([layerKey, config]) => (
              <button
                key={layerKey}
                onClick={() => setActiveLayerFilter(layerKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  activeLayerFilter === layerKey
                    ? `${config.bg} ${config.border} ${config.text} font-bold`
                    : "bg-white/5 border-transparent text-white-50/70 hover:text-white"
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Topology Nodes Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNodes.map((node, index) => {
            const layerStyle = layerColors[node.layer] || layerColors.compute;
            const isSelected = selectedNode?.id === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`group cursor-pointer transition-all duration-300 rounded-2xl p-5 border ${
                  isSelected
                    ? "bg-black-100 border-[#4cc9f0] shadow-[0_0_30px_rgba(76,201,240,0.3)] scale-[1.02]"
                    : "bg-black-100/90 border-white-50/10 hover:border-white-50/30 hover:bg-black-100"
                }`}
              >
                {/* Node Header */}
                <div className="flex items-start justify-between gap-3">
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${layerStyle.bg} ${layerStyle.border} ${layerStyle.text}`}>
                    Step 0{index + 1} • {layerStyle.label}
                  </span>
                  <span className="text-xs text-white-50/40 font-mono">ID: {node.id}</span>
                </div>

                <h4 className="text-lg font-bold text-white mt-3 group-hover:text-[#4cc9f0] transition-colors">
                  {node.name}
                </h4>

                <div className="mt-2 text-xs font-mono text-[#00ff88] bg-black-200/80 px-2.5 py-1.5 rounded-md border border-white-50/5 truncate">
                  ⚡ {node.tech}
                </div>

                <p className="text-xs text-white-50/80 mt-3 leading-relaxed line-clamp-2">
                  {node.spec}
                </p>

                <div className="mt-4 pt-3 border-t border-white-50/5 flex items-center justify-between text-xs text-[#4cc9f0]">
                  <span>Click to inspect trade-offs &amp; SLA</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Node Deep-Dive Inspector Panel */}
        {selectedNode && (
          <div className="mt-10 animate-[fadeIn_0.3s_ease-out]">
            <GlowingBorderCard>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white-50/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#4cc9f0] uppercase tracking-wider font-semibold">
                      Architectural Node Inspection
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">{selectedNode.name}</h3>
                    <p className="text-xs text-[#00ff88] font-mono mt-1">Component Tech: {selectedNode.tech}</p>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                  >
                    ✕ Close Inspector
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Specification */}
                  <div className="bg-black-200/60 p-5 rounded-xl border border-white-50/5 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>⚙️ Technical Specification</span>
                      </h5>
                      <p className="text-xs text-white-50/90 mt-3 leading-relaxed">{selectedNode.spec}</p>
                    </div>
                    <span className="text-[10px] text-white-50/40 uppercase font-mono mt-4">Layer: {selectedNode.type}</span>
                  </div>

                  {/* Trade-Off Analysis */}
                  <div className="bg-black-200/60 p-5 rounded-xl border border-white-50/5 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-[#4cc9f0] flex items-center gap-2">
                        <span>⚖️ Architectural Trade-off (The "Why")</span>
                      </h5>
                      <p className="text-xs text-white-50/90 mt-3 leading-relaxed">{selectedNode.tradeOff}</p>
                    </div>
                    <span className="text-[10px] text-[#4cc9f0]/60 uppercase font-mono mt-4">Design Rationale</span>
                  </div>

                  {/* Failure Mode & Resiliency */}
                  <div className="bg-black-200/60 p-5 rounded-xl border border-white-50/5 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-[#ff003c] flex items-center gap-2">
                        <span>🛡️ Failure Mode &amp; Resiliency</span>
                      </h5>
                      <p className="text-xs text-white-50/90 mt-3 leading-relaxed">{selectedNode.failureMode}</p>
                    </div>
                    <span className="text-[10px] text-[#ff003c]/60 uppercase font-mono mt-4">Disaster Recovery</span>
                  </div>
                </div>
              </div>
            </GlowingBorderCard>
          </div>
        )}

      </div>
    </section>
  );
};

export default ArchitectureExplorer;
