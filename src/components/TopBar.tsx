"use client";

import { Search, Bell, ChevronDown, LogOut } from 'lucide-react';

import { motion } from 'framer-motion';

export function TopBar({ onLogout }: { onLogout?: () => void }) {
  return (
    <div className="hidden md:flex items-center justify-between py-4 px-8 border-b border-white/[0.06] bg-zinc-950/50 backdrop-blur-md sticky top-0 z-30">
      <div className="flex-1 max-w-xl relative">
        <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-zinc-900/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
        />
      </div>

      <div className="flex items-center gap-6 ml-4">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/[0.02] py-1 px-2 rounded-lg transition-colors">
          <img src="https://i.pravatar.cc/150?u=sanket" alt="Sanket Patil" className="w-8 h-8 rounded-full border border-white/10" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-200 leading-tight">Sanket Patil</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Pro Learner</span>
          </div>
        </div>
        
        <div className="w-px h-6 bg-white/[0.06]" />

        <div className="flex items-center gap-2">
          <button className="relative w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-zinc-950" />
          </button>
          <button 
            onClick={onLogout}
            className="relative w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-red-400 transition-colors"
            title="Sign out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
