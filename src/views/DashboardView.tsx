"use client";

import { motion, type Variants } from 'framer-motion';
import { HeroTile } from '@/components/HeroTile';
import { AnalyticsCharts } from '@/components/AnalyticsCharts';
import { DailyGoalsTile } from '@/components/DailyGoalsTile';
import { ActivityHeatmap } from '@/components/ActivityHeatmapTile';
import { AchievementsTile } from '@/components/AchievementsTile';
import { AIAssistantTile } from '@/components/AIAssistantTile';
import CourseCardsGrid from '@/components/CourseCardsGrid';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const tileItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export function DashboardView() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-12 auto-rows-min pb-6"
    >
        
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-8 flex flex-col h-full">
            <HeroTile />
        </motion.div>
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-4 flex flex-col h-full"> 
            <DailyGoalsTile />
        </motion.div>
        
        
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-8 flex flex-col h-full">
            <CourseCardsGrid />
        </motion.div>
        
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">
            <ActivityHeatmap />
            <AnalyticsCharts />
        </motion.div>
        
        
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-5 flex flex-col h-full">
          <AchievementsTile />
        </motion.div>
        
        <motion.div variants={tileItem} className="md:col-span-12 lg:col-span-7 flex flex-col h-full">
          <AIAssistantTile />
        </motion.div>
    </motion.div>
  );
}
