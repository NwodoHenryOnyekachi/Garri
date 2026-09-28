import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <Reveal className="mb-4">
      <div className="mb-3 text-[.78rem] font-bold tracking-[.14em] text-green">{eyebrow}</div>
      <h2 className="font-display text-[clamp(2rem,6vw,3.6rem)] font-bold leading-none tracking-tight">{children}</h2>
    </Reveal>
  );
}
