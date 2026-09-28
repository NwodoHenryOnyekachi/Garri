import { useState } from 'react';
import logo from '@/assets/images/logo.png';
import { NAV_LINKS } from '@/data/content';
import { FOMO_URL } from '@/config/site';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrolled, progress } = useScroll();

  return (
    <>
      <div className="fixed left-0 top-0 z-20 h-1 bg-gold" style={{ width: `${progress}%` }} />
      <nav aria-label="Main" className={cn('sticky top-0 z-10 border-b-2 border-line bg-bg transition-shadow', scrolled && 'shadow-[0_6px_0_var(--line)]')}>
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display text-2xl font-extrabold no-underline">
            <img src={logo} alt="$GARRI logo" width={32} height={32} className="rounded-lg [image-rendering:pixelated]" /> $GARRI
          </a>
          <button
            aria-label="Toggle menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}
            className="hidden size-11 cursor-pointer rounded-[10px] border-2 border-ink bg-transparent text-[1.3rem] text-ink max-[820px]:block"
          >☰</button>
          <div
            id="links" onClick={(e) => (e.target as HTMLElement).tagName === 'A' && setOpen(false)}
            className={cn('flex items-center gap-[22px]',
              'max-[820px]:absolute max-[820px]:inset-x-0 max-[820px]:top-full max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-0 max-[820px]:border-b-2 max-[820px]:border-line max-[820px]:bg-bg max-[820px]:px-5 max-[820px]:pb-6 max-[820px]:pt-4',
              !open && 'max-[820px]:hidden')}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-medium no-underline hover:text-green max-[820px]:py-2.5">{l.label}</a>
            ))}
            <Button href={FOMO_URL} external>Buy $GARRI</Button>
          </div>
        </Container>
      </nav>
    </>
  );
}
