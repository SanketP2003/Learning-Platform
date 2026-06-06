"use client";

import { LayoutDashboard, BookOpen, Trophy, User } from 'lucide-react';

import { motion } from 'framer-motion';

export function BottomNavMobile({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (id: string) => void }) {
  const items = [
    { icon: LayoutDashboard, label: 'Home', id: 'dashboard' },
    { icon: BookOpen, label: 'Learn', id: 'courses' },
    { icon: Trophy, label: 'Stats', id: 'achievements' },
    { icon: User, label: 'Profile', id: 'profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-xl border-t border-white/[0.06] pb-safe z-50">
      <div className="flex items-center justify-around p-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button key={item.label} onClick={() => setActiveItem(item.id)} className="relative flex flex-col items-center justify-center gap-1 p-2 w-16">
              {isActive && (
                <motion.div 
                  layoutId="mobileNavActive"
                  className="absolute inset-0 bg-white/[0.04] rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <Icon className={`w-4 h-4 relative z-10 transition-colors ${isActive ? 'text-zinc-200' : 'text-zinc-500'}`} />
              <span className={`text-[10px] relative z-10 font-medium ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
