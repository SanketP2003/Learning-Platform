import App from '../App';
import { Suspense } from 'react';
import CourseCardsGridServer from '@/components/CourseCardsGridServer';
import { GridFallback } from '@/components/CourseCardsGridFallback';

export default function Page() {
  return (
    <App
      coursesGrid={
        <Suspense fallback={<GridFallback />}>
          <CourseCardsGridServer />
        </Suspense>
      }
    />
  );
}