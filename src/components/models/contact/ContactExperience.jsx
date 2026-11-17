import { OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Computer from "./Computer";

const ContactExperience = ({ onContextLost }) => {
  const canvasRef = useRef(null);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "default",
        alpha: true,
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 2.4, 7.2], fov: 40 }}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
      onCreated={({ gl }) => {
        const dom = gl.domElement;
        if (dom) {
          canvasRef.current = dom;
          // Gracefully intercept GPU context loss and notify parent for safe auto-recovery
          dom.addEventListener(
            "webglcontextlost",
            (e) => {
              e.preventDefault();
              console.warn("WebGL Context Lost intercepted: triggering safe state recovery.");
              if (onContextLost) onContextLost();
            },
            { once: true }
          );
        }
      }}
    >
      {/* Studio Cyberpunk Lighting */}
      <ambientLight intensity={1.8} />
      <hemisphereLight skyColor="#00f0ff" groundColor="#0a0c10" intensity={1.2} />
      
      {/* Key Front Directional Light */}
      <directionalLight
        position={[5, 7, 5]}
        intensity={2.6}
        color="#ffffff"
      />

      {/* Cyber Rim Fill Light */}
      <directionalLight
        position={[-5, 4, -3]}
        intensity={1.6}
        color="#00f0ff"
      />

      {/* Accent Point Lights */}
      <pointLight position={[3, 2, 2]} intensity={2.0} color="#00ff88" />
      <pointLight position={[-3, 2, 2]} intensity={2.0} color="#00f0ff" />

      {/* Interactive Orbit Controls with smooth damping */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate={false}
        makeDefault={false}
      />

      {/* High-performance circular soft shadow (0% GPU hitching risk, 0 depth render target) */}
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4.2, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.65} depthWrite={false} />
      </mesh>

      {/* 3D Workstation Model facing the user */}
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.15}>
          <group scale={0.026} position={[-0.2, -1.3, 0]} rotation={[0, -0.79, 0]}>
            <Computer />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
