import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function GoldShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.x = time * 0.25;
    meshRef.current.rotation.y = time * 0.4;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 2]} />

        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function HeroScene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>

        <ambientLight intensity={0.6} />

        <directionalLight
          position={[3, 3, 4]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={1.5}
          color="#D4AF37"
        />

        <GoldShape />

      </Canvas>
    </div>
  );
}

export default HeroScene;