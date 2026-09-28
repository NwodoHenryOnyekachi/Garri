import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn('transition duration-700 ease-out', shown ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0', className)}
    >
      {children}
    </div>
  );
}
