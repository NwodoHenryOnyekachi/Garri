import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', bg2: 'var(--bg2)', ink: 'var(--ink)', mute: 'var(--mute)',
        gold: 'var(--gold)', green: 'var(--green)', card: 'var(--card)', line: 'var(--line)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Impact', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: { '50%': { transform: 'translateY(-8px)' } },
        up: { from: { opacity: '0', transform: 'translateY(24px)' } },
        pop: { from: { opacity: '0', transform: 'scale(.6) rotate(-8deg)' } },
        wiggle: {
          '0%,90%,100%': { transform: 'none' },
          '94%': { transform: 'rotate(-3deg) scale(1.05)' },
          '97%': { transform: 'rotate(3deg) scale(1.05)' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        up: 'up .8s cubic-bezier(.2,.7,.2,1) both',
        bowl: 'pop 1s .2s cubic-bezier(.3,1.5,.5,1) both, float 5s 1.2s ease-in-out infinite',
        wiggle: 'wiggle 3s 1.2s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
} satisfies Config;
