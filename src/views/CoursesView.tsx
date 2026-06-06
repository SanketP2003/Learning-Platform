"use client";

import { motion } from 'framer-motion';
import CourseCardsGrid from '@/components/CourseCardsGrid';

export function CoursesView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6"
    >
      <div className="mb-8 mt-2">
        <h1 className="text-2xl font-display font-medium text-white mb-2">My Courses</h1>
        <p className="text-sm text-zinc-400">Access all your enrolled courses and learning materials.</p>
      </div>

      <div className="glass-card p-6 min-h-[400px]">
        <CourseCardsGrid />
      </div>
    </motion.div>
  );
}
