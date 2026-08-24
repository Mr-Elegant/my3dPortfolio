import { useState, useEffect } from "react";
import { agenticScenarios } from "../constants";
import TitleHeader from "./TitleHeader";
import GlowingBorderCard from "./GlowingBorderCard";

const AgenticSandbox = () => {
  const [activeScenarioId, setActiveScenarioId] = useState("scenario-loan-sanction");
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [logs, setLogs] = useState([]);
  const [selectedPayloadStep, setSelectedPayloadStep] = useState(null);

  const scenario =
    agenticScenarios.find((s) => s.id === activeScenarioId) || agenticScenarios[0];

  useEffect(() => {
    // Reset sandbox when switching scenario
    setIsRunning(false);
    setCurrentStepIndex(0);
    setLogs([]);
    setSelectedPayloadStep(null);
  }, [activeScenarioId]);

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setLogs([]);
    setSelectedPayloadStep(null);

    scenario.steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStepIndex(index + 1);
        setLogs((prev) => [...prev, step]);
        if (index === scenario.steps.length - 1) {
          setIsRunning(false);
          setSelectedPayloadStep(step);
        }
      }, (index + 1) * 750);
    });
  };

  return (
    <section id="sandbox" className="w-full section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        
        <TitleHeader
          title="Autonomous Agentic Sandbox"
          sub="🧪 Live In-Browser Multi-Agent Tool Calling & Pipeline Debugger"
        />

        {/* Scenario Selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {agenticScenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              disabled={isRunning}
              className={`px-5 py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 cursor-pointer border ${
                activeScenarioId === sc.id
                  ? "bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] text-white border-white/30 shadow-[0_0_20px_rgba(76,201,240,0.4)] scale-105"
                  : "bg-black-200/80 text-white-50/80 border-white-50/10 hover:border-[#4cc9f0]/40 hover:text-white"
              } ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Sandbox Workbench Card */}
        <div className="mt-8">
          <GlowingBorderCard>
            <div className="flex flex-col gap-6">
              
              {/* Event Trigger Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white-50/10 pb-5">
                <div>
                  <span className="text-[11px] font-mono text-[#00ff88] uppercase tracking-wider font-semibold">
                    SIMULATION WORKBENCH
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-white-50 font-mono mt-1 bg-black-100 p-2.5 rounded-lg border border-white-50/5 inline-block">
                    ⚡ Event Input: <span className="text-[#4cc9f0]">{scenario.triggerEvent}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end lg:self-center">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunning}
                    className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg ${
                      isRunning
                        ? "bg-white/10 text-white/50 cursor-not-allowed animate-pulse"
                        : "bg-gradient-to-r from-[#00ff88] to-[#4cc9f0] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,136,0.5)]"
                    }`}
                  >
                    <span>{isRunning ? "Executing Pipeline..." : "Run Pipeline Simulation"}</span>
                    <span>⚡</span>
                  </button>
                </div>
              </div>

              {/* Step Progression Visualizer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {scenario.steps.map((step, idx) => {
                  const isCompleted = currentStepIndex > idx;
                  const isCurrent = currentStepIndex === idx + 1 && isRunning;

                  return (
                    <div
                      key={step.step}
                      onClick={() => isCompleted && setSelectedPayloadStep(step)}
                      className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                        isCompleted
                          ? "bg-black-100 border-[#00ff88]/50 shadow-[0_0_15px_rgba(0,255,136,0.15)] cursor-pointer hover:border-[#00ff88]"
                          : isCurrent
                          ? "bg-[#4cc9f0]/10 border-[#4cc9f0] animate-pulse"
                          : "bg-black-200/30 border-white-50/5 opacity-50"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-white-50/60 font-bold">STEP 0{step.step}</span>
                        {isCompleted ? (
                          <span className="text-[#00ff88] font-bold">✓ DONE</span>
                        ) : isCurrent ? (
                          <span className="text-[#4cc9f0] font-bold">RUNNING</span>
                        ) : (
                          <span className="text-white-50/30">WAITING</span>
                        )}
                      </div>
                      <h5 className="text-xs font-bold text-white mt-1 line-clamp-2">
                        {step.title}
                      </h5>
                      <span className="text-[9px] text-[#4cc9f0] font-mono mt-2 truncate">
                        @{step.node}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Live Terminal Logs & JSON Payload Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
                
                {/* Left: Terminal Output */}
                <div className="lg:col-span-7 bg-[#0a0a0d] border border-white-50/10 rounded-xl p-4 font-mono text-xs text-white-50 h-72 overflow-y-auto flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-white-50/10 pb-2 mb-2 text-white-50/40 text-[10px]">
                    <span>SYSTEM EXECUTION TERMINAL (STDOUT)</span>
                    <span className="text-[#00ff88]">{isRunning ? "PIPELINE_ACTIVE" : logs.length > 0 ? "IDLE_COMPLETED" : "READY"}</span>
                  </div>

                  {logs.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-white-50/40 text-center">
                      <span>Click "Run Pipeline Simulation" to trigger the agentic workflow execution.</span>
                    </div>
                  ) : (
                    logs.map((logItem, index) => (
                      <div key={index} className="flex flex-col gap-1 animate-[fadeIn_0.2s_ease-out]">
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-[#00ff88]">[{new Date().toLocaleTimeString()}]</span>
                          <span className="text-[#4cc9f0]">[{logItem.node}]</span>
                          <span className="text-white font-semibold">{logItem.title}</span>
                        </div>
                        <p className="text-[#839cb5] text-xs pl-4 border-l-2 border-white-50/10">
                          {logItem.log}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                {/* Right: Structured Tool Calling Payload Inspector */}
                <div className="lg:col-span-5 bg-[#0a0a0d] border border-white-50/10 rounded-xl p-4 font-mono text-xs text-white-50 h-72 overflow-y-auto flex flex-col">
                  <div className="flex items-center justify-between border-b border-white-50/10 pb-2 mb-2 text-white-50/40 text-[10px]">
                    <span>STRUCTURED FUNCTION ARGS / PAYLOAD</span>
                    <span className="text-[#4cc9f0] font-mono">JSON_SCHEMA_VALID</span>
                  </div>

                  {selectedPayloadStep ? (
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-[11px] text-[#00ff88] font-bold">
                        Payload for Step 0{selectedPayloadStep.step} ({selectedPayloadStep.node}):
                      </div>
                      <pre className="flex-1 p-3 bg-black rounded-lg border border-white-50/5 text-[#4cc9f0] text-[11px] overflow-auto">
                        {JSON.stringify(selectedPayloadStep.payload, null, 2)}
                      </pre>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-white-50/40 text-center">
                      <span>Click any completed step above to inspect its validated structured JSON payload.</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </GlowingBorderCard>
        </div>

      </div>
    </section>
  );
};

export default AgenticSandbox;
