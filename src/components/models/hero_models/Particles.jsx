import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 60 }) => {
  const mesh = useRef();

  const { particles, positions } = useMemo(() => {
    const temp = [];
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const p = [
        (Math.random() - 0.5) * 10,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 10,
      ];
      temp.push({
        position: p,
        speed: 0.005 + Math.random() * 0.001,
      });
      pos[i * 3] = p[0];
      pos[i * 3 + 1] = p[1];
      pos[i * 3 + 2] = p[2];
    }
    return { particles: temp, positions: pos };
  }, [count]);

  useFrame(() => {
    if (!mesh.current || !mesh.current.geometry) return;
    const posArray = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = posArray[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      posArray[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.04}
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
