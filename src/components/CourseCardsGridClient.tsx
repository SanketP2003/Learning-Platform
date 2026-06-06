"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';
import type { Course } from '@/types';

export function CourseSkeletonCard() {
  return (
    <div className="glass-card p-5 relative overflow-hidden flex flex-col justify-between h-[210px] animate-pulse bg-zinc-900/30 border border-white/[0.02]">
       <div className="flex justify-between items-start mb-6">
          <div className="w-11 h-11 rounded-lg bg-zinc-800/60" />
          <div className="w-10 h-10 rounded-full bg-zinc-800/60" />
       </div>
       <div className="mt-auto">
          <div className="h-5 bg-zinc-800/60 rounded-md w-3/4 mb-3" />
          <div className="h-4 bg-zinc-800/60 rounded-md w-1/2 mb-4" />
          <div className="pt-3 flex flex-col gap-2.5 border-t border-white/[0.05] mt-2">
            <div className="flex justify-between">
              <div className="h-3 bg-zinc-800/60 rounded w-1/4" />
              <div className="h-3 bg-zinc-800/60 rounded w-1/4" />
            </div>
            <div className="flex justify-between">
              <div className="h-3 bg-zinc-800/60 rounded w-1/4" />
              <div className="h-3 bg-zinc-800/60 rounded w-1/3" />
            </div>
          </div>
       </div>
    </div>
  );
}

export default function CourseCardsGridClient({ courses }: { courses: Course[] }) {
  if (!courses || courses.length === 0) {
    return <div className="text-zinc-500 text-sm py-4">No courses available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
      {courses.map((course) => {
        const Icon = (Icons as any)[course.iconName] || Icons.Book;

        return (
          <motion.article
            key={course.id}
            whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(255,255,255,0.1)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group glass-card p-5 relative overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/5 to-accent-purple/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="p-3 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors duration-300 border border-white/5">
                <Icon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              <Tooltip content={`${course.progress}% Completed`} position="left" delay={0.1}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                   <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                     <path
                       className="text-white/[0.05]"
                       strokeWidth="2.5"
                       stroke="currentColor"
                       fill="none"
                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                     />
                     <motion.path
                       className="text-zinc-400"
                       initial={{ strokeDasharray: '0, 100' }}
                       animate={{ strokeDasharray: `${course.progress}, 100` }}
                       transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                       strokeWidth="2.5"
                       strokeLinecap="round"
                       stroke="currentColor"
                       fill="none"
                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                     />
                   </svg>
                   <span className="absolute text-[9px] text-zinc-300 font-mono font-medium">{course.progress}%</span>
                </div>
              </Tooltip>
            </div>

            <div className="relative z-10">
              <h3 className="font-display font-medium text-zinc-200 line-clamp-2 min-h-[2.5rem] mb-2 leading-snug text-sm">
                {course.title}
              </h3>
              <div className="pt-3 flex flex-col gap-2 border-t border-white/[0.05] mt-2">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">Left</span>
                  <span className="font-mono text-zinc-400">{(course as any).estimatedCompletion ?? '—'}</span>
                </div>
                 <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">Next</span>
                  <span className="text-zinc-400 truncate max-w-[120px]">{(course as any).nextLesson ?? '—'}</span>
                </div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
