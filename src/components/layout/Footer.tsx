import logo from '@/assets/images/logo.png';
import { CONTRACT_ADDRESS, FOMO_URL } from '@/config/site';
import { AddressBox } from '@/components/ui/AddressBox';
import { Container } from '@/components/ui/Container';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Footer() {
  const link = 'text-gold underline';
  return (
    <footer className="bg-ink pb-8 pt-12 text-[.92rem] text-bg">
      <Container>
        <div className="flex items-center gap-2 font-display text-2xl font-extrabold">
          <img src={logo} alt="$GARRI logo" width={32} height={32} className="rounded-lg [image-rendering:pixelated]" /> $GARRI
        </div>
        <p>Inspired by Nigerian food culture.</p>
        <p>
          <a className={link} href="#story">Story</a> · <a className={link} href="#buy">How to Buy</a> ·{' '}
          <a className={link} href="#token">Token</a> · <a className={link} href="#community">Community</a> ·{' '}
          <span className="text-gold"><ExternalLink href={FOMO_URL}>Fomo.family</ExternalLink></span>
        </p>
        <AddressBox address={CONTRACT_ADDRESS} dark />
        <p className="mt-[18px] opacity-80">$GARRI is a cryptocurrency project inspired by Nigerian food culture. Crypto assets, including meme coins, involve substantial risk and can lose value. Nothing on this website constitutes financial advice or a promise of returns. Verify all token details and transaction information independently before trading. Not affiliated with Robinhood or Fomo.family.</p>
        <p className="mt-[18px] opacity-80">© 2026 $GARRI community.</p>
      </Container>
    </footer>
  );
}
