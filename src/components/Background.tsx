"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[-10%]
          left-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/30
          blur-3xl
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />
    </div>
  );
}