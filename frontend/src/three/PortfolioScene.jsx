import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { useRef } from "react";

const projectObjects = [
  {
    title: "PURATAP",
    subtitle: "AR / 3D",
    position: [-2.3, 1.4, 0],
  },
  {
    title: "WANARAOMAH",
    subtitle: "INTERACTIVE",
    position: [2.3, 1.4, 0],
  },
  {
    title: "ASTRO AI",
    subtitle: "AI / MOBILE",
    position: [-2.3, -1.4, 0],
  },
  {
    title: "CUBE DENTAL",
    subtitle: "DIGITAL",
    position: [2.3, -1.4, 0],
  },
  {
    title: "D FITNESS",
    subtitle: "FITNESS",
    position: [0, 2.35, 0],
  },
  {
    title: "VISDOC",
    subtitle: "TELEMED",
    position: [0, -2.35, 0],
  },
];

function ProjectObject({ project, index, selectedProject }) {
  const groupRef = useRef();

  const isSelected = selectedProject === index;

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y =
      Math.sin(time * 0.6 + index) * 0.12;

    groupRef.current.rotation.x =
      Math.sin(time * 0.4 + index) * 0.06;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={isSelected ? 0.8 : 0.45}
    >
      <group
        ref={groupRef}
        position={project.position}
        scale={isSelected ? 1.25 : 1}
      >
        {/* Project frame */}
        <mesh>
          <boxGeometry args={[1.6, 0.95, 0.16]} />

          <meshStandardMaterial
            color={isSelected ? "#D4AF37" : "#111111"}
            emissive={isSelected ? "#8A6B16" : "#000000"}
            emissiveIntensity={isSelected ? 0.35 : 0}
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Inner display */}
        <mesh position={[0, 0, 0.1]}>
          <planeGeometry args={[1.35, 0.65]} />

          <meshStandardMaterial
            color={isSelected ? "#17120A" : "#050505"}
            metalness={0.3}
            roughness={0.35}
          />
        </mesh>

        {/* Project title */}
        <Text
          position={[0, 0.04, 0.2]}
          fontSize={isSelected ? 0.18 : 0.14}
          color={isSelected ? "#D4AF37" : "#FFFFFF"}
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>

        {/* Category */}
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.075}
          color="#777777"
          anchorX="center"
          anchorY="middle"
        >
          {project.subtitle}
        </Text>
      </group>
    </Float>
  );
}

function PortfolioObjects({ selectedProject }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.08;
    groupRef.current.rotation.x =
      Math.sin(time * 0.25) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Central project core */}
      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.7}
      >
        <mesh>
          <icosahedronGeometry args={[0.85, 2]} />

          <meshStandardMaterial
            color="#D4AF37"
            emissive="#8A6B16"
            emissiveIntensity={0.3}
            metalness={1}
            roughness={0.18}
          />
        </mesh>

        <Text
          position={[0, 0, 0.9]}
          fontSize={0.13}
          color="#D4AF37"
          anchorX="center"
          anchorY="middle"
        >
          SELECTED WORK
        </Text>
      </Float>

      {/* Connection lines */}
      {projectObjects.map((project) => (
        <line key={project.title}>
          <bufferGeometry
            attach="geometry"
            onUpdate={(geometry) => {
              geometry.setFromPoints([
                { x: 0, y: 0, z: 0 },
                {
                  x: project.position[0],
                  y: project.position[1],
                  z: project.position[2],
                },
              ]);
            }}
          />

          <lineBasicMaterial
            color="#D4AF37"
            transparent
            opacity={0.15}
          />
        </line>
      ))}

      {projectObjects.map((project, index) => (
        <ProjectObject
          key={project.title}
          project={project}
          index={index}
          selectedProject={selectedProject}
        />
      ))}
    </group>
  );
}

function PortfolioScene({ selectedProject = 0 }) {
  return (
    <div className="mt-20 h-[560px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.45} />

        <directionalLight
          position={[4, 4, 5]}
          intensity={2}
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={2}
          color="#D4AF37"
        />

        <pointLight
          position={[3, 2, 2]}
          intensity={1}
          color="#ffffff"
        />

        <PortfolioObjects
          selectedProject={selectedProject}
        />

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