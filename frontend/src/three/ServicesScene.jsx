import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WebDevelopment() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
  });

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={ref}>
        {/* Browser */}
        <RoundedBox
          args={[2.8, 1.8, 0.15]}
          radius={0.12}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#111111"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen */}
        <mesh position={[0, -0.05, 0.1]}>
          <planeGeometry args={[2.45, 1.35]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#8A6B16"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Browser dots */}
        {[-0.9, -0.65, -0.4].map((x) => (
          <mesh key={x} position={[x, 0.63, 0.11]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function MobileDevelopment() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={ref}>
        <RoundedBox
          args={[1.25, 2.5, 0.18]}
          radius={0.15}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#111111"
            metalness={0.9}
            roughness={0.18}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1, 1.85]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#8A6B16"
            emissiveIntensity={0.25}
          />
        </mesh>

        <mesh position={[0, -1, 0.13]}>
          <sphereGeometry args={[0.07, 20, 20]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
}

function DigitalMarketing() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={group}>
        {[0, 1, 2, 3].map((item) => (
          <mesh
            key={item}
            position={[
              (item - 1.5) * 0.55,
              Math.sin(item) * 0.3,
              0,
            ]}
          >
            <boxGeometry
              args={[
                0.4,
                0.7 + item * 0.25,
                0.25,
              ]}
            />

            <meshStandardMaterial
              color="#D4AF37"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function ARVR() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x =
        state.clock.getElapsedTime() * 0.25;

      ref.current.rotation.y =
        state.clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.7}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.25, 2]} />

        <meshStandardMaterial
          color="#D4AF37"
          emissive="#8A6B16"
          emissiveIntensity={0.3}
          metalness={1}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ThreeDModeling() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x =
        state.clock.getElapsedTime() * 0.25;

      ref.current.rotation.y =
        state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.25, 128, 32]} />

        <meshStandardMaterial
          color="#D4AF37"
          metalness={1}
          roughness={0.18}
        />
      </mesh>
    </Float>
  );
}

function UIUX() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={group}>
        {[0, 1, 2].map((item) => (
          <RoundedBox
            key={item}
            args={[1.7, 1.1, 0.08]}
            radius={0.08}
            position={[
              (item - 1) * 0.5,
              (item - 1) * 0.35,
              item * 0.15,
            ]}
          >
            <meshStandardMaterial
              color={item === 1 ? "#D4AF37" : "#222222"}
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

function ServiceObject({ serviceIndex }) {
  switch (serviceIndex) {
    case 0:
      return <WebDevelopment />;

    case 1:
      return <MobileDevelopment />;

    case 2:
      return <DigitalMarketing />;

    case 3:
      return <ARVR />;

    case 4:
      return <ThreeDModeling />;

    case 5:
      return <UIUX />;

    default:
      return <WebDevelopment />;
  }
}

function ServicesScene({ serviceIndex }) {
  return (
    <div className="h-[450px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[4, 4, 5]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={2}
          color="#D4AF37"
        />

        <ServiceObject serviceIndex={serviceIndex} />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default ServicesScene;