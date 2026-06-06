"use client";

import { motion } from 'framer-motion';

export function BackgroundFX() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-space-black" />
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-accent-purple/30 blur-[140px]"
      />
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[70vw] h-[70vw] rounded-full bg-accent-cyan/30 blur-[150px]"
      />

      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
