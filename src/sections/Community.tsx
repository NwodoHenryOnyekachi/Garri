import { SOCIAL_LINKS } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Community() {
  return (
    <Section id="community">
      <SectionHeading eyebrow="COMMUNITY">THE PEOPLE MAKE THE CULTURE.</SectionHeading>
      <p className="max-w-[56ch]">Garri has always brought people together. $GARRI brings that spirit into internet culture.</p>
      {SOCIAL_LINKS.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((l) => <Button key={l.href} href={l.href} external>{l.label}</Button>)}
        </div>
      ) : (
        <Card className="mt-6 max-w-[560px]">
          <CardTitle>Official channels: coming soon</CardTitle>
          <p className="m-0 text-mute">No verified X, Telegram or Discord links have been supplied yet, so none are shown. Add them to SOCIAL_LINKS in src/config/site.ts when confirmed.</p>
        </Card>
      )}
    </Section>
  );
}
