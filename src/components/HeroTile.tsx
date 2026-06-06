"use client";

import { motion } from 'framer-motion';
import { mockUserMetrics } from '@/data/mock';
import { Flame, Star, Rocket, Sparkles } from 'lucide-react';

import { Tooltip } from '@/components/Tooltip';

export function HeroTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.01, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative glass-card p-8 overflow-hidden group min-h-[220px] w-full h-full flex flex-col justify-center bg-gradient-to-br from-zinc-900/10 to-zinc-950/20 shadow-inner"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-4">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-zinc-300 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            Welcome Back
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
            Hi, <span className="text-white">Sanket</span>
          </h1>
          <p className="text-zinc-400 font-normal max-w-md mt-2 text-sm leading-relaxed">
            You're in the top 5% of learners this week. Keep up the momentum!
          </p>
        </div>

        <div className="flex gap-4">
          <Tooltip content="3 days to milestone">
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/20 border border-white/[0.05] min-w-[90px]"
            >
              <Flame className="w-5 h-5 text-zinc-400 mb-2" />
              <span className="font-mono text-xl font-medium text-white">{mockUserMetrics.streak}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Day Streak</span>
            </motion.div>
          </Tooltip>

          <Tooltip content="450 XP to Next Level">
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/20 border border-white/[0.05] min-w-[90px]"
            >
               <Star className="w-5 h-5 text-zinc-400 mb-2" />
              <span className="font-mono text-xl font-medium text-white">{mockUserMetrics.xp.toLocaleString()}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Total XP</span>
            </motion.div>
          </Tooltip>
          
          <Tooltip content="Current League Rank">
            <motion.div 
              whileHover={{ y: -2 }}
              className="hidden sm:flex flex-col items-center justify-center p-4 rounded-xl bg-black/20 border border-white/[0.05] min-w-[90px]"
            >
               <Rocket className="w-5 h-5 text-zinc-400 mb-2" />
              <span className="font-sans text-xs font-medium text-white mt-1 px-2 text-center leading-tight">{mockUserMetrics.level}</span>
            </motion.div>
          </Tooltip>
        </div>
      </div>
    </motion.section>
  );
}
