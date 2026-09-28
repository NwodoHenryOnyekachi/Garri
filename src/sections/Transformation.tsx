import { Fragment } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/cn';

const FLOW = ['Cassava', 'Garri', 'Nigerian culture', 'Internet culture', '$GARRI'];

export function Transformation() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const pop = (i: number) => ({
    style: { transitionDelay: `${i * 0.15}s` },
    className: cn('transition duration-500', shown ? 'scale-100 opacity-100' : 'scale-[.7] opacity-0'),
  });
  return (
    <Section alt>
      <SectionHeading eyebrow="THE TRANSFORMATION">FROM CASSAVA TO CULTURE.</SectionHeading>
      <div ref={ref} className="my-6 flex flex-wrap items-center gap-2 font-display text-[clamp(1rem,3.5vw,1.6rem)] font-extrabold">
        {FLOW.map((w, i) => {
          const last = i === FLOW.length - 1;
          const chip = pop(i * 2);
          const arrow = pop(i * 2 + 1);
          return (
            <Fragment key={w}>
              <span style={chip.style} className={cn(chip.className, 'rounded-full px-4 py-2', last ? 'bg-gold text-[#2a1a10]' : 'bg-ink text-bg')}>{w}</span>
              {!last && <i style={arrow.style} className={cn(arrow.className, 'not-italic text-gold')}>→</i>}
            </Fragment>
          );
        })}
      </div>
      <p className="max-w-[62ch]">An everyday Nigerian staple meets internet-native community culture. The food's history belongs to garri; the token only borrows its familiarity for its brand identity. Owning $GARRI has nothing to do with the food's nutritional or financial value.</p>
    </Section>
  );
}
