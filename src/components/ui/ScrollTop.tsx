import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-5 right-5 z-30 grid size-11 cursor-pointer place-items-center rounded-[10px] border-2 border-ink bg-gold text-xl text-ink shadow-[3px_3px_0_var(--line)] transition-all duration-200 hover:-translate-y-0.5',
        'max-[820px]:bottom-[calc(1.25rem+env(safe-area-inset-bottom))]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      ↑
    </button>
  );
}