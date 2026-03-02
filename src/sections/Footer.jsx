import { socialImgs } from "../constants";

const Footer = () => {
  // Map exact social keys to their official real-world brand colors and glows
  const brandStyles = {
    insta: "hover:bg-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_#E1306C]",
    fb: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_#1877F2]",
    x: "hover:bg-[#14171A] hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]",
    github: "hover:bg-[#2b3137] hover:border-[#2b3137] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    linkedin: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_#0A66C2]",
  };

  return (
    <footer className="section-padding py-10 border-t border-white/10 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-50 flex gap-2 text-sm md:text-base">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Icons Section */}
      <div className="flex gap-4 z-50">
        {socialImgs.map((info) => (
          <a
            key={info.name}
            href={info.link}
            target="_blank"
            rel="noreferrer"
            // We append the dynamic brand style based on the info.name!
            className={`w-10 h-10 md:w-12 md:h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-white/10 hover:scale-110 transition-all duration-300 cursor-pointer ${
              brandStyles[info.name] || "hover:bg-white/10"
            }`}
          >
            <img 
              src={info.imgPath} 
              alt={info.name} 
              className="w-1/2 h-1/2 object-contain relative z-10" 
            />
          </a>
        ))}
      </div>

      <p className="text-white-50 text-sm md:text-base">
        © 2026 Preet Karwal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;