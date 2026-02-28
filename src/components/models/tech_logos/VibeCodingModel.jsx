import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

const VibeCodingModel = () => {
  const meshRef = useRef();

  // This hook runs on every single frame, allowing us to rotate the shape smoothly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Colored lights to match your hero section vibe */}
      <directionalLight position={[5, 5, 5]} intensity={2} color="#4cc9f0" />
      <directionalLight position={[-5, -5, -5]} intensity={2} color="#9d4edd" />
      <Environment preset="city" />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <group scale={1.8}>
          {/* A complex, looping mathematical shape */}
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.25, 128, 16]} />
            <meshStandardMaterial
              color="#a259ff"
              wireframe={true} // Makes it look like pure code/structure
              emissive="#9d4edd"
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* A solid glowing core inside the wireframe */}
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
              color="#4cc9f0"
              emissive="#4cc9f0"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
};

export default VibeCodingModel;