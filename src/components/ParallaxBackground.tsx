"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const rotateX = useSpring(
    useTransform(mouseY, [-100, 100], [2, -2]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-100, 100], [-2, 2]),
    springConfig
  );
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.05]),
    springConfig
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        style={{
          y: translateY,
          rotateX,
          rotateY,
          scale,
          opacity,
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"></div>
        </div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      </motion.div>
    </div>
  );
}
