import React from 'react';
import { CourseSkeletonCard } from './CourseCardsGridClient';
import CourseCardsGridClient from './CourseCardsGridClient';
import { supabaseServer, hasServerSupabaseConfig } from '@/lib/supabaseServer';

    throw new Error('Supabase server config is missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  }

  const { data, error } = await supabaseServer.from('courses').select('*').order('created_at', { ascending: false }).limit(50);
  if (error) throw error;

  return (data || []).map((c: any) => ({
    id: c.id,
    title: c.title,
    progress: c.progress,
    iconName: c.icon_name || c.iconName || 'Book',
    estimatedCompletion: c.estimated_completion || c.estimatedCompletion || null,
    nextLesson: c.next_lesson || c.nextLesson || null,
  }));
}

export default function CourseCardsGrid() {
  return (
    <section className="space-y-4 w-full h-full">
      <div className="flex items-center justify-between px-1 mb-4">
        <h2 className="font-display font-medium text-sm text-zinc-300">Active Courses</h2>
        <button className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">View All</button>
      </div>

      {/* Use a streaming Suspense boundary: while `CourseData` awaits, the skeleton shows */}
      <React.Suspense fallback={(
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
          <CourseSkeletonCard />
          <CourseSkeletonCard />
          <CourseSkeletonCard />
          <CourseSkeletonCard />
        </div>
      )}>
        {/* Async child component */}
        <CourseData />
      </React.Suspense>
    </section>
  );
}

async function CourseData() {
  try {
    const courses = await fetchCoursesFromDb();
    return <CourseCardsGridClient courses={courses} />;
  } catch (err: any) {
    // Graceful error UI for server failures
    return (
      <div className="text-red-400 text-sm p-4 bg-black/40 rounded-md">
        Failed to load courses. Please check Supabase configuration.
        <div className="mt-2 text-xs text-zinc-500">{err?.message ?? String(err)}</div>
      </div>
    );
  }
}
  );
