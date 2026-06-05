"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Clock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const mainTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const seconds = time.toLocaleTimeString("en-IN", {
    second: "2-digit",
  });

  const date = time.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const year = time.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="
        px-10 py-8 md:px-16 md:py-12
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_80px_rgba(124,58,237,0.15)]
      "
    >
      <div className="flex items-end justify-center">
        <h1 className="text-7xl md:text-[10rem] font-thin tracking-tight leading-none">
          {mainTime}
        </h1>

        <span className="mb-5 ml-3 text-lg md:text-2xl text-white/40 font-light">
          {seconds}
        </span>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg md:text-2xl text-white/70 tracking-wide">
          {date}
        </p>

        <p className="mt-3 text-sm tracking-[0.4em] text-white/30">
          {year}
        </p>
      </div>
    </motion.div>
  );
}