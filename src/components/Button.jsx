/**
 * A reusable CTA button component with smooth navigation & micro-interactions.
 */
import { audioFX } from "../utils/audioFX";

const Button = ({ text, className = "", id, onClick, icon }) => {
  const handleClick = (e) => {
    e.preventDefault();
    try {
      audioFX.playClick();
    } catch {
      // ignore
    }

    if (onClick) {
      onClick(e);
      return;
    }

    if (id) {
      const target = document.getElementById(id);
      if (target) {
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={id ? `#${id}` : "#"}
      onClick={handleClick}
      className={`${className} cta-wrapper block select-none`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <span className="text flex items-center gap-2">
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{text}</span>
        </span>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="navigate" className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
};

export default Button;
