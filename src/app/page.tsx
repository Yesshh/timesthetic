"use client";

import Clock from "@/components/Clock";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">

      <Background />

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-sm md:text-base tracking-[0.5em] text-white/70 font-light">
          TIMESTHETIC
        </h1>

        <p className="text-xs text-white/30 mt-2 tracking-[0.3em]">
          TIME, REDESIGNED.
        </p>
      </div>

      {/* Main Clock */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Clock />
      </div>
    </main>
  );
}