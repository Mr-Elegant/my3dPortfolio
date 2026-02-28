import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

const AbstractShape = ({ type }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.2;
    }
  });

  const renderShape = () => {
    switch (type) {
      case "security":
        return (
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#ff003c" wireframe emissive="#ff003c" emissiveIntensity={0.8} />
            <mesh scale={0.7}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#ff4d00" />
            </mesh>
          </mesh>
        );
      case "system":
        return (
          <mesh ref={meshRef}>
            <octahedronGeometry args={[1.2, 1]} />
            <meshStandardMaterial color="#00f0ff" wireframe emissive="#00f0ff" emissiveIntensity={0.8} />
            <mesh scale={0.5}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
          </mesh>
        );
      case "automation":
        return (
          <group ref={meshRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1, 0.05, 16, 100]} />
              <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]} scale={0.8}>
              <torusGeometry args={[1, 0.05, 16, 100]} />
              <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
          </group>
        );
      case "vibe":
      default:
        return (
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
            <meshStandardMaterial color="#a259ff" wireframe emissive="#9d4edd" emissiveIntensity={0.8} />
            <mesh scale={0.5}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial color="#4cc9f0" emissive="#4cc9f0" emissiveIntensity={0.5} />
            </mesh>
          </mesh>
        );
    }
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, -5, -5]} intensity={1} color="#9d4edd" />
      <Environment preset="city" />
      {/* FIX: Scaled down from 1.6 to 1.2 so it doesn't clip the edges */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <group scale={1.2} ref={groupRef}>
          {renderShape()}
        </group>
      </Float>
    </>
  );
};

const AbstractSkillModel = ({ type }) => {
  return (
    // FIX: Pulled camera back to 10, lowered FOV to 35
    <Canvas dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 10], fov: 35 }}>
      <AbstractShape type={type} />
    </Canvas>
  );
};

export default AbstractSkillModel;