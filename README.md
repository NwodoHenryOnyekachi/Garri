# $GARRI website

React + TypeScript + Tailwind CSS (Vite).

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Where to edit
- `src/config/site.ts` – contract address, chain, Fomo URL, network details, **social links**
- `src/data/content.tsx` – nav, buy steps, Rabby steps, FAQ, culture cards
- `src/sections/` – one file per page section
- `src/components/` – layout (Navbar, Footer) and reusable UI (Button, Card, Reveal…)
- `tailwind.config.ts` / `src/index.css` – colours, fonts, animations, light/dark theme

Note: contract address, chain and Fomo.family availability are project-provided and not independently verified.
