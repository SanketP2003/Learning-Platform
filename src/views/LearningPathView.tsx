"use client";

import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Circle, Lock } from 'lucide-react';

const pathSteps = [
  { id: 1, title: 'Web Development Fundamentals', status: 'completed', description: 'HTML, CSS, and basic JavaScript.' },
  { id: 2, title: 'Advanced React Patterns', status: 'active', description: 'Hooks, context, and performance optimization.', progress: 75 },
  { id: 3, title: 'Fullstack with Supabase', status: 'locked', description: 'Database, auth, and Realtime.' },
  { id: 4, title: 'Framer Motion Mastery', status: 'locked', description: 'Complex layout animations and gestures.' }
];

export function LearningPathView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6 max-w-3xl border-l-0"
    >
      <div className="mb-8 mt-2">
        <h1 className="text-2xl font-display font-medium text-white mb-2 flex items-center gap-2">
          <Compass className="w-6 h-6 text-accent-cyan" /> Learning Path
        </h1>
        <p className="text-sm text-zinc-400">Your personalized curriculum and skill progression.</p>
      </div>

      <div className="glass-card p-6 md:p-8">
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
          {pathSteps.map((step, idx) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[17px] top-1 bg-black rounded-full border-[3px] border-black">
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-7 h-7 text-green-400/80 bg-black rounded-full" />
                ) : step.status === 'active' ? (
                  <div className="relative flex items-center justify-center w-7 h-7">
                    <Circle className="w-7 h-7 text-accent-cyan animate-pulse absolute" />
                    <div className="w-2.5 h-2.5 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                )}
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                step.status === 'active' 
                  ? 'bg-white/[0.03] border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]' 
                  : step.status === 'completed'
                    ? 'border-transparent hover:border-white/5'
                    : 'opacity-50 border-transparent grayscale'
              }`}>
                <h3 className="text-lg font-medium text-zinc-200 mb-1">{step.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">{step.description}</p>
                
                {step.status === 'active' && step.progress !== undefined && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs font-medium mb-2">
                       <span className="text-zinc-400">Progress</span>
                       <span className="text-accent-cyan font-mono">{step.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${step.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent-cyan shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
