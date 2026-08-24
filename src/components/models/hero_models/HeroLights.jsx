const LIGHT_PRESETS = {
  cyan: {
    lamp: "#ffffff",
    spot1: "#00f0ff",
    spot2: "#4cc9f0",
    point: "#00f0ff",
  },
  emerald: {
    lamp: "#ffffff",
    spot1: "#00ff88",
    spot2: "#2ec4b6",
    point: "#00ff88",
  },
  violet: {
    lamp: "#ffffff",
    spot1: "#f72585",
    spot2: "#7209b7",
    point: "#b5179e",
  },
  amber: {
    lamp: "#ffffff",
    spot1: "#ffb703",
    spot2: "#fb8500",
    point: "#ffb703",
  },
};

const HeroLights = ({ themeMode = "cyan" }) => {
  const current = LIGHT_PRESETS[themeMode] || LIGHT_PRESETS.cyan;

  return (
    <>
      {/* Desk lamp direct spot */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.18}
        penumbra={0.2}
        intensity={90}
        color={current.lamp}
      />
      {/* Overhead directional neon flood */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.35}
        penumbra={0.6}
        intensity={70}
        color={current.spot1}
      />
      {/* Side fill ambient colored rim */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.45}
        penumbra={0.9}
        intensity={60}
        color={current.spot2}
      />
      {/* Subtle glowing room point light */}
      <pointLight position={[0, 1.5, 0]} intensity={25} color={current.point} />
      <pointLight position={[1, 2, -2]} intensity={15} color={current.spot1} />
    </>
  );
};

export default HeroLights;
