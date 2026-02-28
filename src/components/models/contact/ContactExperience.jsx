import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* 1. Very dim, dark blue ambient light so the shadows are deep */}
      <ambientLight intensity={0.2} color="#0d0e15" />

      {/* 2. Hacker Green Spotlight shining straight down on the computer */}
      <spotLight
        position={[0, 6, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={8}
        color="#00ff88" /* Neon Matrix Green */
        castShadow
        shadow-bias={-0.0001}
      />

      {/* 3. Cyan fill light from the right to match your Hero section */}
      <pointLight position={[5, 3, 5]} intensity={3} color="#4cc9f0" />

      {/* 4. Purple rim light from the left/back for that Synthwave contrast */}
      <pointLight position={[-5, 2, -2]} intensity={4} color="#9d4edd" />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* The Floor: Changed from brown wood to a sleek, dark, reflective metal */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial 
            color="#050505" 
            roughness={0.1} /* Makes it glossy */
            metalness={0.8} /* Makes it metallic */
          />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;