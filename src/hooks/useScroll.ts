import { useEffect, useState } from 'react';

export function useScroll() {
  const [state, setState] = useState({ scrolled: false, progress: 0 });
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setState({ scrolled: scrollY > 10, progress: max > 0 ? (scrollY / max) * 100 : 0 });
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);
  return state;
}
