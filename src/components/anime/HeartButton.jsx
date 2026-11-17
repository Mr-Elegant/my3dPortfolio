import { useState } from "react";
import useSpringVars from "../../hooks/useSpringVars";
import { animeFX, centerOf } from "../../utils/animeFX";

const WORDS = ["DOKI!", "SUGOI!", "KYAA!", "♥♥♥"];

/** Like button: anticipation squash → pop, sparkles, and a heartbeat SFX. */
const HeartButton = ({ baseCount = 128 }) => {
  const [liked, setLiked] = useState(false);
  const [n, setN] = useState(0);
  const { ref, set, kick } = useSpringVars({ s: 1, r: 0 }, { stiffness: 480, damping: 11 });

  const handleClick = () => {
    const next = !liked;
    setLiked(next);
    const { x, y } = centerOf(ref.current);
    if (next) {
      setN((c) => c + 1);
      set({ s: 1 });
      kick({ s: 14, r: 120 });
      animeFX.burst(x, y, { size: 34, spikes: 10, color: "hot" });
      animeFX.sparkles(x, y, { count: 10, spread: 70 });
      animeFX.sfx(x + 30, y - 38, WORDS[n % WORDS.length], { size: 26 });
    } else {
      kick({ s: -6 });
      animeFX.smoke(x, y, { count: 4 });
    }
  };

  return (
    <button
      type="button"
      aria-pressed={liked}
      onClick={handleClick}
      className="ani-heart"
      data-liked={liked}
    >
      <span ref={ref} className="ani-heart__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 5.3 3 1.7-1.9 3.2-3 5.3-3 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
        </svg>
      </span>
      <span className="ani-heart__count">{baseCount + (liked ? 1 : 0)}</span>
      <span className="sr-only">{liked ? "Unlike" : "Like"} this portfolio</span>
    </button>
  );
};

export default HeartButton;
