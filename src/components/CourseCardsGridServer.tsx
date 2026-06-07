import { supabase } from '@/lib/supabase';
import CourseCardsGridClient from './CourseCardsGridClient';

export default async function CourseCardsGridServer() {
  const { data: courses, error } = await supabase.from('courses').select('*').order('created_at', { ascending: false });

  if (error) {
    return (
      <section className="space-y-4 w-full h-full">
        <div className="flex items-center justify-between px-1 mb-4">
          <h2 className="font-display font-medium text-sm text-zinc-300">Active Courses</h2>
        </div>
        <div className="text-red-400 text-sm p-4 bg-black/40 rounded-md">
          Failed to load courses from Supabase.
          <div className="mt-2 text-xs text-zinc-500">{error.message}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4 w-full h-full">
      <div className="flex items-center justify-between px-1 mb-4">
        <h2 className="font-display font-medium text-sm text-zinc-300">Active Courses</h2>
        <button className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">View All</button>
      </div>
      <CourseCardsGridClient courses={courses || []} />
    </section>
  );
}