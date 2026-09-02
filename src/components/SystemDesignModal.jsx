import { useEffect, useState } from "react";
import { architectureADRs } from "../constants";

const SystemDesignModal = ({ initialSystemId = "muhurat-ai", onClose }) => {
  const [selectedId, setSelectedId] = useState(() => {
    if (initialSystemId === "muhurat-ai" || initialSystemId === "muhurat-ai-topology" || initialSystemId === "muhurat-calendar-adr") {
      return "muhurat-calendar-adr";
    }
    if (initialSystemId === "devnet-chat" || initialSystemId === "devnet-ai-chat" || initialSystemId === "devnet-ai-chat-adr") {
      return "devnet-ai-chat-adr";
    }
    return "devnet-realtime";
  });
  const [activeTab, setActiveTab] = useState("decisions");

  const currentADR =
    architectureADRs.find((a) => a.id === selectedId) || architectureADRs[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black-100 border border-white-50/15 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col gap-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white-50/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#4cc9f0]/15 text-[#4cc9f0] border border-[#4cc9f0]/30">
                ARCHITECTURE DECISION RECORD (ADR)
              </span>
              <span className="text-xs text-white-50/60 font-mono">STATUS: {currentADR.status}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
              {currentADR.rfcTitle}
            </h2>
            <p className="text-xs text-[#839cb5] mt-1 font-mono">
              Lead Architect: {currentADR.author} • {currentADR.projectTitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white-50 hover:text-white bg-black-200 rounded-lg border border-white-50/10 cursor-pointer self-end sm:self-center"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* System Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {architectureADRs.map((adr) => (
            <button
              key={adr.id}
              onClick={() => setSelectedId(adr.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                selectedId === adr.id
                  ? "bg-[#4cc9f0] text-black font-bold border-[#4cc9f0]"
                  : "bg-black-200/80 text-white-50/80 border-white-50/10 hover:text-white"
              }`}
            >
              {adr.projectTitle}
            </button>
          ))}
        </div>

        {/* Executive Summary Banner */}
        <div className="bg-black-200/60 p-4 md:p-5 rounded-xl border border-white-50/10">
          <span className="text-[11px] font-bold text-[#4cc9f0] uppercase tracking-wider block">Executive Architecture Summary:</span>
          <p className="text-sm text-white-50 mt-1 leading-relaxed">{currentADR.executiveSummary}</p>
        </div>

        {/* Inner RFC Navigation Tabs */}
        <div className="flex border-b border-white-50/10 gap-4 overflow-x-auto pb-2 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("decisions")}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "decisions" ? "border-[#4cc9f0] text-[#4cc9f0]" : "border-transparent text-white-50/60 hover:text-white"
            }`}
          >
            1. Key Architectural Decisions ({currentADR.decisions.length})
          </button>
          <button
            onClick={() => setActiveTab("constraints")}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "constraints" ? "border-[#4cc9f0] text-[#4cc9f0]" : "border-transparent text-white-50/60 hover:text-white"
            }`}
          >
            2. Scale Constraints &amp; SLAs
          </button>
          <button
            onClick={() => setActiveTab("failure")}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "failure" ? "border-[#4cc9f0] text-[#4cc9f0]" : "border-transparent text-white-50/60 hover:text-white"
            }`}
          >
            3. Resiliency &amp; Failure Modes
          </button>
          <button
            onClick={() => setActiveTab("roi")}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "roi" ? "border-[#4cc9f0] text-[#4cc9f0]" : "border-transparent text-white-50/60 hover:text-white"
            }`}
          >
            4. Measurable Engineering ROI
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col gap-4">
          {activeTab === "decisions" && (
            <div className="flex flex-col gap-4">
              {currentADR.decisions.map((dec, idx) => (
                <div key={idx} className="bg-black-200/40 border border-white-50/10 rounded-xl p-5">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-[#4cc9f0]">ADR-0{idx + 1}:</span> {dec.decision}
                  </h4>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black-100 p-4 rounded-lg border border-white-50/5">
                      <span className="text-[11px] font-bold text-[#00ff88] uppercase block">Engineering Rationale</span>
                      <p className="text-xs text-white-50/90 mt-1 leading-relaxed">{dec.rationale}</p>
                    </div>
                    <div className="bg-black-100 p-4 rounded-lg border border-white-50/5">
                      <span className="text-[11px] font-bold text-[#ff003c] uppercase block">Trade-Off &amp; Mitigations</span>
                      <p className="text-xs text-white-50/90 mt-1 leading-relaxed">{dec.tradeOff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "constraints" && (
            <div className="bg-black-200/40 border border-white-50/10 rounded-xl p-6 flex flex-col gap-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mission-Critical Scale Constraints</h4>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-sm text-white-50/90 mt-2">
                {currentADR.constraints.map((c, i) => (
                  <li key={i} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "failure" && (
            <div className="bg-black-200/40 border border-white-50/10 rounded-xl p-6 flex flex-col gap-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Failure Recovery &amp; Fault Tolerance Patterns</h4>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {currentADR.failureModes.map((fm, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-black-100 border border-[#ff003c]/20 flex items-start gap-3">
                    <span className="text-[#ff003c] text-sm">🛡️</span>
                    <span className="text-xs text-white-50/90 leading-relaxed">{fm}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "roi" && (
            <div className="bg-black-200/40 border border-white-50/10 rounded-xl p-6 flex flex-col gap-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quantifiable Business &amp; Architectural Impact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                {currentADR.roiImpact.map((roi, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black-100 border border-[#00ff88]/20 flex flex-col justify-between">
                    <span className="text-2xl font-bold text-[#00ff88]">✓</span>
                    <p className="text-xs text-white mt-2 leading-relaxed">{roi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SystemDesignModal;
