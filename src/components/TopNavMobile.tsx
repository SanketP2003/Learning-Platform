"use client";

import { Orbit, Bell, Menu } from 'lucide-react';

import { motion } from 'framer-motion';

export function TopNavMobile() {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black/50 backdrop-blur-xl border-b border-white/[0.06] z-50 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-7 h-7 rounded bg-white/10 border border-white/10 shadow-sm">
          <Orbit className="w-4 h-4 text-zinc-300" />
        </div>
        <span className="font-display font-medium text-sm text-zinc-200">
          NextGen
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative w-8 h-8 rounded-full flex items-center justify-center bg-transparent hover:bg-white/5 transition-colors">
          <Bell className="w-4 h-4 text-zinc-400" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full" />
        </button>
      </div>
    </header>
  );
}
