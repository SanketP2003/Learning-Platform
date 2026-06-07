import { CourseSkeletonCard } from './CourseCardsGridClient';

export function GridFallback() {
  return (
    <section className="space-y-4 w-full h-full">
      <div className="flex items-center justify-between px-1 mb-4">
        <h2 className="font-display font-medium text-sm text-zinc-300">Active Courses</h2>
        <button className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
        <CourseSkeletonCard />
        <CourseSkeletonCard />
        <CourseSkeletonCard />
        <CourseSkeletonCard />
      </div>
    </section>
  );
}