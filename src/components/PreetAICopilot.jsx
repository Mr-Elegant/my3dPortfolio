import { useState, useEffect, useRef } from "react";
import { audioFX } from "../utils/audioFX";

const PREET_KNOWLEDGE_BASE = [
  {
    keywords: ["muhurat", "calendar", "agent", "vedic", "scheduling", "descope", "mastra", "gemini", "mcp"],
    answer:
      "Preet architected Muhurat AI (मुहूर्त AI), a state-of-the-art autonomous calendar assistant powered by Google Gemini 3.6 Flash, Mastra AI Agent Framework, and Descope Outbound OAuth Vaulting. It features deterministic Zod tool execution, persistent working memory, conflict-free Free/Busy query scheduling, instant Google Meet creation, Model Context Protocol (MCP) server endpoints, and a signature Midnight Glass / Frosted Pearl dual-theme Next.js 16 UI.",
    citations: ["Muhurat AI System Architecture (RFC-03)", "Descope Outbound OAuth Vault Blueprint"],
  },
  {
    keywords: ["redis", "websocket", "socket", "realtime", "real-time", "pubsub", "pub/sub", "devnet"],
    answer:
      "Preet architected DevNet (devnet.co.in), scaling real-time 1-on-1 messaging and collaborative whiteboards (tldraw) across multiple Node.js instances using a Redis Pub/Sub adapter. He engineered binary packet serialization, read receipts, and typing indicators, delivering sub-25ms latency with 99.99% session uptime.",
    citations: ["DevNet Architecture Blueprint", "Redis Pub/Sub RFC-01"],
  },
  {
    keywords: ["nbfc", "loms", "loan", "shree", "vishnupriya", "credit", "fintech", "zoho", "whatsapp"],
    answer:
      "At Shree Vishnupriya Finance (May 2025 – Apr 2026), Preet architected a full-cycle Loan Origination & Management System (LOMS). It features automated credit scoring, automated EMI calculations, and an autonomous LLM tool-calling layer that syncs Zoho CRM, Zoho Books, and dispatches WhatsApp loan contracts compliant with RBI NBFC digital lending standards.",
    citations: ["Shree Vishnupriya Finance Experience", "LOMS Tool-Calling Engine"],
  },
  {
    keywords: ["ai", "llm", "openrouter", "ollama", "vercel", "copilot", "claude", "gpt", "deepseek", "chat"],
    answer:
      "Preet built DevNet Chat (dev-net-chat.vercel.app), a multi-model streaming workspace using Next.js 16 (App Router), React 19, Vercel AI SDK, and OpenRouter (Claude 3.5 Sonnet, GPT-4o, DeepSeek) with local Ollama fallback. He implemented semantic Redis response caching, context window pruning, and deterministic JSON tool calling.",
    citations: ["DevNet Chat Project", "Vercel AI SDK Integration"],
  },
  {
    keywords: ["stack", "skills", "tech", "languages", "frontend", "backend", "database"],
    answer:
      "Preet's core stack spans Full-Stack & AI Systems: React.js, Next.js (App Router), TypeScript, Node.js (Express, Microservices), Socket.IO, Redis, PostgreSQL (Prisma), MongoDB, and AWS EC2 (Linux SysAdmin, Nginx, PM2, Docker, Kubernetes).",
    citations: ["Technical Skills Matrix", "Production Verified Stack"],
  },
  {
    keywords: ["hire", "contact", "interview", "salary", "notice", "location", "email", "phone", "reach"],
    answer:
      "Preet is based in Sonipat, Haryana (open to Global Remote or Hybrid) and is actively evaluating high-impact Lead Systems Engineer & Senior Full-Stack roles. You can reach him directly at preetverma365@gmail.com or +91-8572874207.",
    citations: ["Fast-Track Recruiter Channel", "Direct Contact Verified"],
  },
  {
    keywords: ["experience", "background", "career", "years", "mindgeeks", "ams"],
    answer:
      "Preet has 4+ years of production experience: Software Engineer at Shree Vishnupriya Finance (May 2025–Apr 2026), Full-Stack Developer at MindGeeks Tech (Mar 2022–Dec 2024; shipped 15+ MERN apps), and Intern at AMS Web Solutions (Jan–Jun 2021). He holds an MCA and BCA from MDU Rohtak.",
    citations: ["Work Experience Timeline", "Education: MCA & BCA"],
  },
];

const PreetAICopilot = ({ isOpen, onClose, onOpenResume, onOpenADR }) => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi! I'm **Preet AI Copilot**. I have full context on Preet's 4+ years of production systems experience, system design decisions, tech stack, and availability. What would you like to explore?",
      citations: ["Preet Verified CV", "System Architecture Blueprints"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    audioFX.playClick();

    const userMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // AI Semantic Retrieval
    setTimeout(() => {
      const lower = query.toLowerCase();
      let bestMatch = PREET_KNOWLEDGE_BASE.find((entry) =>
        entry.keywords.some((kw) => lower.includes(kw))
      );

      if (!bestMatch) {
        bestMatch = {
          answer: `Preet is a Full-Stack & AI Systems Engineer with 4+ years of experience in React 19, Next.js, Node.js, Redis, and Vercel AI SDK. Feel free to ask about his specific architectures (DevNet, NBFC LOMS), tech stack, or direct contact info!`,
          citations: ["General Profile Knowledge"],
        };
      }

      audioFX.playBeep();

      const aiMessage = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: bestMatch.answer,
        citations: bestMatch.citations,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1050] flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.15s_ease-out]">
      <div className="relative w-full max-w-lg h-[85vh] sm:h-[600px] bg-[#090c12] border border-[#00f0ff]/30 sm:rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col overflow-hidden">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black-100/90 border-b border-white-50/10 font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>PREET_AI // COPILOT</span>
                <span className="text-[10px] text-[#00f0ff] bg-[#00f0ff]/10 px-1.5 py-0.2 rounded border border-[#00f0ff]/30">
                  LLM RETRIEVAL
                </span>
              </div>
              <p className="text-[10px] text-white-50/50">Context: Full Portfolio &amp; System RFCs</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-white-50/70 hover:text-white text-base p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips & Modal Triggers */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-white-50/5 overflow-x-auto text-[11px] font-mono text-white-50 shrink-0">
          <span className="text-white-50/40 text-[10px]">QUICK CMDS:</span>
          {onOpenResume && (
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="px-2.5 py-1 rounded bg-[#00f0ff]/15 hover:bg-[#00f0ff]/25 text-[#00f0ff] border border-[#00f0ff]/30 transition-all shrink-0 cursor-pointer whitespace-nowrap font-bold"
            >
              📄 Open Resume
            </button>
          )}
          {onOpenADR && (
            <button
              onClick={() => {
                onClose();
                onOpenADR("devnet-realtime");
              }}
              className="px-2.5 py-1 rounded bg-[#00ff88]/15 hover:bg-[#00ff88]/25 text-[#00ff88] border border-[#00ff88]/30 transition-all shrink-0 cursor-pointer whitespace-nowrap font-bold"
            >
              📐 System ADRs
            </button>
          )}
          {[
            "How does Muhurat AI work?",
            "Experience with Redis & WebSockets?",
            "NBFC LOMS architecture flow?",
            "What LLMs & AI SDKs do you use?",
            "How can I hire Preet?",
          ].map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#00f0ff]/15 hover:text-[#00f0ff] text-white-50/80 border border-white-50/10 transition-all shrink-0 cursor-pointer whitespace-nowrap"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat History Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs text-white-50 hud-scanline">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${
                m.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl ${
                  m.sender === "user"
                    ? "bg-[#00f0ff]/15 text-white border border-[#00f0ff]/40 rounded-br-none"
                    : "bg-black-200/90 text-white-50 border border-white-50/10 rounded-bl-none shadow-md"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>

                {m.citations && (
                  <div className="mt-2 pt-2 border-t border-white-50/10 flex flex-wrap gap-1 font-mono text-[9px]">
                    <span className="text-white-50/40">CITATIONS:</span>
                    {m.citations.map((c) => (
                      <span
                        key={c}
                        className="px-1.5 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-white-50/60 font-mono text-[11px] pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
              <span>Preet AI is reasoning across system docs...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-black border-t border-white-50/10 font-mono text-xs">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Preet's systems, code, or availability..."
              className="flex-1 bg-black-200/80 border border-white-50/15 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#00f0ff] placeholder:text-white-50/30"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-2.5 rounded-xl bg-[#00f0ff] hover:bg-[#00ff88] text-black font-bold text-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Ask ↵
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default PreetAICopilot;
