import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-900"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            stroke: ["#ffffff", "#A855F7", "#ffffff"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1],
          }}
          d="M10 8h14c4.418 0 8 3.582 8 8s-3.582 8-8 8H10V8z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            stroke: ["#ffffff", "#A855F7", "#ffffff"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
            times: [0, 0.5, 1],
          }}
          d="M20 24l-10 8V16l10 8z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
