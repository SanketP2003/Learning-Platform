import { NextResponse } from 'next/server';
import { hasServerSupabaseConfig, supabaseServer } from '@/lib/supabaseServer';
import { mockCourses } from '@/data/mock';

export async function GET() {
  if (!hasServerSupabaseConfig || !supabaseServer) {
    return NextResponse.json({ courses: mockCourses });
  }

  const { data, error } = await supabaseServer
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ courses: mockCourses });
  }

  const courses = (data || []).map((course: any) => ({
    id: course.id,
    title: course.title,
    progress: course.progress,
    iconName: course.icon_name || course.iconName || 'Book',
    estimatedCompletion: course.estimated_completion || course.estimatedCompletion || null,
    nextLesson: course.next_lesson || course.nextLesson || null,
  }));

  return NextResponse.json({ courses });
}