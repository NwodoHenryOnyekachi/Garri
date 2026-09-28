import { CULTURE } from '@/data/content';
import { Card, CardTitle } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Culture() {
  return (
    <Section id="culture">
      <SectionHeading eyebrow="THE SNACK. THE SWALLOW. THE CULTURE.">IF YOU KNOW, YOU KNOW.</SectionHeading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {CULTURE.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.09}>
            <Card className="group">
              <img src={c.img} alt={c.alt} loading="lazy" className="mb-3 h-[200px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <CardTitle>{c.title}</CardTitle>
              <p className="m-0 text-mute">{c.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
