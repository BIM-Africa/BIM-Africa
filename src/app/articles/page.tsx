'use client';
import { Suspense } from 'react';
import ArticlesPage from "../../app/articles/ArticlesPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading article...</div>}>
      <ArticlesPage />
    </Suspense>
  );
}