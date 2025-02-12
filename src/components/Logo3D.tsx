"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import { Mesh } from "three";

function AnimatedLogo() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          VD
          <meshStandardMaterial color="#7C3AED" />
        </Text3D>
      </Center>
    </Float>
  );
}

export default function Logo3D() {
  return (
    <div className="h-12 w-12">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        className="h-full w-full"
      >
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedLogo />
      </Canvas>
    </div>
  );
}
