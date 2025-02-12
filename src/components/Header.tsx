"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#13111b]/80 backdrop-blur-sm border-b border-gray-200 dark:border-[#2d2b3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
