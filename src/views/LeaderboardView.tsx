"use client";

import { motion } from 'framer-motion';
import { Trophy, Medal, Hexagon, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const mockLeaderboard = [
  { rank: 1, name: 'Alex Johnson', points: 12450, trend: 'up', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { rank: 2, name: 'Sarah Williams', points: 11200, trend: 'same', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { rank: 3, name: 'Michael Chen', points: 10840, trend: 'down', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { rank: 4, name: 'Emma Davis', points: 9500, trend: 'up', avatar: 'https://i.pravatar.cc/150?u=emma' },
  { rank: 5, name: 'You', points: 8920, trend: 'up', avatar: 'https://i.pravatar.cc/150?u=you', isCurrentUser: true },
  { rank: 6, name: 'David Smith', points: 8800, trend: 'same', avatar: 'https://i.pravatar.cc/150?u=david' },
  { rank: 7, name: 'Lisa Taylor', points: 8450, trend: 'down', avatar: 'https://i.pravatar.cc/150?u=lisa' },
  { rank: 8, name: 'James Wilson', points: 8100, trend: 'same', avatar: 'https://i.pravatar.cc/150?u=james' },
];

export function LeaderboardView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6 max-w-4xl"
    >
      <div className="mb-8 mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-medium text-white mb-2 flex items-center gap-2">
            <Medal className="w-6 h-6 text-accent-cyan" /> Leaderboard
          </h1>
          <p className="text-sm text-zinc-400">See how you rank among your peers globally.</p>
        </div>
        
        <div className="flex gap-2">
          {['Global', 'Friends', 'This Week'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                i === 0 
                  ? 'bg-white/10 text-white' 
                  : 'bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="grid grid-cols-[60px_1fr_100px_80px] sm:grid-cols-[80px_1fr_120px_100px] gap-2 md:gap-4 p-4 border-b border-white/5 text-xs font-medium text-zinc-500 uppercase tracking-wider">
          <div className="text-center">Rank</div>
          <div>Student</div>
          <div className="text-right">Points</div>
          <div className="text-center">Trend</div>
        </div>
        
        <div className="divide-y divide-white/[0.02]">
          {mockLeaderboard.map((user, idx) => (
            <motion.div 
              key={user.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              className={`grid grid-cols-[60px_1fr_100px_80px] sm:grid-cols-[80px_1fr_120px_100px] gap-2 md:gap-4 p-4 items-center transition-colors ${
                user.isCurrentUser ? 'bg-accent-cyan/[0.03]' : ''
              }`}
            >
              <div className="flex justify-center">
                {user.rank === 1 ? (
                  <div className="text-yellow-400"><Trophy className="w-5 h-5" /></div>
                ) : user.rank === 2 ? (
                  <div className="text-gray-300"><Trophy className="w-5 h-5" /></div>
                ) : user.rank === 3 ? (
                  <div className="text-amber-600"><Trophy className="w-5 h-5" /></div>
                ) : (
                  <span className="font-mono text-zinc-500 font-medium">{user.rank}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-white/10 hidden sm:block" />
                <span className={`font-medium truncate ${user.isCurrentUser ? 'text-accent-cyan' : 'text-zinc-200'}`}>
                  {user.name}
                  {user.isCurrentUser && <span className="ml-2 text-[10px] bg-accent-cyan/20 text-accent-cyan px-1.5 py-0.5 rounded uppercase tracking-wider">You</span>}
                </span>
              </div>
              
              <div className="text-right font-mono text-zinc-300 text-sm">
                {user.points.toLocaleString()}
              </div>
              
              <div className="flex justify-center">
                {user.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                ) : user.trend === 'down' ? (
                  <ArrowDownRight className="w-4 h-4 text-red-400" />
                ) : (
                  <Minus className="w-4 h-4 text-zinc-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
