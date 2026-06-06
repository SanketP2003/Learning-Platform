"use client";

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Zap, Target, Book } from 'lucide-react';
import * as Icons from 'lucide-react';

const mockAchievements = [
  { id: 1, title: 'First Steps', description: 'Completed your first lesson.', iconName: 'Award', unlocked: true, date: '2023-10-15' },
  { id: 2, title: 'Fast Learner', description: 'Finished 5 lessons in a single day.', iconName: 'Target', unlocked: true, date: '2023-10-18' },
  { id: 3, title: 'Consistent', description: 'Maintained a 7-day learning streak.', iconName: 'Zap', unlocked: true, date: '2023-10-25' },
  { id: 4, title: 'React Master', description: 'Score 100% on the React final assessment.', iconName: 'Star', unlocked: false },
  { id: 5, title: 'Bookworm', description: 'Read over 10,000 words of course material.', iconName: 'Book', unlocked: false },
  { id: 6, title: 'Global Contributor', description: 'Help 5 other students in the community.', iconName: 'Globe', unlocked: false },
];

export function AchievementsView() {
  const unlockedCount = mockAchievements.filter(a => a.unlocked).length;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6"
    >
      <div className="mb-8 mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-medium text-white mb-2 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-accent-cyan" /> Achievements
          </h1>
          <p className="text-sm text-zinc-400">Track your milestones and unlock special badges.</p>
        </div>
        <div className="glass-card px-4 py-2 flex items-center gap-3 w-fit">
          <div className="text-sm text-zinc-400">Unlocked</div>
          <div className="text-xl font-mono text-white font-medium">{unlockedCount}<span className="text-sm text-zinc-500">/{mockAchievements.length}</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAchievements.map((achievement, idx) => {
          const Icon = (Icons as any)[achievement.iconName] || Icons.Award;
          
          return (
            <motion.article
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`glass-card p-6 flex items-start gap-4 transition-all relative overflow-hidden group ${
                achievement.unlocked 
                  ? 'border-white/5 hover:border-white/10' 
                  : 'opacity-60 grayscale hover:grayscale-0'
              }`}
            >
              {achievement.unlocked && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
              
              <div className={`shrink-0 p-3 rounded-xl border ${
                achievement.unlocked 
                  ? 'bg-zinc-800/80 border-accent-cyan/20 text-accent-cyan shadow-[0_0_15px_rgba(56,189,248,0.15)]' 
                  : 'bg-zinc-800/50 border-white/5 text-zinc-500'
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="relative z-10">
                <h3 className={`font-medium mb-1 ${achievement.unlocked ? 'text-zinc-200' : 'text-zinc-400'}`}>
                  {achievement.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                  {achievement.description}
                </p>
                {achievement.unlocked && (
                  <div className="text-[10px] font-mono text-zinc-400 bg-white/5 inline-block px-2 py-0.5 rounded-full">
                    Unlocked {achievement.date}
                  </div>
                )}
                {!achievement.unlocked && (
                  <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                    <Icons.Lock className="w-3 h-3" /> Locked
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}
