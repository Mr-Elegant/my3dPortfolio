import { useState, useEffect, lazy, Suspense } from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechShowcase from "./sections/TechShowcase";
import FeatureCards from "./sections/FeatureCards";
import SystemStandards from "./sections/SystemStandards";
import Navbar from "./components/NavBar";
import ArchitectureExplorer from "./components/ArchitectureExplorer";
import AgenticSandbox from "./components/AgenticSandbox";
import HUDCommandPalette from "./components/HUDCommandPalette";
import PreetAICopilot from "./components/PreetAICopilot";
import LatencyBenchmarkPlayground from "./components/LatencyBenchmarkPlayground";
import GitHubActivityMatrix from "./components/GitHubActivityMatrix";
import FloatingSocialDock from "./components/FloatingSocialDock";
import { audioFX } from "./utils/audioFX";
import { getInitialTheme, applyTheme, THEMES } from "./utils/themeEngine";

const ResumeModal = lazy(() => import("./components/ResumeModal"));
const SystemDesignModal = lazy(() => import("./components/SystemDesignModal"));

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [activeADRSystemId, setActiveADRSystemId] = useState(null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCLIOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenADR = (systemId) => {
    setActiveADRSystemId(systemId || "devnet");
  };

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onResumeClick={() => setIsResumeOpen(true)}
        onOpenCLI={() => {
          audioFX.playClick();
          setIsCLIOpen(true);
        }}
      />
      
      <Hero
        onResumeClick={() => setIsResumeOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
      />
      
      {/* Flagship Projects with Architecture RFC Triggers */}
      <ShowcaseSection onOpenADR={handleOpenADR} />

      {/* Flagship Interactive Architecture Blueprint Explorer */}
      <ArchitectureExplorer onOpenADR={handleOpenADR} />

      {/* Live Distributed Protocol & Latency Benchmark Playground */}
      <LatencyBenchmarkPlayground />

      {/* Flagship Live In-Browser Agentic Pipeline Sandbox */}
      <AgenticSandbox />

      <TechShowcase />
      <FeatureCards />
      
      {/* Enterprise Architectural & Security Standards */}
      <SystemStandards />

      <Experience />
      <TechStack />

      {/* Live GitHub Commit Matrix & Contribution Heatmap */}
      <GitHubActivityMatrix />

      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Social Contact Dock (LinkedIn, X, Insta, FB, GitHub) */}
      <FloatingSocialDock />

      {/* Floating Preet AI Copilot Trigger Button */}
      <button
        onClick={() => {
          audioFX.playClick();
          setIsCopilotOpen(true);
        }}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-xl bg-black-100/90 hover:bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_20px_rgba(0,255,136,0.2)] backdrop-blur-xl flex items-center gap-2 font-mono text-xs cursor-pointer transition-all hover:scale-105 group print:hidden"
        title="Open Preet AI Copilot"
      >
        <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
        <span className="font-bold tracking-wider">PREET_AI</span>
        <span className="text-sm">🤖</span>
      </button>

      {/* Floating HUD Terminal CLI Trigger Button */}
      <button
        onClick={() => {
          audioFX.playClick();
          setIsCLIOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2 rounded-xl bg-black-100/90 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl flex items-center gap-2 font-mono text-xs cursor-pointer transition-all hover:scale-105 group print:hidden"
        title="Open HUD Command Terminal (Ctrl + K)"
      >
        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
        <span className="font-bold tracking-wider">HUD_CLI</span>
        <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-white-50 group-hover:text-white">
          Ctrl K
        </kbd>
      </button>

      {/* Preet AI Autonomous Copilot Assistant Modal */}
      <PreetAICopilot
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenADR={handleOpenADR}
      />

      {/* Interactive Developer HUD Command Terminal Modal */}
      <HUDCommandPalette
        isOpen={isCLIOpen}
        onClose={() => setIsCLIOpen(false)}
        onResumeClick={() => setIsResumeOpen(true)}
        onToggleTheme={handleToggleTheme}
      />
      
      {/* Lazy-Loaded Resume Modal */}
      {isResumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        </Suspense>
      )}

      {/* Lazy-Loaded Architecture Decision Record (ADR) Deep-Dive Modal */}
      {activeADRSystemId && (
        <Suspense fallback={null}>
          <SystemDesignModal
            initialSystemId={activeADRSystemId}
            onClose={() => setActiveADRSystemId(null)}
          />
        </Suspense>
      )}
    </>
  );
};

export default App;
