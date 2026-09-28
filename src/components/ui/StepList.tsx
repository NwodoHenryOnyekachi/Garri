import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { lift } from './Card';
import { cn } from '@/lib/cn';

export interface Step { title: string; body: ReactNode }

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="m-0 grid list-none gap-3.5 p-0">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={(i % 4) * 0.09} className="contents">
          <li className={cn('group relative rounded-[18px] border-2 border-line bg-card py-[18px] pl-[74px] pr-[18px]', lift)}>
            <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-gold font-display text-[1.3rem] font-extrabold text-[#2a1a10] transition-transform duration-[400ms] group-hover:rotate-[360deg] group-hover:scale-110">
              {i + 1}
            </span>
            <h3 className="mb-1 font-display text-[1.15rem] font-bold uppercase leading-none tracking-tight">{s.title}</h3>
            <p className="m-0 text-mute">{s.body}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
