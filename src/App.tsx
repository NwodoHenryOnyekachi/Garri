import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Marquee } from '@/components/ui/Marquee';
import { Community } from '@/sections/Community';
import { Culture } from '@/sections/Culture';
import { Cta } from '@/sections/Cta';
import { Faq } from '@/sections/Faq';
import { Hero } from '@/sections/Hero';
import { HowToBuy } from '@/sections/HowToBuy';
import { Rabby } from '@/sections/Rabby';
import { Story } from '@/sections/Story';
import { TokenInfo } from '@/sections/TokenInfo';
import { Transformation } from '@/sections/Transformation';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Culture />
        <Transformation />
        <TokenInfo />
        <HowToBuy />
        <Rabby />
        <Community />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
