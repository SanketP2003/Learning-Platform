"use client";

import { motion } from 'framer-motion';
import { Bot, ArrowRight, Sparkles } from 'lucide-react';

export function AIAssistantTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="glass-card p-6 relative overflow-hidden group flex flex-col justify-between h-full bg-gradient-to-br from-white/[0.02] to-transparent"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-cyan/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="flex items-start gap-4 relative z-10">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center">
            <Bot className="w-4 h-4 text-zinc-300" />
          </div>
        </div>
        <div className="flex-1 pt-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-medium text-white flex items-center gap-2 text-sm">
              Copilot Insights <Sparkles className="w-3 h-3 text-zinc-500" />
            </h3>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Based on your recent activity, complete <strong className="text-zinc-200 font-medium">Advanced React Patterns</strong> before moving to Next.js Server Components.
          </p>
        </div>
      </div>

      <button className="mt-6 w-full py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] flex items-center justify-center gap-2 text-xs font-medium text-zinc-300 transition-all group-hover:border-white/10">
        Chat with Assistant <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.section>
  );
}
