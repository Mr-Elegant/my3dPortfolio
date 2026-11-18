/**
 * Animated scene for each "Core Capabilities" card (TechStack.jsx).
 * Pure SVG / CSS; motion lives in index.css under "Capability icons".
 * SMIL <animateMotion> moves things along paths (works in every modern browser).
 */

/* React: electrons travelling along three orbits around a pulsing nucleus */
const ORBIT = "M 46 0 A 46 17 0 1 1 -46 0 A 46 17 0 1 1 46 0";

export const ReactAtomIcon = () => (
  <svg className="cap-icon cap-react" viewBox="-60 -60 120 120" aria-hidden="true">
    <g className="cap-react__spin">
      {[0, 60, 120].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <ellipse className="cap-react__orbit" rx="46" ry="17" />
          <circle className="cap-react__electron" r="3.6">
            <animateMotion dur={`${1.4 + i * 0.25}s`} repeatCount="indefinite" path={ORBIT} begin={`${-i * 0.4}s`} />
          </circle>
        </g>
      ))}
    </g>
    <circle className="cap-react__halo" r="13" />
    <circle className="cap-react__nucleus" r="7.5" />
  </svg>
);

/* Backend: self-drawing hexagon, server rack with status LEDs, packets to 3 API endpoints */
const HEX = "M0 -34 L29.4 -17 L29.4 17 L0 34 L-29.4 17 L-29.4 -17 Z";
const LINKS = [
  { from: [-29.4, -17], to: [-50, -40] },
  { from: [29.4, -17], to: [50, -40] },
  { from: [0, 34], to: [0, 54] },
];

export const BackendIcon = () => (
  <svg className="cap-icon cap-node" viewBox="-60 -60 120 120" aria-hidden="true">
    {LINKS.map(({ from, to }, i) => {
      const path = `M${from[0]} ${from[1]} L${to[0]} ${to[1]}`;
      const back = `M${to[0]} ${to[1]} L${from[0]} ${from[1]}`;
      return (
        <g key={i}>
          <path className="cap-node__link" d={path} />
          <circle className="cap-node__endpoint" cx={to[0]} cy={to[1]} r="4.5" />
          <rect className="cap-node__packet" x="-2.5" y="-2.5" width="5" height="5" rx="1">
            <animateMotion dur="1.2s" repeatCount="indefinite" path={path} begin={`${i * 0.4}s`} />
          </rect>
          <rect className="cap-node__packet cap-node__packet--in" x="-2" y="-2" width="4" height="4" rx="1">
            <animateMotion dur="1.2s" repeatCount="indefinite" path={back} begin={`${i * 0.4 + 0.6}s`} />
          </rect>
        </g>
      );
    })}
    <path className="cap-node__hex-fill" d={HEX} />
    <path className="cap-node__hex" d={HEX} pathLength="100" />
    {[-12, 0, 12].map((y, i) => (
      <g key={y}>
        <rect className="cap-node__rack" x="-16" y={y - 4.5} width="32" height="9" rx="2" />
        <circle className="cap-node__led" cx="-10" cy={y} r="1.8" style={{ animationDelay: `${i * 0.27}s` }} />
        <circle className="cap-node__led cap-node__led--b" cx="-4.5" cy={y} r="1.8" style={{ animationDelay: `${i * 0.27 + 0.5}s` }} />
        <rect className="cap-node__slot" x="2" y={y - 1} width="10" height="2" rx="1" />
      </g>
    ))}
  </svg>
);

/* Interactive: real CSS-3D wireframe cube with a counter-rotating inner cube */
const FACES = ["front", "back", "right", "left", "top", "bottom"];

export const Cube3DIcon = () => (
  <div className="cap-icon cap-cube" aria-hidden="true">
    <div className="cap-cube__scene">
      <div className="cap-cube__box cap-cube__box--outer">
        {FACES.map((f) => (
          <span key={f} className={`cap-cube__face cap-cube__face--${f}`} />
        ))}
      </div>
      <div className="cap-cube__box cap-cube__box--inner">
        {FACES.map((f) => (
          <span key={f} className={`cap-cube__face cap-cube__face--${f}`} />
        ))}
      </div>
    </div>
    <span className="cap-cube__shadow" />
  </div>
);

/* AI: neural network, signals firing layer to layer, nodes lighting in sequence */
const LAYERS = [
  { x: -42, ys: [-30, 0, 30] },
  { x: 0, ys: [-39, -13, 13, 39] },
  { x: 42, ys: [-18, 18] },
];
const EDGES = [];
LAYERS.slice(0, -1).forEach((layer, li) => {
  const next = LAYERS[li + 1];
  layer.ys.forEach((y1) => next.ys.forEach((y2) => EDGES.push({ li, x1: layer.x, y1, x2: next.x, y2 })));
});

export const NeuralNetIcon = () => (
  <svg className="cap-icon cap-ai" viewBox="-60 -60 120 120" aria-hidden="true">
    {EDGES.map((e, i) => (
      <line key={`b${i}`} className="cap-ai__edge" x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
    ))}
    {EDGES.map((e, i) => (
      <line
        key={`s${i}`}
        className="cap-ai__signal"
        x1={e.x1}
        y1={e.y1}
        x2={e.x2}
        y2={e.y2}
        pathLength="100"
        style={{ animationDelay: `${e.li * 0.6 + (i % 4) * 0.12}s` }}
      />
    ))}
    {LAYERS.map((layer, li) =>
      layer.ys.map((y, ni) => (
        <circle
          key={`${li}-${ni}`}
          className="cap-ai__node"
          cx={layer.x}
          cy={y}
          r={li === 1 ? 5.5 : 6.5}
          style={{ animationDelay: `${li * 0.6 + ni * 0.08}s` }}
        />
      ))
    )}
  </svg>
);

