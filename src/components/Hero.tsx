"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToElement } from "@/utils/scroll";
import { useState } from "react";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            Hello, I&apos;m{" "}
            <span className="inline-block">
              <span className="w-[250px] animate-[typing_2s_steps(20)_forwards] overflow-hidden whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Vitor Dias
              </span>
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | Problem Solver | Tech Enthusiast | Musician
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
        >
          <div className="relative">
            <button
              onClick={() => setIsResumeOpen(!isResumeOpen)}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-purple-600 rounded-lg transition-all duration-300 
                hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View My Resume
              </span>
            </button>

            {isResumeOpen && (
              <div className="absolute z-50 mt-2 w-[225px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/curriculo-pt.pdf"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    role="menuitem"
                    target="_blank"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    Português (BR)
                  </Link>
                  <Link
                    href="/curriculo-en.pdf"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    role="menuitem"
                    target="_blank"
                    onClick={() => setIsResumeOpen(false)}
                  >
                    English
                  </Link>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToElement("about")}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-purple-600 border-2 border-purple-600 rounded-lg transition-all duration-300
              hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              View Projects
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="cursor-pointer"
          onClick={() => scrollToElement("about")}
        >
          <svg
            className="w-6 h-6 text-purple-600 hover:text-purple-700 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
