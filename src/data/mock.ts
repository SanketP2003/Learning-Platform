import type { Course, Achievement, UserMetrics, ActivityEntry } from '../types';

export const mockUserMetrics: UserMetrics = {
  streak: 45,
  xp: 12560,
  level: "Advanced Learner",
  weeklyStudyHours: [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.8 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 4.2 },
    { day: "Fri", hours: 5.0 },
    { day: "Sat", hours: 1.2 },
    { day: "Sun", hours: 2.0 },
  ],
  productivity: 87,
};

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Advanced React Patterns",
    progress: 78,
    estimatedCompletion: "2h 15m",
    nextLesson: "Custom Hooks Composition",
    category: "Frontend",
    iconName: "Code2"
  },
  {
    id: "c2",
    title: "Next.js Server Components",
    progress: 32,
    estimatedCompletion: "4h 45m",
    nextLesson: "Streaming & Suspense",
    category: "Fullstack",
    iconName: "Server"
  },
  {
    id: "c3",
    title: "Three.js & WebGL Basics",
    progress: 12,
    estimatedCompletion: "8h 30m",
    nextLesson: "Geometries & Materials",
    category: "3D Graphics",
    iconName: "Box"
  },
  {
    id: "c4",
    title: "Framer Motion Masterclass",
    progress: 100,
    estimatedCompletion: "0h",
    nextLesson: "Completed",
    category: "Animation",
    iconName: "Sparkles"
  }
];

export const mockAchievements: Achievement[] = [
  { id: "a1", title: "React Master", description: "Complete advanced React courses", unlocked: true, iconName: "Trophy", progress: 100 },
  { id: "a2", title: "Fast Learner", description: "Complete 5 lessons in one day", unlocked: true, iconName: "Zap", progress: 100 },
  { id: "a3", title: "30-Day Streak", description: "Learn 30 days continuously", unlocked: true, iconName: "Flame", progress: 100 },
  { id: "a4", title: "Consistency Champion", description: "Learn 60 days continuously", unlocked: false, iconName: "Target", progress: 75 },
];

const activitySeed = [0, 1, 4, 2, 0, 3, 5, 1, 0, 2, 4, 0, 3, 1, 2];

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

// Deterministic mock activity for consistent SSR/hydration
export const mockActivity: ActivityEntry[] = Array.from({ length: 90 }).map((_, index) => {
  const date = new Date(Date.UTC(2026, 2, 8 + index));
  const count = activitySeed[index % activitySeed.length];

  return {
    date: formatDate(date),
    count,
  };
});
