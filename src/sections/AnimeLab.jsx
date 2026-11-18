import TitleHeader from "../components/TitleHeader";
import AnimeButton from "../components/anime/AnimeButton";
import AnimeToggle from "../components/anime/AnimeToggle";
import PowerLevelSlider from "../components/anime/PowerLevelSlider";
import HeartButton from "../components/anime/HeartButton";
import SlashTabs from "../components/anime/SlashTabs";
import CopyPuffButton from "../components/anime/CopyPuffButton";
import { useAnimeMode, setAnimeMode, replayOpening } from "../utils/animeMode";
import { techSkillsList } from "../constants";

const SkillChips = ({ items }) => (
  <ul className="flex flex-wrap gap-2.5">
    {items.map(({ name, imgPath }) => (
      <li key={name} className="ani-chip">
        <img src={imgPath} alt="" className="size-4" loading="lazy" />
        {name}
      </li>
    ))}
  </ul>
);

const Panel = ({ title, kicker, className = "", children }) => (
  <div className={`ani-panel ${className}`}>
    <div className="ani-panel__head">
      <span className="ani-panel__kicker">{kicker}</span>
      <h3 className="ani-panel__title">{title}</h3>
    </div>
    {children}
  </div>
);

const AnimeLab = () => {
  // Shared with the navbar toggle; AnimeLayer applies it site-wide.
  const animeMode = useAnimeMode();

  const tabs = [
    { id: "frontend", label: "Frontend arc", content: <SkillChips items={techSkillsList.frontend} /> },
    { id: "backend", label: "Backend arc", content: <SkillChips items={techSkillsList.backend} /> },
  ];

  return (
    <section id="anime-lab" className="w-full section-padding ani-lab">
      <div className="w-full max-w-7xl mx-auto padding-x-lg">
        <TitleHeader title="Preet's Anime Lab" sub="Anime-grade micro-interactions" />
        <p className="text-center text-white-50/70 max-w-2xl mx-auto mt-3 mb-12 text-sm md:text-base">
          Springs that squash and overshoot, impact frames, slashes and smoke, all drawn on one
          canvas with no dependencies. Go on, press something.
        </p>

        <div className="ani-grid">
          <Panel kicker="EP.01" title="Impact frames" className="ani-grid__a">
            <div className="flex flex-wrap gap-4 items-center">
              <AnimeButton sfx="DON!">Hire me</AnimeButton>
              <AnimeButton sfx="BAM!" variant="hot" color="hot">
                Deploy
              </AnimeButton>
              <AnimeButton sfx="ZAAN!" variant="gold" color="gold">
                Ship it
              </AnimeButton>
            </div>
          </Panel>

          <Panel kicker="EP.02" title="Transformation sequence" className="ani-grid__b">
            <div className="flex flex-col gap-4">
              <AnimeToggle
                label="Anime mode (whole site)"
                checked={animeMode}
                onChange={setAnimeMode}
              />
              <AnimeToggle label="Final form" onText="HENSHIN!" color="gold" />
              {animeMode && (
                <AnimeButton
                  sfx="AGAIN!"
                  variant="gold"
                  color="gold"
                  className="self-start"
                  onClick={() => setTimeout(replayOpening, 350)}
                >
                  ▶ Replay opening
                </AnimeButton>
              )}
            </div>
          </Panel>

          <Panel kicker="EP.03" title="Scouter" className="ani-grid__c">
            <PowerLevelSlider label="Dev power level" />
          </Panel>

          <Panel kicker="EP.04" title="Training arcs" className="ani-grid__d">
            <SlashTabs tabs={tabs} />
          </Panel>

          <Panel kicker="EP.05" title="Senpai, notice me" className="ani-grid__e">
            <div className="flex flex-wrap gap-4 items-center">
              <HeartButton />
              <CopyPuffButton value="preetverma365@gmail.com">Copy email</CopyPuffButton>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
};

export default AnimeLab;
