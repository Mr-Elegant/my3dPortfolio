import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = ({ themeMode = "cyan" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const ambientColors = {
    cyan: "#0d1b2a",
    emerald: "#081c15",
    violet: "#1a0933",
    amber: "#261400",
  };

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 15], fov: 45 }}
      className="w-full h-full"
    >
      {/* Deep themed ambient light */}
      <ambientLight intensity={0.6} color={ambientColors[themeMode] || "#0d1b2a"} />
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={22}
        minDistance={6}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate
        autoRotateSpeed={0.6}
        makeDefault
      />

      <Suspense fallback={null}>
        <HeroLights themeMode={themeMode} />
        <Particles count={isMobile ? 30 : 70} />
        <group
          scale={isMobile ? 0.65 : 0.95}
          position={[0, -3.2, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
