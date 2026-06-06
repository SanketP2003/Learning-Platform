-- Data Integration (Supabase Setup)
-- Run this in your Supabase SQL Editor to create the tables and seed data

CREATE TABLE public.courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  icon_name text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  estimated_completion text,
  next_lesson text
);

-- Seed Data (3-4 mock rows)
INSERT INTO public.courses (title, progress, icon_name, estimated_completion, next_lesson) VALUES
('Advanced React Patterns', 75, 'Code2', '3 Modules', 'Higher Order Components'),
('Fullstack Supabase', 20, 'Database', '5 Modules', 'Row Level Security'),
('Framer Motion Animations', 90, 'Sparkles', '1 Module', 'Layout Animations'),
('Tailwind CSS Mastery', 10, 'Paintbrush', '8 Modules', 'Grid vs Flexbox');
