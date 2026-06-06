"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, BookOpen, Compass, Trophy, 
  BarChart2, Users, Settings, User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'My Courses', id: 'courses' },
  { icon: Compass, label: 'Learning Path', id: 'path' },
  { icon: Trophy, label: 'Achievements', id: 'achievements' },
  { icon: BarChart2, label: 'Leaderboard', id: 'leaderboard' },
  { icon: Users, label: 'Community', id: 'community' },
];

const otherItems = [
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: User, label: 'Profile', id: 'profile' },
];

export function Sidebar({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (id: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        width: isExpanded ? 240 : 80 
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.8 }}
      className="h-screen sticky top-0 bg-zinc-900/50 border-r border-white/5 flex flex-col pt-6 z-40"
      onMouseEnter={() => window.innerWidth < 1024 ? setIsExpanded(true) : null}
      onMouseLeave={() => window.innerWidth < 1024 ? setIsExpanded(false) : null}
    >
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
          N
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.span 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-bold text-sm tracking-wider text-zinc-100 whitespace-nowrap overflow-hidden"
            >
              NextGen
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 space-y-6">
        <div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2"
              >
                MENU
              </motion.div>
            )}
          </AnimatePresence>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    "relative w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group text-sm",
                    isActive ? "text-blue-500 bg-white/5 font-medium" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-blue-500" : "")} />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="truncate overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2"
              >
                OTHERS
              </motion.div>
            )}
          </AnimatePresence>
          <nav className="space-y-1">
            {otherItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    "relative w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group text-sm",
                    isActive ? "text-blue-500 bg-white/5 font-medium" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-blue-500" : "")} />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="truncate overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.aside>
  );
}
