'use client';
import { Suspense } from 'react';
import ArticlePage from '../ArticlesPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading article...</div>}>
      <ArticlePage />
    </Suspense>
  );
}
