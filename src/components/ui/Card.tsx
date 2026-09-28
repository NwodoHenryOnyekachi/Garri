import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export const lift =
  'transition hover:-translate-y-[5px] hover:border-gold hover:shadow-[0_10px_0_var(--line)]';

interface Props { children: ReactNode; as?: 'div' | 'li'; compact?: boolean; className?: string }

export function Card({ children, as: Tag = 'div', compact, className }: Props) {
  return (
    <Tag className={cn('h-full overflow-hidden rounded-[20px] border-2 border-line bg-card', compact ? 'p-4' : 'p-[22px]', lift, className)}>
      {children}
    </Tag>
  );
}

export const CardTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-2 font-display text-[1.4rem] font-bold leading-none tracking-tight">{children}</h3>
);
