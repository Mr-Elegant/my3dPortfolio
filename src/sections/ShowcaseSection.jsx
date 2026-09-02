import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlowingBorderCard from "../components/GlowingBorderCard";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = ({ onOpenADR }) => {
  const sectionRef = useRef(null);
  const muhuratRef = useRef(null);
  const devnetRef = useRef(null);
  const devnetChatRef = useRef(null);
  const movieGuiderRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase card
    const cards = [
      muhuratRef.current,
      devnetRef.current,
      devnetChatRef.current,
      movieGuiderRef.current,
    ].filter(Boolean);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  const handleTiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span>PORTFOLIO // FLAGSHIP PRODUCTION &amp; AGENTIC SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Engineering Systems
          </h2>
          <p className="text-white-50 text-base md:text-lg mt-2 max-w-3xl">
            Autonomous AI agents, distributed real-time platforms, and enterprise cloud architectures with live deployments &amp; RFC documentation.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* ========================================================= */}
          {/* ----- FLAGSHIP PROJECT 1: MUHURAT AI (मुहूर्त AI) ----- */}
          {/* ========================================================= */}
          <div ref={muhuratRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black-100/60 border border-white-50/10 rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-xl hover:border-[#00ff88]/30 transition-all duration-500 shadow-2xl">
            
            {/* Image Preview / 3D Tilt Card */}
            <div className="lg:col-span-7">
              <GlowingBorderCard>
                <div
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  className="relative rounded-2xl overflow-hidden group/tilt transition-transform duration-200 ease-out bg-[#0b101b]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <a 
                    href="https://mahurart-ai.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block cursor-pointer aspect-[16/9] overflow-hidden"
                  >
                    <img
                      src="/images/muhurat_ai.png"
                      alt="Muhurat AI Autonomous Calendar Interface"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/tilt:scale-105"
                    />
                  </a>

                  {/* Floating Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-none group-hover/tilt:pointer-events-auto backdrop-blur-xs">
                    <a
                      href="https://mahurart-ai.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.4)]"
                    >
                      🚀 Live Preview
                    </a>
                    <a
                      href="https://github.com/Mr-Elegant/Mahurart-AI"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-black-100/90 text-white font-mono text-xs font-bold border border-white-50/20 hover:border-[#00ff88] transition-all hover:scale-105"
                    >
                      📦 View Source
                    </a>
                    <button
                      onClick={() => onOpenADR && onOpenADR("muhurat-ai")}
                      className="px-3.5 py-2.5 rounded-xl bg-white-50/10 text-white font-mono text-xs font-bold border border-white-50/20 hover:border-[#4cc9f0] transition-all hover:scale-105 cursor-pointer"
                    >
                      📐 RFC-03
                    </button>
                  </div>
                </div>
              </GlowingBorderCard>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#00ff88] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] inline-block animate-ping" />
                  <span>[AGENTIC_AI: GEMINI_3.6] // [AUTH: DESCOPE_VAULT] // [MCP_READY]</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  🌟 Muhurat AI (मुहूर्त AI)
                </h3>
                <p className="text-sm font-semibold text-[#00ff88] mt-0.5">
                  Autonomous Calendar Intelligence &amp; Vedic Time Optimization
                </p>

                <p className="text-white-50 text-sm md:text-base mt-4 text-justify leading-relaxed">
                  Autonomous calendar assistant inspired by the Vedic principle of <em>Muhurat</em> (finding optimal, conflict-free, auspicious meeting times). Features persistent memory across conversations, Google Calendar Free/Busy queries to eliminate double bookings, instant Google Meet link generation, and a signature <span className="text-white font-semibold">"Midnight Glass"</span> &amp; <span className="text-white font-semibold">"Frosted Pearl"</span> dual-theme Next.js 16 UI.
                </p>

                {/* Tech Highlights */}
                <div className="mt-4 pt-4 border-t border-white-50/10">
                  <span className="text-xs font-mono text-white-50/70 block mb-1.5 uppercase tracking-wider font-semibold">Tech Ecosystem:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js 16 (App Router)", "React 19", "Tailwind CSS v4", "Google Gemini 3.6 Flash", "Mastra AI", "Descope Outbound Vault", "PostgreSQL (Neon)", "MCP Server", "Express.js"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white-50/5 border border-white-50/10 text-xs font-mono text-[#4cc9f0]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://mahurart-ai.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-[#00ff88] transition-colors"
                >
                  Visit Live Site ↗
                </a>
                <a 
                  href="https://github.com/Mr-Elegant/Mahurart-AI" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-xl bg-white-50/10 hover:bg-white-50/20 text-white text-xs font-semibold transition-colors"
                >
                  GitHub ↗
                </a>
                {onOpenADR && (
                  <button
                    onClick={() => onOpenADR("muhurat-ai")}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00ff88]/20 to-[#4cc9f0]/20 hover:from-[#00ff88]/30 hover:to-[#4cc9f0]/30 text-[#00ff88] border border-[#00ff88]/40 text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,136,0.15)]"
                  >
                    <span>System Architecture &amp; ADR (RFC-03)</span>
                    <span>📐</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ----- FLAGSHIP PROJECT 2: DEVNET DISTRIBUTED PLATFORM ---- */}
          {/* ========================================================= */}
          <div ref={devnetRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black-100/60 border border-white-50/10 rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-xl hover:border-[#00f0ff]/30 transition-all duration-500 shadow-2xl">
            
            {/* Image Preview / 3D Tilt Card */}
            <div className="lg:col-span-7">
              <GlowingBorderCard>
                <div
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  className="relative rounded-2xl overflow-hidden group/tilt transition-transform duration-200 ease-out bg-[#000000]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <a 
                    href="https://devnet.co.in" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block cursor-pointer aspect-[16/9] overflow-hidden"
                  >
                    <img
                      src="/images/dnimage.jpg"
                      alt="DevNet App Interface"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/tilt:scale-105"
                    />
                  </a>

                  {/* Floating Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-none group-hover/tilt:pointer-events-auto backdrop-blur-xs">
                    <a
                      href="https://devnet.co.in"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#00f0ff] text-black font-mono text-xs font-bold hover:bg-[#00ff88] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    >
                      🚀 Live Site
                    </a>
                    <a
                      href="https://github.com/Mr-Elegant/DevNet"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-black-100/90 text-white font-mono text-xs font-bold border border-white-50/20 hover:border-[#00f0ff] transition-all hover:scale-105"
                    >
                      📦 GitHub Repo
                    </a>
                  </div>
                </div>
              </GlowingBorderCard>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#00f0ff] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] inline-block animate-ping" />
                  <span>[CLEARANCE: PRODUCTION] // [INFRA: AWS EC2] // [PROTOCOL: WSS/HTTPS]</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  DevNet — Developer Platform &amp; Collaboration Engine
                </h3>
                <p className="text-sm font-semibold text-[#4cc9f0] mt-0.5">
                  Distributed Real-Time Messaging &amp; Live Whiteboard Clustering
                </p>

                <p className="text-white-50 text-sm md:text-base mt-4 text-justify leading-relaxed">
                  Distributed social networking &amp; pairing platform for software developers. Features Tinder-style developer matchmaking, an infinite collaborative whiteboard (tldraw) with binary vector broadcasting, multi-instance Socket.IO clustering via Redis Pub/Sub, and HMAC-SHA256 verified Razorpay subscriptions.
                </p>

                {/* Tech Highlights */}
                <div className="mt-4 pt-4 border-t border-white-50/10">
                  <span className="text-xs font-mono text-white-50/70 block mb-1.5 uppercase tracking-wider font-semibold">Tech Ecosystem:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "Redux Toolkit", "Node.js", "Express.js", "Socket.IO v4", "Redis Pub/Sub", "MongoDB", "AWS EC2", "Nginx", "Razorpay"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white-50/5 border border-white-50/10 text-xs font-mono text-[#00f0ff]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://devnet.co.in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-[#00f0ff] transition-colors"
                >
                  Visit Live Site ↗
                </a>
                <a 
                  href="https://github.com/Mr-Elegant/DevNet" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-xl bg-white-50/10 hover:bg-white-50/20 text-white text-xs font-semibold transition-colors"
                >
                  GitHub ↗
                </a>
                {onOpenADR && (
                  <button
                    onClick={() => onOpenADR("devnet")}
                    className="px-4 py-2 rounded-xl bg-[#4cc9f0]/10 hover:bg-[#4cc9f0]/20 text-[#4cc9f0] border border-[#4cc9f0]/30 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    System Architecture &amp; ADRs 📐
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ----- ROW 2: DEVNET CHAT & MOVIEGUIDER GRID ------------- */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* ----- PROJECT 3: DevNet Chat ----- */}
            <div ref={devnetChatRef} className="bg-black-100/60 border border-white-50/10 rounded-3xl p-6 backdrop-blur-xl hover:border-[#00ff88]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <GlowingBorderCard>
                  <div
                    onMouseMove={handleTiltMove}
                    onMouseLeave={handleTiltLeave}
                    className="relative rounded-2xl overflow-hidden group/tilt transition-transform duration-200 ease-out bg-[#000000]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <a 
                      href="https://dev-net-chat.vercel.app/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block cursor-pointer aspect-[16/10] overflow-hidden"
                    >
                      <img
                        src="/images/devnet_chat.png"
                        alt="DevNet Chat Platform"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover/tilt:scale-105"
                      />
                    </a>

                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-none group-hover/tilt:pointer-events-auto backdrop-blur-xs">
                      <a
                        href="https://dev-net-chat.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-[#00ff88] text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                      >
                        🚀 Live Demo
                      </a>
                      <a
                        href="https://github.com/Mr-Elegant/DevNet-Chat"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-black-100/90 text-white font-mono text-xs font-bold border border-white-50/20 hover:border-[#00ff88] transition-all hover:scale-105"
                      >
                        📦 Repo
                      </a>
                    </div>
                  </div>
                </GlowingBorderCard>

                <div className="flex items-center gap-2 font-mono text-[10px] text-[#00ff88] uppercase tracking-wider mt-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] inline-block animate-ping" />
                  <span>[AI_WORKSPACE] // [STREAM: SSE] // [AUTH: BETTER_AUTH]</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  DevNet Chat — Multi-Model AI Workspace
                </h3>
                <p className="text-xs text-white-50 mt-2 text-justify leading-relaxed">
                  Full-stack streaming AI application built with Next.js 16, React 19, Vercel AI SDK, and OpenRouter (Claude, GPT-4o, DeepSeek) with semantic Redis caching and PostgreSQL persistence.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white-50/10">
                <a href="https://dev-net-chat.vercel.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-xs font-semibold underline hover:text-white">View Project ↗</a>
                <a href="https://github.com/Mr-Elegant/DevNet-Chat" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-xs font-semibold underline hover:text-white">GitHub ↗</a>
                {onOpenADR && (
                  <button
                    onClick={() => onOpenADR("devnet-chat")}
                    className="text-[#00ff88] text-xs font-semibold underline hover:text-white cursor-pointer ml-auto"
                  >
                    Architecture RFC 📐
                  </button>
                )}
              </div>
            </div>

            {/* ----- PROJECT 4: MovieGuider ----- */}
            <div ref={movieGuiderRef} className="bg-black-100/60 border border-white-50/10 rounded-3xl p-6 backdrop-blur-xl hover:border-[#4cc9f0]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <GlowingBorderCard>
                  <div
                    onMouseMove={handleTiltMove}
                    onMouseLeave={handleTiltLeave}
                    className="relative rounded-2xl overflow-hidden group/tilt transition-transform duration-200 ease-out bg-[#000000]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <a 
                      href="https://movieguider2.vercel.app/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block cursor-pointer aspect-[16/10] overflow-hidden"
                    >
                      <img
                        src="/images/mgt.png"
                        alt="MovieGuider App Interface"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/tilt:scale-105"
                      />
                    </a>

                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-none group-hover/tilt:pointer-events-auto backdrop-blur-xs">
                      <a
                        href="https://movieguider2.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-[#4cc9f0] text-black font-mono text-xs font-bold hover:bg-[#00ff88] transition-all hover:scale-105 shadow-[0_0_15px_rgba(76,201,240,0.4)]"
                      >
                        🚀 Live Demo
                      </a>
                      <a
                        href="https://github.com/Mr-Elegant/MovieGuider2res"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-black-100/90 text-white font-mono text-xs font-bold border border-white-50/20 hover:border-[#4cc9f0] transition-all hover:scale-105"
                      >
                        📦 Repo
                      </a>
                    </div>
                  </div>
                </GlowingBorderCard>

                <div className="flex items-center gap-2 font-mono text-[10px] text-[#4cc9f0] uppercase tracking-wider mt-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cc9f0] inline-block animate-ping" />
                  <span>[MEDIA_STREAMING] // [SEARCH_INDEX] // [TMDB_API]</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  MovieGuider — Entertainment Discovery Platform
                </h3>
                <p className="text-xs text-white-50 mt-2 text-justify leading-relaxed">
                  IMDb and Crunchyroll inspired high-concurrency search and exploration application featuring movie/series catalogs, dynamic cast details, trailer playback, and responsive media streaming views.
                </p>
              </div>

              <div className="flex gap-4 mt-4 pt-4 border-t border-white-50/10">
                <a href="https://movieguider2.vercel.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-xs font-semibold underline hover:text-white">View Project ↗</a>
                <a href="https://github.com/Mr-Elegant/MovieGuider2res" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-xs font-semibold underline hover:text-white">GitHub ↗</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;