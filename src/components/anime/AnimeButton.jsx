import useSpringVars from "../../hooks/useSpringVars";
import { animeFX, fxPoint } from "../../utils/animeFX";
import { audioFX } from "../../utils/audioFX";

/**
 * Manga-panel button: squashes on press, overshoots on release,
 * and fires a full impact frame (focus lines + burst + SFX) on click.
 */
const AnimeButton = ({
  children,
  sfx = "DON!",
  color,
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
    animeFX.hit(x, y, { text: sfx, color });
    try {
      audioFX.playClick();
    } catch {
      // audio is optional
    }
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`ani-btn ani-btn--${variant} ani-squash ${className}`}
      onPointerDown={press}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AnimeButton;
