import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  Line,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useState } from "react";

const technologies = [
  {
    name: "React",
    position: [1.9, 0.9, 0],
  },
  {
    name: "Node.js",
    position: [-1.9, 0.9, 0],
  },
  {
    name: "Three.js",
    position: [1.9, -0.9, 0],
  },
  {
    name: "GSAP",
    position: [-1.9, -0.9, 0],
  },
  {
    name: "APIs",
    position: [0, 1.8, 0],
  },
  {
    name: "Database",
    position: [0, -1.8, 0],
  },
];
function TechnologyNode({ name, position }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.position.y =
      position[1] + Math.sin(time * 1.5 + position[0]) * 0.08;

    meshRef.current.rotation.y += hovered ? 0.025 : 0.008;
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? 1.25 : 1}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.28, 32, 32]} />

        <meshStandardMaterial
          color={hovered ? "#D4AF37" : "#ffffff"}
          emissive={hovered ? "#D4AF37" : "#222222"}
          emissiveIntensity={hovered ? 0.5 : 0.15}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <Html
        position={position}
        center
        distanceFactor={7}
        style={{
          pointerEvents: "none",
          transform: "translateY(-28px)",
        }}
      >
        <div
          className={`whitespace-nowrap text-xs font-medium tracking-wide transition-all duration-300 ${
            hovered
              ? "text-[#D4AF37]"
              : "text-gray-400"
          }`}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

function TechnologyCore() {
  const coreRef = useRef();

  useFrame((state) => {
    if (!coreRef.current) return;

    const time = state.clock.getElapsedTime();

    coreRef.current.rotation.x = time * 0.2;
    coreRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.8}
    >
      <group ref={coreRef}>
        {/* Outer wireframe */}
        <mesh>
          <icosahedronGeometry args={[1.45, 2]} />

          <meshBasicMaterial
            color="#D4AF37"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Inner core */}
        <mesh>
          <icosahedronGeometry args={[0.95, 2]} />

          <meshStandardMaterial
            color="#D4AF37"
            emissive="#8A6B16"
            emissiveIntensity={0.45}
            metalness={1}
            roughness={0.18}
          />
        </mesh>

        {/* Core label */}
        <Html
          center
          distanceFactor={7}
          style={{
            pointerEvents: "none",
          }}
        >
          <div className="whitespace-nowrap text-center">
            <div className="text-[10px] font-semibold tracking-[0.3em] text-[#D4AF37]">
              DIGITAL
            </div>

            <div className="text-xs font-bold tracking-[0.25em] text-white">
              CORE
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function ConnectionLines() {
  const lines = [
    {
      start: [0, 0, 0],
      end: [2.4, 1.1, 0],
    },
    {
      start: [0, 0, 0],
      end: [-2.4, 1.1, 0],
    },
    {
      start: [0, 0, 0],
      end: [2.4, -1.1, 0],
    },
    {
      start: [0, 0, 0],
      end: [-2.4, -1.1, 0],
    },
    {
      start: [0, 0, 0],
      end: [0, 2.3, 0],
    },
    {
      start: [0, 0, 0],
      end: [0, -2.3, 0],
    },
  ];

  return (
    <group>
      {lines.map((line, index) => (
        <Line
          key={index}
          points={[line.start, line.end]}
          color="#D4AF37"
          transparent
          opacity={0.25}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function OrbitRing({ rotation }) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[2.9, 0.008, 16, 128]} />

      <meshBasicMaterial
        color="#D4AF37"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function TechnologyObjects() {
  const ecosystemRef = useRef();

  useFrame((state) => {
    if (!ecosystemRef.current) return;

    const time = state.clock.getElapsedTime();

    ecosystemRef.current.rotation.y = time * 0.08;
    ecosystemRef.current.rotation.x =
      Math.sin(time * 0.25) * 0.05;
  });

  return (
    <group ref={ecosystemRef}>
      <ConnectionLines />

     <OrbitRing rotation={[0, 0, 0]} />
     <OrbitRing rotation={[Math.PI / 2, 0, 0]} />

      <TechnologyCore />

      {technologies.map((technology) => (
        <TechnologyNode
          key={technology.name}
          name={technology.name}
          position={technology.position}
        />
      ))}
    </group>
  );
}

function TechnologyScene() {
  return (
    <div className="mt-20 h-[560px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050505]">
      <Canvas
        camera={{
          position: [0, 0, 7],
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

        <TechnologyObjects />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />

        <fog
          attach="fog"
          args={["#050505", 8, 14]}
        />
      </Canvas>
    </div>
  );
}

export default TechnologyScene;