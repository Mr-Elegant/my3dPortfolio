import { useState } from "react";
import useSpringVars from "../../hooks/useSpringVars";
import { animeFX, fxPoint } from "../../utils/animeFX";

/** Copies text; the button "poofs" in a cloud of smoke and shouts COPIED!. */
const CopyPuffButton = ({ value, children }) => {
  const [copied, setCopied] = useState(false);
  const { ref, set, kick } = useSpringVars({ sx: 1, sy: 1, r: 0 });

  const handleClick = async (e) => {
    const { x, y } = fxPoint(e, ref.current);
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      animeFX.sfx(x, y - 30, "NANI?!", { size: 26, color: "gold" });
      return;
    }
    setCopied(true);
    set({ sx: 1, sy: 1 });
    kick({ sx: -5, sy: 8, r: -50 });
    animeFX.smoke(x, y, { count: 8 });
    animeFX.sfx(x, y - 36, "COPIED!", { size: 28, color: "accent" });
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      ref={ref}
      type="button"
      className="ani-btn ani-btn--ghost ani-squash"
      onPointerDown={() => set({ sx: 1.1, sy: 0.85 })}
      onPointerUp={() => set({ sx: 1, sy: 1 })}
      onPointerLeave={() => set({ sx: 1, sy: 1 })}
      onClick={handleClick}
    >
      <span aria-live="polite">{copied ? "Copied to clipboard ✓" : children}</span>
    </button>
  );
};

export default CopyPuffButton;
