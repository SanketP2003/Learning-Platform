"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, Legend
} from 'recharts';
import { mockUserMetrics } from '@/data/mock';
import { Activity } from 'lucide-react';

export function AnalyticsCharts() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <motion.section
        whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        className="glass-card p-6 flex flex-col min-h-[200px] w-full group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="flex items-center gap-2 mb-4 relative z-10">
          <Activity className="w-4 h-4 text-zinc-400" />
          <h3 className="font-display font-medium text-sm text-zinc-300">Study Velocity</h3>
        </div>
        <div className="flex-1 w-full h-full min-h-[140px] mt-2">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockUserMetrics.weeklyStudyHours} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#71717a" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#71717a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.2)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.2)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap bg-black/80 backdrop-blur-xl border border-white/10 text-zinc-200 shadow-xl">
                          {label}: {payload[0].value} {payload[0].value === 1 ? 'hr' : 'hrs'}
                        </div>
                      );
                    }
                    return null;
                  }}
                  cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#a1a1aa" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </motion.section>

      
    </>
  );
}
