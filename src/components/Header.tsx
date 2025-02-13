"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  const switchLocale = (newLocale: string) => {
    const segments = pathname?.split("/") || [];
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  };

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#13111b]/80 backdrop-blur-sm border-b border-gray-200 dark:border-[#2d2b3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 text-sm">
              <Link
                href={switchLocale("en")}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currentLocale === "en"
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                EN
              </Link>
              <Link
                href={switchLocale("pt")}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currentLocale === "pt"
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                PT
              </Link>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
