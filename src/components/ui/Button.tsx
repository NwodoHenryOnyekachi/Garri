import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, href, external, variant = 'solid', onClick, className }: Props) {
  const cls = cn(
    'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border-2 border-ink px-6 py-3.5 font-body text-base font-bold no-underline transition',
    'hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--ink)] active:translate-y-px active:shadow-none',
    variant === 'solid' ? 'bg-gold text-[#2a1a10]' : 'bg-transparent text-ink',
    className,
  );
  return href ? (
    <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{children}</a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>{children}</button>
  );
}
