import { forwardRef, useSyncExternalStore } from "react";

/*
 * Custom mascot image (optional): if you drop an image at one of these paths,
 * it replaces the SVG Kōdo everywhere (background dancer, guide, manga
 * narrator, boot screen) and gets a CSS dance animation. Use a transparent
 * PNG/WebP (or an animated GIF/WebP). Missing file → Kōdo is used.
 */
const CUSTOM_SOURCES = ["/mascot/mascot.png", "/mascot/mascot.webp", "/mascot/mascot.gif"];
let customSrc; // undefined = not checked yet, null = none found, string = found
let probing = false;
const listeners = new Set();

const probeCustom = () => {
  if (probing || customSrc !== undefined || typeof Image === "undefined") return;
  probing = true;
  const tryAt = (i) => {
    if (i >= CUSTOM_SOURCES.length) {
      customSrc = null;
      listeners.forEach((l) => l());
      return;
    }
    const img = new Image();
    img.onload = () => {
      customSrc = CUSTOM_SOURCES[i];
      listeners.forEach((l) => l());
    };
    img.onerror = () => tryAt(i + 1);
    img.src = CUSTOM_SOURCES[i];
  };
  tryAt(0);
};

const useCustomMascot = () =>
  useSyncExternalStore(
    (l) => {
      listeners.add(l);
      probeCustom();
      return () => listeners.delete(l);
    },
    () => customSrc ?? null,
    () => null
  );

/**
 * Kōdo (コード, "code"): an original chibi coder-spirit mascot for the site.
 * Pure SVG, animated with CSS (see "Kōdo mascot" in index.css):
 *   hop on the beat · arms wave alternately · head bobs · hair sways ·
 *   blinks · floating music notes · glowing hair tips.
 *
 * Every animated part is wrapped so its pivot sits at local (0,0):
 * an outer <g transform="translate(pivot)"> plus an inner animated <g>.
 */
const INK = "#0b0d12";
const SKIN = "#ffd9c2";
const HAIR = "#1b2238";
const HOODIE = "#161922";
const CYAN = "#00f0ff";
const PINK = "#ff2e63";
const GOLD = "#ffd23f";

const outline = { stroke: INK, strokeWidth: 4, strokeLinejoin: "round", strokeLinecap: "round" };

// Spike tips (head-local coords) that get a glowing cyan cap.
const TIPS = [
  [-92, -110],
  [-62, -150],
  [-8, -168],
  [46, -156],
  [84, -122],
];

const Arm = ({ x, side }) => (
  <g transform={`translate(${x} 236)`}>
    <g className={`m-arm m-arm-${side}`}>
      <rect x="-12" y="-4" width="24" height="62" rx="12" fill={HOODIE} {...outline} />
      <rect x="-12" y="44" width="24" height="10" fill={CYAN} stroke={INK} strokeWidth="3" />
      <circle cx="0" cy="68" r="14" fill={SKIN} {...outline} />
    </g>
  </g>
);

const Leg = ({ x, side }) => (
  <g transform={`translate(${x} 316)`}>
    <g className={`m-leg m-leg-${side}`}>
      <rect x="-9" y="10" width="18" height="40" rx="8" fill={SKIN} {...outline} />
      <rect x="-14" y="-2" width="28" height="28" rx="9" fill="#2b3148" {...outline} />
      <ellipse cx={side === "l" ? -4 : 4} cy="56" rx="20" ry="11" fill="#ffffff" {...outline} />
      <path
        d={side === "l" ? "M-22 58 Q-4 70 14 58" : "M-14 58 Q4 70 22 58"}
        fill="none"
        stroke={GOLD}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </g>
);

const Eye = ({ cx }) => (
  <g>
    <ellipse cx={cx} cy="-58" rx="14" ry="18" fill={INK} />
    <ellipse cx={cx} cy="-54" rx="10" ry="12" fill={GOLD} />
    <ellipse cx={cx} cy="-52" rx="5" ry="7" fill={INK} />
    <circle cx={cx - 5} cy="-65" r="5" fill="#fff" />
    <circle cx={cx + 5} cy="-48" r="2.5" fill="#fff" />
  </g>
);

const AnimeMascot = forwardRef(function AnimeMascot({ className = "" }, ref) {
  const custom = useCustomMascot();
  if (custom) {
    return (
      <img
        ref={ref}
        src={custom}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={`ani-mascot ani-mascot--img ${className}`}
      />
    );
  }

  return (
    <svg
      ref={ref}
      className={`ani-mascot ${className}`}
      viewBox="0 0 300 440"
      aria-hidden="true"
      focusable="false"
    >
      {/* Ground shadow (does not hop) */}
      <ellipse className="m-shadow" cx="150" cy="426" rx="70" ry="10" fill="rgba(0,0,0,0.35)" />

      {/* Floating music notes */}
      <g className="m-notes" fill={CYAN} stroke={INK} strokeWidth="1.5" fontSize="34" fontWeight="700">
        <text className="m-note" x="40" y="150">♪</text>
        <text className="m-note" x="242" y="120" fill={PINK}>♫</text>
        <text className="m-note" x="250" y="230" fill={GOLD}>♪</text>
      </g>

      {/* Everything that hops on the beat */}
      <g className="m-hop">
        <Leg x={132} side="l" />
        <Leg x={168} side="r" />

        {/* Hoodie body */}
        <path d="M108 228 Q150 214 192 228 L202 318 Q150 334 98 318 Z" fill={HOODIE} {...outline} />
        <path d="M122 290 Q150 300 178 290 L174 314 Q150 320 126 314 Z" fill="#20242f" {...outline} strokeWidth="3" />
        <text
          x="150"
          y="276"
          textAnchor="middle"
          fontFamily="Bangers, Impact, sans-serif"
          fontSize="30"
          fill={CYAN}
          stroke={INK}
          strokeWidth="1.5"
        >
          {"</>"}
        </text>
        {/* Hoodie strings */}
        <path d="M140 232 L137 256 M160 232 L163 256" stroke="#e9f2ff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="137" cy="259" r="3.5" fill="#e9f2ff" />
        <circle cx="163" cy="259" r="3.5" fill="#e9f2ff" />

        <Arm x={108} side="l" />
        <Arm x={192} side="r" />

        {/* Head (pivots at the neck) */}
        <g transform="translate(150 222)">
          <g className="m-head">
            <rect x="-10" y="-16" width="20" height="18" fill={SKIN} {...outline} />
            {/* Headphones around the neck */}
            <path d="M-38 4 Q0 26 38 4" fill="none" stroke={PINK} strokeWidth="7" strokeLinecap="round" />
            <rect x="-48" y="-10" width="18" height="24" rx="7" fill={PINK} {...outline} />
            <rect x="30" y="-10" width="18" height="24" rx="7" fill={PINK} {...outline} />

            {/* Back hair + face */}
            <ellipse cx="0" cy="-84" rx="80" ry="72" fill={HAIR} {...outline} />
            <ellipse cx="0" cy="-66" rx="66" ry="62" fill={SKIN} {...outline} />

            {/* Spiky front hair (sways) */}
            <g className="m-hair">
              <path
                d="M-80 -62 L-92 -110 L-58 -100 L-62 -150 L-26 -122 L-8 -168 L12 -126 L46 -156 L44 -110 L84 -122 L68 -84 L96 -78 L74 -56 Q60 -96 30 -92 L22 -72 L6 -94 L-12 -70 L-26 -94 L-44 -68 Q-64 -96 -80 -62 Z"
                fill={HAIR}
                {...outline}
              />
              <g className="m-tips" fill={CYAN} stroke={INK} strokeWidth="2.5" strokeLinejoin="round">
                {TIPS.map(([x, y]) => (
                  <polygon key={`${x},${y}`} points={`${x},${y} ${x + 7},${y + 17} ${x - 7},${y + 15}`} />
                ))}
              </g>
            </g>

            {/* Brows */}
            <path d="M-42 -88 Q-28 -96 -14 -90 M14 -90 Q28 -96 42 -88" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />

            {/* Eyes (blink) */}
            <g className="m-eyes">
              <Eye cx={-26} />
              <Eye cx={26} />
            </g>

            {/* Blush */}
            <ellipse cx="-46" cy="-34" rx="11" ry="6" fill="#ff7aa2" opacity="0.65" />
            <ellipse cx="46" cy="-34" rx="11" ry="6" fill="#ff7aa2" opacity="0.65" />

            {/* Big grin */}
            <path d="M-20 -38 Q0 -35 20 -38 Q18 -10 0 -10 Q-18 -10 -20 -38 Z" fill="#8a1f3a" {...outline} strokeWidth="3" />
            <path d="M-17 -36 Q0 -33 17 -36 L16 -31 Q0 -28 -16 -31 Z" fill="#fff" />
            <ellipse cx="0" cy="-17" rx="9" ry="5" fill="#ff5d7a" />
          </g>
        </g>
      </g>
    </svg>
  );
});

export default AnimeMascot;
