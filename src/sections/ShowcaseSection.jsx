import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
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
            <a 
              href="https://devnet.co.in" 
              target="_blank" 
              rel="noreferrer" 
              className="image-wrapper block cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/images/dnimage.jpg" alt="DevNet App Interface" />
            </a>
            
            <div className="text-content">
              <h2>
                DevNet - The Ultimate Developer Networking Platform
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                A highly scalable social platform for developers featuring Tinder-style matchmaking, a WhatsApp-style real-time chat engine, and polymorphic community feeds.
              </p>
              <p className="text-[#4cc9f0] md:text-lg mt-2 font-semibold">
                React 19 • Node.js • Socket.io • AWS EC2 • Nginx
              </p>
              
              {/* Side-by-side Links */}
              <div className="flex gap-6 mt-5">
                <a href="https://devnet.co.in" target="_blank" rel="noreferrer" className="inline-block text-white underline hover:text-[#4cc9f0]">
                  Visit Live Site ↗
                </a>
                {/* 🚨 UPDATE YOUR GITHUB LINK HERE 🚨 */}
                <a href="https://github.com/Mr-Elegant/YOUR_DEVNET_REPO" target="_blank" rel="noreferrer" className="inline-block text-white underline hover:text-[#4cc9f0]">
                  GitHub Repo ↗
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            
            {/* ----- PROJECT 2: React Showcase ----- */}
            <div className="project" ref={libraryRef}>
              {/* Clickable Image Wrapper */}
              <a 
                href="https://otaku-react.netlify.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="image-wrapper bg-[#000000] block cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="/images/otk.png"
                  alt="React Showcase Platform"
                />
              </a>
              <h2 className="mt-4">React Showcase website</h2>
              <p className="text-sm text-white-50 mt-2">A Single Page Fun Site for Anime Weebs</p>
              
              {/* Side-by-side Links */}
              <div className="flex gap-4 mt-3">
                <a href="https://otaku-react.netlify.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">View Project ↗</a>
                {/* 🚨 UPDATE YOUR GITHUB LINK HERE 🚨 */}
                <a href="https://github.com/Mr-Elegant/Otaku-react-fun-website-" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">GitHub ↗</a>
              </div>
            </div>

            {/* ----- PROJECT 3: MovieGuider ----- */}
            <div className="project" ref={ycDirectoryRef}>
              {/* Clickable Image Wrapper */}
              <a 
                href="https://movieguider2.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="image-wrapper block cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                <img src="/images/mg2.jpg" alt="MovieGuider App" />
              </a>
              <h2 className="mt-4">MovieGuider</h2>
              <p className="text-sm text-white-50 mt-2">An IMDb and Crunchyroll inspired search and browse application for exploring detailed movie , actors, leads and series overviews.</p>
              
              {/* Side-by-side Links */}
              <div className="flex gap-4 mt-3">
                <a href="https://movieguider2.vercel.app/" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">View Project ↗</a>
                {/* 🚨 UPDATE YOUR GITHUB LINK HERE 🚨 */}
                <a href="https://github.com/Mr-Elegant/MovieGuider2res" target="_blank" rel="noreferrer" className="text-[#4cc9f0] text-sm underline hover:text-white">GitHub ↗</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;