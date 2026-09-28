import cassava from '@/assets/images/cassava.jpg';
import roasting from '@/assets/images/roasting.jpg';
import { PROCESS } from '@/data/content';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const FIGURES = [
  { src: cassava, alt: 'Cassava plants with harvested roots on red soil', caption: 'Cassava, harvested.' },
  { src: roasting, alt: 'A woman turning freshly roasted garri granules in a large metal tray', caption: 'Roasting the granules.' },
];

export function Story() {
  return (
    <Section id="story" alt>
      <SectionHeading eyebrow="THE GARRI STORY">FIRST THINGS FIRST. WHAT IS GARRI?</SectionHeading>
      <p className="max-w-[62ch]">Garri is made from cassava, a root crop widely grown across Nigeria and other parts of Africa. It's a familiar staple that stores well and can be prepared in several ways. A typical process looks like this (methods vary by region and producer):</p>
      <div className="my-7 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {FIGURES.map((f) => (
          <Reveal key={f.src}>
            <figure className="group m-0 overflow-hidden">
              <img src={f.src} alt={f.alt} loading="lazy" className="w-full rounded-[18px] border-2 border-line transition-transform duration-500 group-hover:scale-[1.04]" />
              <figcaption className="text-[.9rem] text-mute">{f.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <ol className="my-7 grid list-none grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5 p-0">
        {PROCESS.map(([title, text], i) => (
          <Reveal key={title} delay={(i % 4) * 0.09} className="contents">
            <Card as="li" compact>
              <b className="block font-display text-[1.6rem] text-gold">{String(i + 1).padStart(2, '0')}</b>
              {title}
              <small className="block leading-[1.4] text-mute">{text}</small>
            </Card>
          </Reveal>
        ))}
      </ol>
      <h3 className="font-display text-[1.4rem] font-bold leading-none tracking-tight">AND JUST LIKE THAT, CASSAVA BECOMES A NIGERIAN CLASSIC.</h3>
    </Section>
  );
}
