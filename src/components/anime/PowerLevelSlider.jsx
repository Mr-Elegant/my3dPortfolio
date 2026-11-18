import { useId, useRef, useState } from "react";
import useSpringVars from "../../hooks/useSpringVars";
import { animeFX } from "../../utils/animeFX";
import { unlock } from "../../utils/achievements";

/**
 * Native range input (keyboard + screen-reader friendly) dressed up as a
 * scouter readout. The thumb stretches with drag speed; maxing it out
 * triggers the obligatory "OVER 9000!!" impact frame.
 */
const PowerLevelSlider = ({ label = "Power level", defaultValue = 40 }) => {
  const id = useId();
  const [value, setValue] = useState(defaultValue);
  const prev = useRef(defaultValue);
  const { ref, kick } = useSpringVars({ sx: 1, sy: 1 }, { stiffness: 600, damping: 16 });

  const thumbPoint = (v) => {
    const r = ref.current.getBoundingClientRect();
    const thumb = 26;
    return { x: r.left + thumb / 2 + ((r.width - thumb) * v) / 100, y: r.top + r.height / 2 };
  };

  const handleChange = (e) => {
    const v = Number(e.target.value);
    const delta = Math.min(Math.abs(v - prev.current), 25);
    kick({ sx: delta * 0.9, sy: -delta * 0.6 });

    if (v === 100 && prev.current < 100) {
      const { x, y } = thumbPoint(v);
      animeFX.hit(x, y, { text: "OVER 9000!!", size: 56 });
      unlock("over-9000");
    } else if (v === 0 && prev.current > 0) {
      const { x, y } = thumbPoint(v);
      animeFX.smoke(x, y, { count: 6 });
    }
    prev.current = v;
    setValue(v);
  };

  const level = value === 100 ? "9001+" : Math.round(value * 90).toLocaleString();

  return (
    <div className="ani-slider">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <label htmlFor={id} className="ani-label">
          {label}
        </label>
        <output htmlFor={id} className="ani-readout" data-max={value === 100}>
          {level}
        </output>
      </div>
      <input
        ref={ref}
        id={id}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="ani-range"
        style={{ "--fill": `${value}%` }}
      />
    </div>
  );
};

export default PowerLevelSlider;
