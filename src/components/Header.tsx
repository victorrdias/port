"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
