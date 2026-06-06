"use client";

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';

export function DailyGoalsTile() {
  const progress = 75;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.section
      whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="glass-card p-6 flex flex-col relative overflow-hidden group w-full h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-transparent group-hover:border-white/10 rounded-2xl" />
      <div className="flex items-center justify-between mb-4 w-full z-10">
        <h3 className="font-display font-medium text-sm text-zinc-300 flex items-center gap-2">
           <Target className="w-4 h-4 text-zinc-400" />
           Daily Goal
        </h3>
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Today</span>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative mt-2 z-10">
          <Tooltip content="Goal: 120 mins / 90 mins done" delay={0.1}>
            <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <svg className="w-full h-full -rotate-90 transform relative z-10" viewBox="0 0 100 100">
                  
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="stroke-white/[0.03]"
                    strokeWidth="6"
                    fill="none"
                  />
                  
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="stroke-accent-cyan"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    style={{
                      strokeDasharray: circumference,
                      filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.4))'
                    }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-mono font-medium text-white">{progress}%</span>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">Done</span>
                </div>
            </div>
          </Tooltip>
        
        <p className="text-xs text-zinc-400 text-center mt-6">
            <span className="font-medium text-zinc-200">30 mins</span> left to reach your goal
        </p>
      </div>
    </motion.section>
  );
}
