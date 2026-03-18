import React from 'react';

export function ArticleContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate lg:prose-lg">
      {children}
    </div>
  );
}

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {children}
    </div>
  );
}
