import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export function Cta() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="mb-4 font-display text-[clamp(2.4rem,8vw,5rem)] font-bold leading-none tracking-tight">FROM CASSAVA TO CULTURE.</h2>
        <p className="mx-auto mb-6 max-w-[52ch]">Now you know what $GARRI is about. Explore the story, verify the token, and find the community.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="#token">EXPLORE $GARRI</Button>
          <Button href="#story" variant="outline">READ THE STORY</Button>
        </div>
      </div>
    </Section>
  );
}
