import { socialImgs } from "../constants";

const Footer = () => {
  const brandStyles = {
    insta: "hover:bg-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_#E1306C]",
    fb: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_#1877F2]",
    x: "hover:bg-[#14171A] hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]",
    github: "hover:bg-[#2b3137] hover:border-[#2b3137] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    linkedin: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_#0A66C2]",
  };

  return (
    <footer className="w-full mt-24 pt-12 pb-24 md:pb-20 border-t border-white-50/10 relative z-20 bg-black-100/60 backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white-50/70">
          <span className="font-semibold text-white">Preet Karwal</span>
          <span className="hidden sm:inline text-white-50/30">|</span>
          <span>Full-Stack &amp; AI Systems Engineer</span>
          <span className="hidden sm:inline text-white-50/30">|</span>
          <span>© 2026. All rights reserved.</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialImgs.map((info) => (
            <a
              key={info.name}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit Preet Karwal on ${info.name}`}
              className={`size-10 sm:size-11 flex justify-center items-center rounded-xl bg-black-200/90 border border-white-50/15 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md ${
                brandStyles[info.name] || "hover:bg-white/10"
              }`}
            >
              <img 
                src={info.imgPath} 
                alt={info.name} 
                className="w-5 h-5 object-contain" 
              />
            </a>
          ))}
        </div>

        {/* System Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-white-50/60">
          <span className="size-2 rounded-full bg-[#00ff88] animate-ping" />
          <span className="text-[#00ff88]">SYS_CORE: OPERATIONAL</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
