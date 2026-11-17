import { useEffect, useState } from "react";
import useSpringVars from "../../hooks/useSpringVars";
import { animeFX, centerOf } from "../../utils/animeFX";

/**
 * Switch whose knob smears across the track (stretch along travel,
 * squash on landing) and lands with a burst — or fizzles out in smoke.
 * Works controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).
 */
const AnimeToggle = ({ label, checked, defaultChecked = false, onChange, onText = "ON!", color }) => {
  const [inner, setInner] = useState(defaultChecked);
  const controlled = checked !== undefined;
  const on = controlled ? checked : inner;
  const { ref, set, kick } = useSpringVars(
    { k: on ? 1 : 0, sx: 1, sy: 1 },
    { stiffness: 380, damping: 15 }
  );

  // Knob follows state, including changes made elsewhere (e.g. the navbar).
  useEffect(() => {
    set({ k: on ? 1 : 0 });
  }, [on, set]);

  const toggle = () => {
    const next = !on;
    if (!controlled) setInner(next);
    onChange?.(next);
    kick({ sx: 9, sy: -6 }); // smear frame

    // Fire FX roughly when the knob arrives.
    setTimeout(() => {
      const knob = ref.current?.querySelector(".ani-toggle__knob");
      if (!knob) return;
      const { x, y } = centerOf(knob);
      if (next) {
        animeFX.burst(x, y, { size: 26, spikes: 9, color });
        animeFX.sfx(x + 18, y - 34, onText, { size: 24, color });
      } else {
        animeFX.smoke(x, y, { count: 5 });
      }
    }, 110);
  };

  return (
    <label className="ani-toggle-row">
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={on}
        data-on={on}
        className="ani-toggle"
        onClick={toggle}
      >
        <span className="ani-toggle__knob" />
      </button>
      {label && <span className="ani-label">{label}</span>}
    </label>
  );
};

export default AnimeToggle;
