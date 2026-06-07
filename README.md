# Next-Gen Learning Dashboard

This project is a high-fidelity prototype of a "Student Dashboard" built for a frontend intern challenge. It features a futuristic, highly animated educational platform designed with a "new edge" aesthetic. The focus is on hardware-accelerated animations, zero layout shifts, and a buttery-smooth user experience powered by efficient, server-rendered data.

## 🚀 Key Features

*   **Bento Grid Layout**: A modern, responsive grid system splitting the UI into a slim side navigation and a dynamic main content area.
*   **Server-Side Rendering (RSC)**: Live course data is fetched securely from Supabase using Next.js Server Components, ensuring optimal performance and SEO.
*   **Advanced Animations**: Powered by Framer Motion, the application features staggered entrance animations, spring-physics hover states, and smooth layout transitions without triggering browser repaints.
*   **"Dark Mode Only" Theme**: Deep background tones (near-blacks and dark grays) accented by subtle, glowing gradients to match the futuristic design requirements.
*   **Robust Authentication Flow**: Implemented a comprehensive landing page and login/registration experience with local session persistence.
*   **Interactive UI/UX**: Includes an activity heatmap, daily goals tracking, animated progress bars, and a fully functional settings/profile view.

## 🏗️ Architecture & Component Structure

The application is built using the **Next.js App Router** (`src/app`) to enforce a clean separation between Server and Client boundaries.

### Server vs. Client Components Split

*   **Server Components (`src/components/*Server.tsx`, `src/app/page.tsx`)**:
    *   Used exclusively for fetching data from the Supabase PostgreSQL database.
    *   By fetching data on the server, we keep database credentials secure and reduce the JavaScript bundle size sent to the browser.
    *   `<Suspense>` boundaries are utilized to stream in these components, displaying skeleton loaders (`CourseCardsGridFallback`) while data is being resolved.
*   **Client Components (`src/App.tsx`, `src/views/*`, `src/components/*Client.tsx`)**:
    *   Marked with `"use client"`.
    *   Responsible for managing state (e.g., active tabs, authentication status), handling user interactions, and orchestrating Framer Motion animations.
    *   The core layout (`App.tsx`) acts as the client-side orchestrator, while server components are passed down as `children` or props to maintain the RSC architecture without breaking interactivity.

## 🛠️ Tech Stack

*   **Framework:** Next.js 15+ (App Router)
*   **Language:** TypeScript
*   **Database/BaaS:** Supabase (PostgreSQL)
*   **Styling:** Tailwind CSS v4
*   **Animations:** Framer Motion
*   **Icons:** Lucide React

## 🚦 Prerequisites

Before running the application, ensure you have the following installed:
*   Node.js (v18 or higher)
*   npm or yarn
*   A Supabase account and project

## ⚙️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd "Learning Dashboard"
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Database Setup (Supabase)**
    *   Create a new project in Supabase.
    *   Open the SQL Editor in your Supabase dashboard and run the following script to create the `courses` table and insert seed data:
      ```sql
      CREATE TABLE public.courses (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        progress INTEGER NOT NULL,
        icon_name TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );

      ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

      CREATE POLICY "Public courses are viewable by everyone."
      ON public.courses FOR SELECT USING ( true );

      INSERT INTO public.courses (title, progress, icon_name)
      VALUES
        ('Advanced React Patterns', 75, 'BookOpen'),
        ('Next.js Server Components', 50, 'Compass'),
        ('Framer Motion for Beginners', 90, 'Trophy'),
        ('Tailwind CSS Best Practices', 25, 'Paintbrush');
      ```

4.  **Environment Variables**
    *   Copy the `.env.example` file to create a `.env.local` file:
      ```bash
      cp .env.example .env.local
      ```
    *   Update `.env.local` with your Supabase Project URL and Anon/Publishable Key (found in Supabase > Project Settings > API).

5.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## 🌐 Deployment (Vercel)

This application is optimized for Vercel deployment.
1. Push your code to a GitHub repository.
2. Log in to Vercel and click "Add New Project".
3. Import your GitHub repository.
4. **Crucial:** In the "Environment Variables" section before deploying, add:
   * `NEXT_PUBLIC_SUPABASE_URL`
   * `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click "Deploy". Vercel will automatically detect Next.js and build the project.