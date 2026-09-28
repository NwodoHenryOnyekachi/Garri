import { FOMO_URL } from '@/config/site';
import { BUY_STEPS } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Notice } from '@/components/ui/Notice';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepList } from '@/components/ui/StepList';

export function HowToBuy() {
  return (
    <Section id="buy" alt>
      <SectionHeading eyebrow="HOW TO BUY">GET $GARRI ON FOMO.FAMILY</SectionHeading>
      <Notice title="Heads up:">we haven't verified that $GARRI is currently listed or tradable on Fomo.family. Steps are general; follow the platform's real interface, and if the token isn't there, don't buy a lookalike.</Notice>
      <StepList steps={BUY_STEPS} />
      <Notice title="Crypto assets are volatile.">Verify the token contract and transaction details before trading. Never share your private keys or recovery phrase.</Notice>
      <div className="flex flex-wrap gap-3">
        <Button href={FOMO_URL} external>OPEN FOMO.FAMILY</Button>
        <Button href="#rabby" variant="outline">USE RABBY WALLET INSTEAD</Button>
      </div>
    </Section>
  );
}
