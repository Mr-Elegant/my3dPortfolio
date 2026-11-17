import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials, scene } = useGLTF(
    "/models/computer-optimized.glb"
  );

  const hasMeshNodes =
    nodes?.Cube000_ComputerDesk_0001_1?.geometry &&
    nodes?.Cube000_ComputerDesk_0001_2?.geometry;

  return (
    <group {...props} dispose={null}>
      {hasMeshNodes ? (
        <group position={[-4.005, 67.549, 58.539]}>
          <mesh
            geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
            material={materials["ComputerDesk.001"]}
          />
          <mesh
            geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
            material={materials["FloppyDisk.001"]}
          />
        </group>
      ) : (
        <primitive object={scene} />
      )}
    </group>
  );
}

useGLTF.preload("/models/computer-optimized.glb");

export default Computer;
