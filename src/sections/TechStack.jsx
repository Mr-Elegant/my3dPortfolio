import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { ReactAtomIcon, BackendIcon, Cube3DIcon, NeuralNetIcon } from "../components/CapabilityIcons";
import { techStackIcons } from "../constants";
import { animeFX, prefersReducedMotion } from "../utils/animeFX";

/**
 * "Core Capabilities & Specializations": four cards, each with its own
 * animated scene (CapabilityIcons.jsx), a mouse-follow 3D tilt, and a
 * scroll entrance (manga-panel drop in Anime Mode, smooth rise otherwise).
 * Animations pause while the section is off-screen.
 */

const CAPABILITY_ICONS = {
  "React Developer": ReactAtomIcon,
  "Backend Developer": BackendIcon,
  "Interactive Developer": Cube3DIcon,
  "AI & Agentic Developer": NeuralNetIcon,
};

const CapabilityCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const Icon = CAPABILITY_ICONS[item.name];

  // Mouse-follow tilt (writes CSS vars; no re-renders).
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 12).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    // .cap-slot is the GSAP entrance target; the card inside owns the tilt,
    // so the two transforms never fight.
    <div className="cap-slot">
      <div
        ref={cardRef}
        className="card-border tech-card cap-card overflow-hidden group xl:rounded-3xl rounded-lg"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ "--i": index }}
      >
        <div className="cap-card__glare" aria-hidden="true" />
        <div className="cap-card__lines" aria-hidden="true" />
        <div className="tech-card-content flex flex-col items-center justify-between h-full p-6 text-center">
          <div className="tech-icon-wrapper cap-card__stage w-full h-48 flex justify-center items-center">
            {Icon ? <Icon /> : null}
          </div>
          <div className="padding-x w-full mt-4 flex flex-col gap-2 relative z-20">
            <p className="cap-card__title font-bold text-lg text-white">{item.name}</p>
            {item.desc && (
              <p className="text-sm text-[#839cb5] font-normal leading-relaxed group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  // Pause all card animations while the section is off-screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      rootMargin: "100px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // CSS pauses the keyframe animations; SMIL path motion (electrons,
  // packets) needs pausing through the SVG API.
  useEffect(() => {
    const run = onScreen && !prefersReducedMotion();
    sectionRef.current?.querySelectorAll("svg.cap-icon").forEach((svg) => {
      if (run) svg.unpauseAnimations?.();
      else svg.pauseAnimations?.();
    });
  }, [onScreen]);

  // Scroll entrance
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const anime = document.documentElement.dataset.anime === "on";

      if (anime) {
        // Manga-panel drop: each card falls in tilted, overshoots, and lands
        // with an impact burst at the moment it hits.
        const tl = gsap.timeline({ scrollTrigger: { trigger: "#skills", start: "top 65%" } });
        gsap.utils.toArray(".cap-slot").forEach((slot, i) => {
          const at = i * 0.14;
          tl.fromTo(
            slot,
            { y: -90, rotate: i % 2 ? 7 : -7, scale: 1.12, opacity: 0 },
            { y: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.75, ease: "back.out(2.2)" },
            at
          );
          tl.call(
            () => {
              const r = slot.getBoundingClientRect();
              if (r.bottom > 0 && r.top < window.innerHeight) {
                animeFX.burst(r.left + r.width / 2, r.top + 8, { size: 26, spikes: 9, color: i % 2 ? "hot" : "accent" });
              }
            },
            null,
            at + 0.4
          );
        });
      } else {
        gsap.fromTo(
          ".cap-slot",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: "#skills", start: "top 70%" },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="cap-section w-full flex-center section-padding relative z-20"
      data-onscreen={onScreen}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 xl:px-12">
        <TitleHeader
          title="Core Capabilities & Specializations"
          sub="Engineering Architecture & Stack Capabilities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 w-full">
          {techStackIcons.map((item, i) => (
            <CapabilityCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
