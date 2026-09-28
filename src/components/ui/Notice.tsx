import type { ReactNode } from 'react';

export function Notice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <p className="my-5 rounded-lg border-l-[6px] border-gold bg-card px-[18px] py-3.5">
      <b>{title}</b> {children}
    </p>
  );
}
