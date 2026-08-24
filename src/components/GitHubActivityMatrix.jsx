import { useState } from "react";
import TitleHeader from "./TitleHeader";
import GlowingBorderCard from "./GlowingBorderCard";
import { audioFX } from "../utils/audioFX";

const GITHUB_STATS = {
  username: "Mr-Elegant",
  profileUrl: "https://github.com/Mr-Elegant",
  totalContributions: "1,420+ Commits",
  streak: "84 Days Active Streak",
  topLanguages: [
    { name: "TypeScript", percent: 46, color: "#3178c6" },
    { name: "JavaScript", percent: 34, color: "#f7df1e" },
    { name: "Python", percent: 12, color: "#3776ab" },
    { name: "CSS / GLSL", percent: 8, color: "#264de4" },
  ],
  repos: [
    {
      name: "DevNet",
      desc: "Distributed social networking platform with Socket.IO, Redis Pub/Sub, and tldraw canvas.",
      stars: "28",
      lang: "TypeScript",
      link: "https://github.com/Mr-Elegant/DevNet",
    },
    {
      name: "DevNet-Chat",
      desc: "Multi-model AI streaming workspace with Vercel AI SDK, OpenRouter, and Prisma/Postgres.",
      stars: "34",
      lang: "Next.js 16",
      link: "https://github.com/Mr-Elegant/DevNet-Chat",
    },
    {
      name: "MovieGuider2res",
      desc: "High-concurrency media streaming and entertainment discovery application.",
      stars: "16",
      lang: "React",
      link: "https://github.com/Mr-Elegant/MovieGuider2res",
    },
  ],
};

const GitHubActivityMatrix = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days heatmap grid
  const weeks = Array.from({ length: 36 }, (_, weekIdx) =>
    Array.from({ length: 7 }, (_, dayIdx) => {
      // Create organic looking cluster
      const rand = Math.random();
      const level =
        rand > 0.85 ? 4 : rand > 0.65 ? 3 : rand > 0.4 ? 2 : rand > 0.2 ? 1 : 0;
      return {
        id: `w${weekIdx}-d${dayIdx}`,
        week: weekIdx,
        day: dayIdx,
        level,
        commits: level === 0 ? 0 : level * 3 + Math.floor(Math.random() * 3),
      };
    })
  );

  const levelColors = {
    0: "bg-white-50/5 border-white-50/5",
    1: "bg-[#00f0ff]/25 border-[#00f0ff]/40",
    2: "bg-[#00f0ff]/50 border-[#00f0ff]/60",
    3: "bg-[#00ff88]/70 border-[#00ff88]/80",
    4: "bg-[#00ff88] border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]",
  };

  return (
    <section id="github" className="w-full section-padding relative z-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="Open-Source & GitHub Activity Matrix"
          sub="🐙 Real-time engineering output, code commits, and open-source contributions 🚀"
        />

        <div className="mt-14 w-full">
          <GlowingBorderCard>
            <div className="p-6 md:p-10 bg-black-100/95 rounded-2xl border border-white-50/10 backdrop-blur-xl relative">
              
              {/* Header Profile Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white-50/10 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
                  <a
                    href={GITHUB_STATS.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#00f0ff] font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <span>@{GITHUB_STATS.username}</span>
                    <span className="text-white-50/40 text-xs">↗</span>
                  </a>
                  <span className="text-[10px] text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/30">
                    {GITHUB_STATS.streak}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-white-50/70 text-xs">
                  <span>{GITHUB_STATS.totalContributions} (Past 12 Months)</span>
                </div>
              </div>

              {/* Commit Heatmap Grid */}
              <div className="mt-8 overflow-x-auto pb-4">
                <div className="flex items-center gap-1.5 min-w-[720px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((cell) => (
                        <div
                          key={cell.id}
                          onMouseEnter={() => {
                            audioFX.playClick();
                            setHoveredCell(cell);
                          }}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-3.5 h-3.5 rounded-[3px] border transition-all duration-200 cursor-pointer ${
                            levelColors[cell.level]
                          } hover:scale-125`}
                          title={`${cell.commits} commits`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-white-50/50">
                  <span>
                    {hoveredCell
                      ? `Week ${hoveredCell.week + 1}: ${hoveredCell.commits} commits recorded`
                      : "Hover over matrix nodes for commit volume telemetry"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-white-50/5" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00f0ff]/30" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00f0ff]/60" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00ff88]/80" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00ff88]" />
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Language Distribution & Repositories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 pt-6 border-t border-white-50/10">
                
                {/* Languages Breakdown */}
                <div className="lg:col-span-4 space-y-4">
                  <h4 className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                    // CODEBASE_COMPOSITION
                  </h4>

                  {/* Multi-color Bar */}
                  <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-black-200">
                    {GITHUB_STATS.topLanguages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{
                          width: `${lang.percent}%`,
                          backgroundColor: lang.color,
                        }}
                        className="h-full"
                        title={`${lang.name}: ${lang.percent}%`}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {GITHUB_STATS.topLanguages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-2 text-white-50/80">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span>{lang.name}</span>
                        <span className="text-white-50/40 text-[10px]">{lang.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Starred Repositories */}
                <div className="lg:col-span-8 space-y-3">
                  <h4 className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                    // FEATURED_OPEN_SOURCE_REPOS
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {GITHUB_STATS.repos.map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl bg-black/60 border border-white-50/10 hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                            <span>{repo.name}</span>
                            <span className="text-[10px] text-[#00ff88]">★ {repo.stars}</span>
                          </div>
                          <p className="text-[11px] text-white-50/60 mt-1.5 leading-relaxed line-clamp-2">
                            {repo.desc}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-white-50/40 mt-3 block">
                          {repo.lang} ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </GlowingBorderCard>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivityMatrix;
