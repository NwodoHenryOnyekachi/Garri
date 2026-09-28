import type { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/lib/cn';

export function Section({ id, alt, children }: { id?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={cn('py-[72px]', alt && 'bg-bg2')}>
      <Container>{children}</Container>
    </section>
  );
}
