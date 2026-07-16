import { techSkillsList } from "../constants";
import TitleHeader from "../components/TitleHeader";

const SkillBadge = ({ skill }) => {
  return (
    <div className="flex-none flex items-center gap-3 bg-white/5 border border-white-50/10 px-5 py-3 rounded-full hover:border-[#4cc9f0] transition-colors duration-300 mx-4 cursor-pointer group select-none">
      <img
        src={skill.imgPath}
        alt={skill.name}
        className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      <span className="text-white-50 text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  );
};

const TechShowcase = () => (
  <div className="w-full md:mt-24 mt-12 px-5 md:px-20 py-10 relative z-20">
    <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* Title Header Section */}
      <TitleHeader
        title="Technical Skills & Stack"
        sub="⚡ My Tooling & Technologies"
      />

      <div className="mt-8 flex flex-col gap-6 relative overflow-hidden py-5">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        {/* Row 1: Frontend & Languages (Scrolls Left-to-Right) */}
        <div className="marquee h-20">
          <div className="marquee-box-reverse md:gap-4 gap-2">
            {techSkillsList.frontend.map((skill, index) => (
              <SkillBadge key={`fe1-${index}`} skill={skill} />
            ))}
            {techSkillsList.frontend.map((skill, index) => (
              <SkillBadge key={`fe2-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Backend, DB & DevOps (Scrolls Right-to-Left) */}
        <div className="marquee h-20">
          <div className="marquee-box md:gap-4 gap-2">
            {techSkillsList.backend.map((skill, index) => (
              <SkillBadge key={`be1-${index}`} skill={skill} />
            ))}
            {techSkillsList.backend.map((skill, index) => (
              <SkillBadge key={`be2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechShowcase;
