import { useEffect, useRef, useState } from 'react';

const skipAnimation = () =>
  !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Flips `shown` to true once the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(skipAnimation);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return { ref, shown };
}
