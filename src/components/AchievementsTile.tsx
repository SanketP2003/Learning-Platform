"use client";

import { motion } from 'framer-motion';
import { mockAchievements } from '@/data/mock';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip } from '@/components/Tooltip';

export function AchievementsTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="glass-card p-6 min-h-full group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="font-display font-medium text-sm text-zinc-300">Achievements</h3>
        <span className="text-[10px] font-medium px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-zinc-400">Top 2%</span>
      </div>

      <div className="flex flex-col gap-3">
        {mockAchievements.slice(0, 3).map((ach, idx) => {
          const Icon = (Icons as any)[ach.iconName] || Icons.Award;
          
          return (
            <div
              key={ach.id}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-all border border-transparent hover:border-white/[0.05] hover:bg-white/[0.03]",
                ach.unlocked ? "" : "opacity-50"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-md flex items-center justify-center shrink-0",
                ach.unlocked ? "bg-zinc-800 text-zinc-300 border border-white/5" : "bg-transparent border border-white/10 text-zinc-600"
              )}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-zinc-200 truncate">{ach.title}</h4>
                <p className="text-xs text-zinc-500 truncate">{ach.description}</p>
              </div>
              {!ach.unlocked && (
                 <Tooltip content={`${ach.progress}% Complete`} delay={0.1}>
                   <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden shrink-0">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${ach.progress}%` }}
                        transition={{ delay: 1, duration: 1 }}
                        className="h-full bg-zinc-500"
                      />
                   </div>
                 </Tooltip>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
