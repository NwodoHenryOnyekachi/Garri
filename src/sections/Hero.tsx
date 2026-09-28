import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  const delay = (s: number) => ({ animationDelay: `${s}s` });
  return (
    <section id="home">
      <Container className="grid grid-cols-1 items-center gap-8 py-14 min-[821px]:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-3 animate-up text-[.78rem] font-bold tracking-[.14em] text-green">NIGERIAN CULTURE. INTERNET ENERGY.</div>
          <h1 style={delay(0.12)} className="animate-up font-display text-[clamp(3rem,11vw,6.5rem)] font-bold uppercase leading-none tracking-tight">
            WTF is <span className="inline-block animate-wiggle text-gold">$GARRI?</span>
          </h1>
          <p style={delay(0.25)} className="my-4 mb-[1.6rem] max-w-[32ch] animate-up text-[1.25rem] text-mute">Before it was a ticker, it was the food that got us through.</p>
          <div style={delay(0.38)} className="flex animate-up flex-wrap gap-3">
            <Button href="#token">GET $GARRI</Button>
            <Button href="#story" variant="outline">THE GARRI STORY</Button>
          </div>
        </div>
        <img src={logo} alt="$GARRI logo: a wooden stand heaped with garri" width={420} height={420}
          className="mx-auto aspect-square w-full max-w-[420px] animate-bowl rounded-[28px] border-4 border-ink [image-rendering:pixelated]" />
      </Container>
    </section>
  );
}
