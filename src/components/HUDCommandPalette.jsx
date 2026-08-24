import { useState, useEffect, useRef } from "react";

const HUDCommandPalette = ({ isOpen, onClose, onResumeClick, onToggleTheme }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ PREET_OS [v2.6.4-HUD-TERMINAL] INITIALIZED. Type 'help' or click quick commands below.",
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    // Append user input to terminal log
    const userLog = { type: "user", text: rawCmd };

    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);
      setInput("");
      return;
    }

    let responseLog = null;

    if (cmd === "help" || cmd === "?") {
      responseLog = {
        type: "system",
        text: `AVAILABLE TERMINAL COMMANDS:
  • cat resume / cv        - Open Curriculum Vitae / PDF export modal
  • goto <section>         - Jump to: projects | architecture | sandbox | skills | experience | contact
  • diagnostics / status   - Run real-time cloud infrastructure & gateway health checks
  • sysinfo                - View developer system environment & stack specifications
  • sudo hire-preet        - Recruiter Fast-Track (Direct contact & Calendly uplink)
  • clear / cls            - Clear terminal output buffer
  • exit / close           - Close HUD command terminal`,
      };
    } else if (cmd === "cat resume" || cmd === "cv" || cmd === "resume") {
      responseLog = { type: "success", text: "✓ Initializing CV & Print Engine... Opening Curriculum Vitae Modal." };
      setTimeout(() => {
        onClose();
        onResumeClick();
      }, 500);
    } else if (cmd.startsWith("goto ")) {
      const section = cmd.replace("goto ", "").trim();
      const targetMap = {
        projects: "work",
        work: "work",
        architecture: "architecture",
        blueprints: "architecture",
        sandbox: "sandbox",
        agentic: "sandbox",
        skills: "skills",
        stack: "skills",
        experience: "experience",
        career: "experience",
        contact: "contact",
        uplink: "contact",
      };

      const targetId = targetMap[section];
      if (targetId) {
        responseLog = { type: "success", text: `✓ Target lock: #${targetId}. Executing warp jump...` };
        setTimeout(() => {
          onClose();
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      } else {
        responseLog = {
          type: "error",
          text: `⚠ Unknown target: '${section}'. Valid targets: projects, architecture, sandbox, skills, experience, contact.`,
        };
      }
    } else if (cmd === "diagnostics" || cmd === "status") {
      responseLog = {
        type: "system",
        text: `[SYSTEM TELEMETRY DIAGNOSTICS]:
  • AWS EC2 Nginx Ingress       : [ONLINE]  Latency: 14ms (p99)
  • Node.js PM2 Process Cluster : [ONLINE]  Workers: 4 CPU cores
  • Redis Pub/Sub Message Bus   : [ONLINE]  Memory: 24.8MB / 0% drops
  • MongoDB Replica Shards      : [HEALTHY] O(1) Cursor Pagination
  • Vercel AI SDK Gateway       : [ACTIVE]  SSE Stream Ready
  -------------------------------------------------------------
  OVERALL STATUS: 100% OPERATIONAL | 0 FATAL ERRORS | 99.99% SLA`,
      };
    } else if (cmd === "sysinfo") {
      responseLog = {
        type: "system",
        text: `[PREET_OS ENVIRONMENT SPECIFICATIONS]:
  • ARCHITECT: Preet Karwal (Full-Stack & AI Systems Engineer)
  • EXPERIENCE: 4+ Years Production Full-Stack & LLM Architecture
  • CORE TECH: React.js • Next.js (App Router) • Node.js • TypeScript • OpenRouter • Ollama • Vercel AI SDK • Redis • PostgreSQL • MongoDB • AWS
  • LOCATION: Sonipat, Haryana, India (Remote Global Ready)`,
      };
    } else if (cmd === "sudo hire-preet" || cmd === "hire" || cmd === "contact") {
      responseLog = {
        type: "success",
        text: `🚀 [RECRUITER FAST-TRACK ACCESS GRANTED]:
  • Direct Phone: +91-8572874207
  • Email Uplink: preetverma365@gmail.com
  • LinkedIn: linkedin.com/in/preetkarwal
  • GitHub: github.com/Mr-Elegant
  • Status: Actively evaluating High-Impact Senior / Lead Engineering Opportunities`,
      };
    } else if (cmd.startsWith("theme")) {
      if (onToggleTheme) {
        onToggleTheme();
        responseLog = {
          type: "success",
          text: "✓ Global UI color theme toggled successfully.",
        };
      }
    } else if (cmd === "exit" || cmd === "close" || cmd === "quit") {
      onClose();
      return;
    } else {
      responseLog = {
        type: "error",
        text: `command not found: '${rawCmd}'. Type 'help' to see list of executable commands.`,
      };
    }

    setHistory((prev) => [...prev, userLog, responseLog]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-[fadeIn_0.15s_ease-out]">
      <div className="relative w-full max-w-3xl bg-[#090b10] border border-[#00f0ff]/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal HUD Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black-200/80 border-b border-white-50/10 text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff003c]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffb703]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#00ff88]/80 inline-block" />
            <span className="text-white-50/70 font-bold ml-2">PREET_CLI // HUD COMMAND PALETTE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00f0ff] uppercase bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/20">
              ESC to close
            </span>
            <button
              onClick={onClose}
              className="text-white-50/60 hover:text-white cursor-pointer font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Quick Action Chips */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-black/50 border-b border-white-50/5 overflow-x-auto text-[11px] font-mono text-white-50/80">
          <span className="text-white-50/40 shrink-0">QUICK CMDS:</span>
          {[
            { label: "cat resume", cmd: "cat resume" },
            { label: "goto projects", cmd: "goto projects" },
            { label: "goto architecture", cmd: "goto architecture" },
            { label: "theme toggle", cmd: "theme toggle" },
            { label: "diagnostics", cmd: "diagnostics" },
            { label: "sudo hire-preet", cmd: "sudo hire-preet" },
            { label: "help", cmd: "help" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleCommand(item.cmd)}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#00f0ff]/20 hover:text-[#00f0ff] text-white-50 border border-white-50/10 transition-all shrink-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Terminal Logs Area */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs text-white-50 space-y-3 hud-scanline">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === "user" && (
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <span className="text-white-50/40">preet@architect:~$</span>
                  <span className="text-white font-bold">{item.text}</span>
                </div>
              )}
              {item.type === "system" && (
                <pre className="text-[#839cb5] whitespace-pre-wrap pl-2 font-mono">
                  {item.text}
                </pre>
              )}
              {item.type === "success" && (
                <div className="text-[#00ff88] pl-2 font-semibold">
                  {item.text}
                </div>
              )}
              {item.type === "error" && (
                <div className="text-[#ff4d4d] pl-2 font-semibold">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Interactive Input Line */}
        <div className="flex items-center px-5 py-3.5 bg-black border-t border-white-50/10 font-mono text-xs">
          <span className="text-[#00ff88] font-bold mr-2">preet@architect:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command here..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-white-50/30"
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black font-bold text-xs transition-colors cursor-pointer border border-[#00f0ff]/30 ml-2"
          >
            EXEC ↵
          </button>
        </div>

      </div>
    </div>
  );
};

export default HUDCommandPalette;
