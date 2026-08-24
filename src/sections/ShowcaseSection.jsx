import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlowingBorderCard from "../components/GlowingBorderCard";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = ({ onOpenADR }) => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/* ----- PROJECT 1: DevNet ----- */}
          
          <div ref={rydeRef} className="first-project-wrapper">
            {/* Clickable Image Wrapper */}
            <GlowingBorderCard>
            <a 
              href="https://devnet.co.in" 
              target="_blank" 
              rel="noreferrer" 
              className="image-wrapper block cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/images/dnimage.jpg" alt="DevNet App Interface" />
            </a>
            </GlowingBorderCard>
            <div className="text-content">
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#00f0ff] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] inline-block animate-ping" />
                <span>[CLEARANCE: PRODUCTION] // [INFRA: AWS EC2] // [PROTOCOL: WSS/HTTPS]</span>
              </div>
              <h2>
                DevNet - Developer Networking &amp; Collaboration Platform
              </h2>
              <p className="text-white-50 md:text-xl mt-4 text-justify">
                A highly scalable distributed social platform for developers featuring Tinder-style developer matchmaking, a collaborative real-time whiteboard (tldraw), secure Socket.IO multi-instance chat (with read receipts, media uploads, and typing indicators), and premium Razorpay subscriptions.
              </p>
              <p className="text-[#4cc9f0] md:text-lg mt-2 font-semibold">
                React.js • Redux Toolkit • Node.js • Express.js • Socket.IO • Redis Pub/Sub • MongoDB • AWS EC2 • Nginx
              </p>
              
              {/* Action Links & ADR Trigger */}
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <a href="https://devnet.co.in" target="_blank" rel="noreferrer" className="inline-block text-white underline hover:text-[#4cc9f0] text-sm md:text-base font-semibold">
                  Visit Live Site ↗
                </a>
                <a href="https://github.com/Mr-Elegant/DevNet" target="_blank" rel="noreferrer" className="inline-block text-white underline hover:text-[#4cc9f0] text-sm md:text-base font-semibold">
                  GitHub Repo ↗
                </a>
                {onOpenADR && (
                  <button
                    onClick={() => onOpenADR("devnet")}
                    className="px-3.5 py-1.5 rounded-lg bg-[#4cc9f0]/10 hover:bg-[#4cc9f0]/20 text-[#4cc9f0] border border-[#4cc9f0]/30 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    System Architecture &amp; ADRs 📐
                  </button>
                )}
              </div>
            </div>
          </div>
          
          
          <div className="project-list-wrapper overflow-hidden">
            
            <GlowingBorderCard>
            {/* ----- PROJECT 2: DevNet Chat ----- */}
            <div className="project" ref={libraryRef}>
              {/* Clickable Image Wrapper */}
              <a 
                href="https://dev-net-chat.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="image-wrapper bg-[#000000] block cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="/images/devnet_chat.png"
                  alt="DevNet Chat Platform"
                />
              </a>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#00ff88] uppercase tracking-wider mt-4 pl-[8%]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] inline-block animate-ping" />
                <span>[AI_WORKSPACE] // [STREAM: SSE] // [AUTH: BETTER_AUTH]</span>
              </div>
              <h2 className="mt-1 pl-[8%]">DevNet Chat — AI Workspace</h2>
              <p className="text-sm text-white-50 mt-2 pl-[8%]">AI Chat application with streaming responses (Vercel AI SDK, OpenRouter), Better Auth social sign-ins, and Prisma/PostgreSQL storage.</p>
              
              {/* Side-by-side Links */}
              <div className="flex flex-wrap items-center gap-3 mt-3 pl-[8%]">
                <a href="https://dev-net-chat.vercel.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">View Project ↗</a>
                <a href="https://github.com/Mr-Elegant/DevNet-Chat" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">GitHub ↗</a>
                {onOpenADR && (
                  <button
                    onClick={() => onOpenADR("devnet-chat")}
                    className="text-[#00ff88] text-xs underline hover:text-white cursor-pointer"
                  >
                    Architecture RFC 📐
                  </button>
                )}
              </div>
            </div>
            </GlowingBorderCard>

            <GlowingBorderCard>
            {/* ----- PROJECT 3: MovieGuider ----- */}
            <div className="project" ref={ycDirectoryRef}>
              {/* Clickable Image Wrapper */}
              <a 
                href="https://movieguider2.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="image-wrapper block cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <img src="/images/mgt.png" alt="MovieGuider App" />
              </a>
              <h2 className="mt-4 pl-[8%]">MovieGuider</h2>
              <p className="text-sm text-white-50 mt-2 pl-[8%]">An IMDb and Crunchyroll inspired search and browse application for exploring detailed movie, actors, leads, and series overviews.</p>
              
              {/* Side-by-side Links */}
              <div className="flex gap-4 mt-3 pl-[8%]">
                <a href="https://movieguider2.vercel.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">View Project ↗</a>
                <a href="https://github.com/Mr-Elegant/MovieGuider2res" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">GitHub ↗</a>
              </div>
            </div>
            </GlowingBorderCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;