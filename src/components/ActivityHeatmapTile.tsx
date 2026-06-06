"use client";

import { motion } from 'framer-motion';
import { mockActivity } from '@/data/mock';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Tooltip } from '@/components/Tooltip';

export function ActivityHeatmap() {
  const weeks = [];
  for (let i = 0; i < mockActivity.length; i += 7) {
    weeks.push(mockActivity.slice(i, i + 7));
  }

  const getColor = (count: number) => {
    if (count === 0) return 'bg-white/5';
    if (count < 2) return 'bg-zinc-700';
    if (count < 4) return 'bg-zinc-500';
    return 'bg-zinc-300';
  };

  return (
    <motion.section
      whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="glass-card p-6 flex flex-col justify-between h-full group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
           <h3 className="font-display font-medium text-sm text-zinc-300">Pulse</h3>
        </div>
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Last 90 Days</span>
      </div>

      <div className="flex-1 flex flex-col justify-center overflow-x-auto overflow-y-hidden pb-2 hide-scrollbar">
        <div className="flex gap-[3px] mx-auto">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px]">
              {week.map((day, dIdx) => (
                <Tooltip key={day.date} content={`${day.count} activities on ${day.date}`} delay={0.1}>
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-[2px] transition-colors hover:ring-1 hover:ring-white/50 cursor-crosshair",
                      getColor(day.count)
                    )}
                  />
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] text-zinc-500 pb-1">
        <span>Less</span>
        <div className="w-2.5 h-2.5 bg-white/5 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-zinc-700 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-zinc-500 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-zinc-300 rounded-[2px]" />
        <span>More</span>
      </div>
    </motion.section>
  );
}
