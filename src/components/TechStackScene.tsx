"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Stage,
  useAnimations,
  useProgress,
} from "@react-three/drei";
import { useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

function Loader() {
  const { progress } = useProgress();
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: progress === 100 ? 0 : 1 }}
    >
      <div className="w-full h-full bg-transparent" />
    </div>
  );
}

function Model() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/animation4.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Debug: Log all mesh names and their current colors
    console.log("--- Mesh Debug Info ---");
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        console.log("Mesh name:", child.name);
      }
    });

    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        const name = child.name.toLowerCase();

        // Set transparency only for wave lines, not mouth or eyes

        console.log("Processing mesh:", name);

        if (isDarkMode) {
          // Dark mode colors
          if (
            name.includes("robot_white_glossy") ||
            name.includes("hands_white_glossy")
          ) {
            child.material.color.set("#f8f7f4"); // White body parts
          } else if (
            name.includes("robot_black_matt") ||
            name.includes("ears_black_matt")
          ) {
            child.material.color.set("#000000"); // Black parts
          } else if (name.includes("eyes_blue_light")) {
            child.material.color.set("#000000"); // Black eyes
          } else if (name.includes("mouth_blue_light")) {
            child.material.color.set("#6B46C1"); // Purple mouth
          }
        } else {
          // Light mode colors
          if (
            name.includes("robot_white_glossy") ||
            name.includes("hands_white_glossy")
          ) {
            child.material.color.set("#6B46C1"); // Purple body parts
          } else if (
            name.includes("robot_black_matt") ||
            name.includes("ears_black_matt")
          ) {
            child.material.color.set("#000000"); // Keep black parts
          } else if (name.includes("eyes_blue_light")) {
            child.material.color.set("#000000"); // Black eyes
          } else if (name.includes("mouth_blue_light")) {
            child.material.color.set("#f8f7f4"); // White mouth
          }
        }
      }
    });
  }, [scene, isDarkMode]);

  useEffect(() => {
    // Play all animations
    if (animations.length > 0 && actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.reset().setLoop(THREE.LoopRepeat, Infinity).play();
      }
    }
  }, [actions, animations]);

  // Update the animation
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      mixer.update(0.0006);
    };
    animate();
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [mixer]);

  return (
    <primitive ref={group} object={scene} scale={0.4} position={[-4, -4, -4]} />
  );
}

export default function TechStackScene() {
  return (
    <div className="min-h-[400px] relative">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          performance={{ min: 0.2 }}
          dpr={[1, 2]}
        >
          <Stage environment="night" intensity={0.6} shadows={false}>
            <Model />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload("/animation4.glb");
