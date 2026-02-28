import { socialImgs } from "../constants";

const Footer = () => {
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
            className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer"
          >
            <img 
              src={info.imgPath} 
              alt={info.name} 
              className="w-1/2 h-1/2 object-contain" 
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