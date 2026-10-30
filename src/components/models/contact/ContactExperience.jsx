import { OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Computer from "./Computer";

const ContactExperience = () => {
  const canvasRef = useRef(null);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: false,
      }}
      camera={{ position: [0, 2.4, 7.2], fov: 40 }}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0c10",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#0a0c10", 1);
        const dom = gl.domElement;
        if (dom) {
          canvasRef.current = dom;
          // Prevent browser from permanently killing WebGL context on momentary GPU hitches
          dom.addEventListener(
            "webglcontextlost",
            (e) => {
              e.preventDefault();
              console.warn("WebGL Context Lost intercepted: auto-restoration enabled.");
            },
            false
          );
          dom.addEventListener(
            "webglcontextrestored",
            () => {
              console.log("WebGL Context Restored successfully.");
            },
            false
          );
        }
      }}
    >
      {/* Dark container clear color */}
      <color attach="background" args={["#0a0c10"]} />

      {/* Robust Studio Lighting (100% self-contained, 0 shadow-map overhead) */}
      <ambientLight intensity={1.5} />
      <hemisphereLight skyColor="#00f0ff" groundColor="#0a0c10" intensity={1.1} />
      
      {/* Key Front Light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.8}
        color="#ffffff"
      />

      {/* Cyber Rim Fill Lights */}
      <directionalLight
        position={[-5, 4, -3]}
        intensity={1.2}
        color="#00f0ff"
      />
      <pointLight position={[-4, 3, 2]} intensity={3.5} color="#00f0ff" />
      <pointLight position={[4, 2, 2]} intensity={3.0} color="#00ff88" />
      <pointLight position={[0, 4, -2]} intensity={2.5} color="#9d4edd" />

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
        <ringGeometry args={[0, 4.2, 64]} />
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
