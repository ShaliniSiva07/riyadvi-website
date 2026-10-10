import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Line,
  Text,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* -------------------------------------------------------
   Technology nodes
------------------------------------------------------- */

const technologies = [
  {
    name: "React",
    position: [-2.5, 1.4, 0],
  },
  {
    name: "Node.js",
    position: [2.5, 1.4, 0],
  },
  {
    name: "AI",
    position: [2.8, -1.2, 0],
  },
  {
    name: "MongoDB",
    position: [-2.8, -1.2, 0],
  },
  {
    name: "3D",
    position: [0, 2.6, 0],
  },
  {
    name: "Cloud",
    position: [0, -2.5, 0],
  },
];

/* -------------------------------------------------------
   Individual technology node
------------------------------------------------------- */

function TechnologyNode({ name, position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.position.y =
      position[1] + Math.sin(time * 1.2 + position[0]) * 0.08;

    meshRef.current.rotation.y += 0.008;
  });

  return (
    <group position={position}>
      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.4}
      >
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.22, 32, 32]} />

          <meshStandardMaterial
            color="#D4AF37"
            emissive="#D4AF37"
            emissiveIntensity={0.35}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        <Text
          position={[0, -0.42, 0]}
          fontSize={0.18}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

/* -------------------------------------------------------
   Connection lines
------------------------------------------------------- */

function ConnectionLines() {
  const center = [0, 0, 0];

  return (
    <>
      {technologies.map((technology) => (
        <Line
          key={technology.name}
          points={[center, technology.position]}
          color="#D4AF37"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}

      {/* Additional ecosystem connections */}
      <Line
        points={[
          technologies[0].position,
          technologies[4].position,
          technologies[1].position,
        ]}
        color="#D4AF37"
        transparent
        opacity={0.2}
        lineWidth={1}
      />

      <Line
        points={[
          technologies[3].position,
          technologies[5].position,
          technologies[2].position,
        ]}
        color="#D4AF37"
        transparent
        opacity={0.2}
        lineWidth={1}
      />
    </>
  );
}

/* -------------------------------------------------------
   Central digital core
------------------------------------------------------- */

function DigitalCore() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.25;
      coreRef.current.rotation.y = time * 0.4;
      coreRef.current.rotation.z = time * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.3;
      ringRef.current.rotation.x = time * 0.15;
    }
  });

  return (
    <group>
      {/* Main core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.85, 2]} />

        <meshStandardMaterial
          color="#D4AF37"
          emissive="#8A6B16"
          emissiveIntensity={0.4}
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Inner glow */}
      <mesh scale={1.18}>
        <icosahedronGeometry args={[0.85, 2]} />

        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.15, 0.012, 16, 100]} />

        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.65}
        />
      </mesh>

      <Text
        position={[0, -1.15, 0]}
        fontSize={0.2}
        color="#D4AF37"
        anchorX="center"
        anchorY="middle"
      >
        DIGITAL CORE
      </Text>
    </group>
  );
}

/* -------------------------------------------------------
   Rotating ecosystem rings
------------------------------------------------------- */

function EcosystemRings() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.x =
      Math.sin(time * 0.2) * 0.25;

    groupRef.current.rotation.y = time * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.008, 12, 120]} />

        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.25}
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.5, 0.006, 12, 120]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
        />
      </mesh>

      <mesh rotation={[Math.PI / 4, 0, Math.PI / 5]}>
        <torusGeometry args={[2.8, 0.004, 12, 120]} />

        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------
   Interactive technology ecosystem
------------------------------------------------------- */

function TechnologyEcosystem() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const { x, y } = state.pointer;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.18,
      0.04
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.12,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <DigitalCore />

      <ConnectionLines />

      {technologies.map((technology) => (
        <TechnologyNode
          key={technology.name}
          name={technology.name}
          position={technology.position}
        />
      ))}

      <EcosystemRings />
    </group>
  );
}

/* -------------------------------------------------------
   Main Hero Scene
------------------------------------------------------- */

function HeroScene() {
  return (
    <div className="h-[500px] w-full">
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
        {/* Background stars */}
        <Stars
          radius={50}
          depth={30}
          count={700}
          factor={1.5}
          saturation={0}
          fade
          speed={0.4}
        />

        {/* Lighting */}
        <ambientLight intensity={0.35} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-4, -3, 3]}
          intensity={2}
          color="#D4AF37"
        />

        <pointLight
          position={[4, 2, 2]}
          intensity={1}
          color="#ffffff"
        />

        {/* Main ecosystem */}
        <TechnologyEcosystem />

        {/* Optional user interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default HeroScene;