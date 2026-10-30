import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({
            color: "#ffffff",
            roughness: 0.2,
            metalness: 0.8,
          });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} />
      <pointLight position={[-5, 3, 3]} intensity={2} color="#00f0ff" />
      <pointLight position={[5, -3, 3]} intensity={1.5} color="#00ff88" />

      <Float speed={3.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
