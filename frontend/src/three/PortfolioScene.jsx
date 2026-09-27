import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";

const projectObjects = [
  {
    title: "PURATAP",
    position: [-2.5, 1.4, 0],
  },
  {
    title: "WANARAOMAH",
    position: [2.5, 1.4, 0],
  },
  {
    title: "ASTRO AI",
    position: [-2.5, -1.4, 0],
  },
  {
    title: "CUBE DENTAL",
    position: [2.5, -1.4, 0],
  },
  {
    title: "D FITNESS",
    position: [0, 2.4, 0],
  },
  {
    title: "VISDOC",
    position: [0, -2.4, 0],
  },
];

function PortfolioObjects() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.12;
    groupRef.current.rotation.x =
      Math.sin(time * 0.3) * 0.08;
  });

  return (
    <group ref={groupRef}>

      {/* Central Object */}
      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.8}
      >
        <mesh>
          <icosahedronGeometry args={[1, 1]} />

          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Project Objects */}
      {projectObjects.map((project) => (
        <Float
          key={project.title}
          speed={1.5}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <group position={project.position}>

            <mesh>
              <boxGeometry args={[1.4, 0.8, 0.15]} />

              <meshStandardMaterial
                color="#111111"
                metalness={0.6}
                roughness={0.3}
              />
            </mesh>

            <Text
              position={[0, 0, 0.1]}
              fontSize={0.16}
              color="#D4AF37"
              anchorX="center"
              anchorY="middle"
            >
              {project.title}
            </Text>

          </group>
        </Float>
      ))}

    </group>
  );
}

function PortfolioScene() {
  return (
    <div className="mt-20 h-[550px] w-full overflow-hidden border border-white/10 bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>

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

        <PortfolioObjects />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />

      </Canvas>
    </div>
  );
}

export default PortfolioScene;