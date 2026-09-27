import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function TechnologyObjects() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.2;
    groupRef.current.rotation.x =
      Math.sin(time * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Center Object */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        <mesh>
          <icosahedronGeometry args={[1.2, 2]} />

          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Orbiting Objects */}
      <mesh position={[2.2, 0.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshStandardMaterial
          color="#ffffff"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[-2.2, -0.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />

        <meshStandardMaterial
          color="#ffffff"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, -1.8, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />

        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

function TechnologyScene() {
  return (
    <div className="mt-20 h-[500px] w-full overflow-hidden border border-white/10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[4, 4, 5]}
          intensity={2}
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={2}
          color="#D4AF37"
        />

        <TechnologyObjects />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default TechnologyScene;