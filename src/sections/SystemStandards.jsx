import { systemStandardsData } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowingBorderCard from "../components/GlowingBorderCard";

const SystemStandards = () => {
  return (
    <section id="standards" className="w-full section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto md:px-10 px-5">
        
        <TitleHeader
          title="Architectural & Security Standards"
          sub="🛡️ Enterprise-Grade Engineering Pillars"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {systemStandardsData.map((standard) => (
            <div key={standard.pillar} className="h-full">
              <GlowingBorderCard>
                <div className="flex flex-col justify-between h-full gap-6">
                  
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{standard.icon}</span>
                      <span
                        className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: `${standard.color}15`,
                          borderColor: `${standard.color}40`,
                          color: standard.color,
                        }}
                      >
                        {standard.metrics}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-4">
                      {standard.pillar}
                    </h3>
                  </div>

                  {/* Principles List */}
                  <ul className="flex flex-col gap-3">
                    {standard.principles.map((principle, idx) => (
                      <li key={idx} className="text-xs text-[#839cb5] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#4cc9f0] font-bold mt-0.5">▹</span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Accent */}
                  <div
                    className="h-1 w-full rounded-full opacity-60 mt-2"
                    style={{
                      background: `linear-gradient(90deg, ${standard.color} 0%, transparent 100%)`,
                    }}
                  />

                </div>
              </GlowingBorderCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SystemStandards;
