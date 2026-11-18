import useSpringVars from "../../hooks/useSpringVars";
import { animeFX, fxPoint } from "../../utils/animeFX";
import { audioFX } from "../../utils/audioFX";
import { unlock, trackComboEffect } from "../../utils/achievements";

/**
 * Manga-panel button: squashes on press, overshoots on release, and plays
 * an effect on click:
 *   effect="hit"   → focus lines + burst + SFX (default)
 *   effect="slash" → sword slash across the button + SFX
 *   effect="smoke" → smoke puff + SFX
 * size="sm" gives a compact variant.
 */
const EFFECTS = {
  hit: (x, y, text, color) => animeFX.hit(x, y, { text, color }),
  slash: (x, y, text, color) => {
    animeFX.slash(x - 110, y + 45, x + 110, y - 45, { color });
    animeFX.sfx(x + 10, y - 50, text, { color });
  },
  smoke: (x, y, text, color) => {
    animeFX.smoke(x, y, { count: 9 });
    animeFX.sfx(x, y - 46, text, { color });
  },
};

const SOUNDS = {
  hit: () => audioFX.playPow(),
  slash: () => audioFX.playShing(),
  smoke: () => audioFX.playPoof(),
};

const AnimeButton = ({
  children,
  sfx = "DON!",
  color,
  effect = "hit",
  size,
  variant = "primary",
  className = "",
  onClick,
  ...rest
}) => {
  const { ref, set, kick } = useSpringVars({ sx: 1, sy: 1, r: 0 });

  const press = () => set({ sx: 1.12, sy: 0.82, r: -2 });
  const release = () => set({ sx: 1, sy: 1, r: 0 });

  const handleClick = (e) => {
    // Keyboard activation has no pointer press → give it a boing instead.
    if (e.detail === 0) kick({ sx: -6, sy: 7, r: 40 });
    const { x, y } = fxPoint(e, ref.current);
    (EFFECTS[effect] || EFFECTS.hit)(x, y, sfx, color);
    // Each effect has its own synthesized sound (respects the site mute).
    (SOUNDS[effect] || SOUNDS.hit)();
    unlock("first-impact");
    trackComboEffect(effect);
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`ani-btn ani-btn--${variant} ${size ? `ani-btn--${size}` : ""} ani-squash ${className}`}
      onPointerDown={press}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      onClick={handleClick}
      data-sfx-owned=""
      {...rest}
    >
      {children}
    </button>
  );
};

export default AnimeButton;
