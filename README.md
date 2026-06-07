# Next-Gen Learning Dashboard

This is a high-fidelity prototype of a "Student Dashboard" built for a frontend intern challenge. The application is built with Next.js (App Router), Supabase, Tailwind CSS, and Framer Motion.

## Architectural Choices

*   **Framework:** Next.js App Router was used to leverage React Server Components (RSC) for data fetching and to enable a clear separation between server and client logic.
*   **Styling:** Tailwind CSS was chosen for its utility-first approach, allowing for rapid and consistent styling.
*   **Animations:** Framer Motion was used for all animations to ensure a smooth, hardware-accelerated user experience.

## Server/Client Component Split

*   **Server Components:** The main data-fetching components (e.g., for course data) are implemented as Server Components to fetch data directly from Supabase on the server.
*   **Client Components:** Components that require state or user interaction (e.g., the theme switcher, sidebar) are implemented as Client Components.

## Challenges Faced

*   **Data Fetching:** One of the main challenges was implementing secure and efficient data fetching from Supabase using Server Components.
*   **Animations:** Creating performant and visually appealing animations with Framer Motion required careful planning and implementation.

## How to Run Locally

1.  Clone the repository.
2.  Install dependencies with `npm install`.
3.  Create a `.env.local` file and add your Supabase and Google AI API keys (see `.env.example`).
4.  Run the development server with `npm run dev`.