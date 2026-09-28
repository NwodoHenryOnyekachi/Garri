import { FAQ } from '@/data/content';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Faq() {
  return (
    <Section alt>
      <SectionHeading eyebrow="FAQ">QUESTIONS? NO SHAKING.</SectionHeading>
      {FAQ.map(([q, a]) => (
        <details key={q} className="mb-2.5 rounded-[14px] border-2 border-line bg-card">
          <summary className="min-h-11 cursor-pointer px-[18px] py-4 font-bold">{q}</summary>
          <p className="m-0 animate-[up_.35s_both] px-[18px] pb-4 text-mute">{a}</p>
        </details>
      ))}
    </Section>
  );
}
