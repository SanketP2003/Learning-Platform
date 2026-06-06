"use client";

import { motion } from 'framer-motion';
import { Users, MessageSquare, ThumbsUp, Share2, Search } from 'lucide-react';

const mockDiscussions = [
  { id: 1, author: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?u=alex', title: 'Best practices for React Context?', content: 'I am building a large scale app and wondering if Context API is enough or if I should reach for Redux/Zustand.', replies: 12, likes: 34, time: '2 hours ago', category: 'React' },
  { id: 2, author: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?u=sarah', title: 'Supabase RLS Policies returning empty array', content: 'Hey everyone, I set up a policy for authenticated users but my select query keeps returning an empty array. Attached my policy...', replies: 5, likes: 12, time: '5 hours ago', category: 'Backend' },
  { id: 3, author: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?u=michael', title: 'Framer motion layout animations glitching', content: 'When I try to mix layout animations with explicit scale transforms, the component jumps during the transition.', replies: 8, likes: 21, time: '1 day ago', category: 'Animation' },
];

export function CommunityView() {
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
            <Users className="w-6 h-6 text-accent-cyan" /> Community
          </h1>
          <p className="text-sm text-zinc-400">Join the discussion and learn together with others.</p>
        </div>
        
        <button className="px-4 py-2 bg-accent-cyan text-black text-sm font-medium rounded-lg hover:bg-accent-cyan/90 transition-colors shrink-0">
          New Discussion
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search discussions..." 
            className="w-full bg-zinc-900/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-600"
          />
        </div>
        <div className="flex gap-2 shrink-0 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          {['All', 'React', 'Backend', 'Animation', 'General'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                i === 0 
                  ? 'bg-white/10 text-white' 
                  : 'bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {mockDiscussions.map((discussion, idx) => (
          <motion.article 
            key={discussion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -2 }}
            className="glass-card p-5 transition-transform"
          >
            <div className="flex items-start gap-4">
              <img src={discussion.avatar} alt={discussion.author} className="w-10 h-10 rounded-full border border-white/10" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className="font-medium text-zinc-200 truncate">{discussion.title}</h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 bg-white/5 text-zinc-500 rounded-full shrink-0">
                    {discussion.category}
                  </span>
                </div>
                
                <div className="text-xs text-zinc-500 mb-2">
                  Posted by <span className="text-zinc-400">{discussion.author}</span> • {discussion.time}
                </div>
                
                <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                  {discussion.content}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
                  <button className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> {discussion.likes}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> {discussion.replies} Replies
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors ml-auto md:ml-0 md:-order-none order-last">
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
