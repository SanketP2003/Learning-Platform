"use client";

import React from 'react';
import { CourseSkeletonCard } from './CourseCardsGridClient';
import CourseCardsGridClient from './CourseCardsGridClient';

type CourseItem = {
  id: string;
  title: string;
  progress: number;
  iconName?: string;
  estimatedCompletion?: string | null;
  nextLesson?: string | null;
};

export default function CourseCardsGrid() {
  const [courses, setCourses] = React.useState<CourseItem[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
      try {
        setError(null);
        const response = await fetch('/api/courses', { signal: controller.signal });

        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          throw new Error(payload?.error || 'Failed to load courses.');
        }

        const payload = (await response.json()) as { courses?: CourseItem[] };
        setCourses(payload.courses ?? []);
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
        setError(err?.message ?? 'Failed to load courses.');
        setCourses([]);
      }
    }

    loadCourses();

    return () => controller.abort();
  }, []);

  return (
    <section className="space-y-4 w-full h-full">
      <div className="flex items-center justify-between px-1 mb-4">
        <h2 className="font-display font-medium text-sm text-zinc-300">Active Courses</h2>
        <button className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">View All</button>
      </div>

      {error ? (
        <div className="text-red-400 text-sm p-4 bg-black/40 rounded-md">
          Failed to load courses. Please check Supabase configuration.
          <div className="mt-2 text-xs text-zinc-500">{error}</div>
        </div>
      ) : courses === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          <CourseSkeletonCard />
          <CourseSkeletonCard />
          <CourseSkeletonCard />
          <CourseSkeletonCard />
        </div>
      ) : (
        <CourseCardsGridClient courses={courses} />
      )}
    </section>
  );
}
