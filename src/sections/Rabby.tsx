import { NETWORK } from '@/config/site';
import { RABBY_STEPS } from '@/data/content';
import { Card } from '@/components/ui/Card';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Notice } from '@/components/ui/Notice';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Specs } from '@/components/ui/Specs';
import { StepList } from '@/components/ui/StepList';

export function Rabby() {
  return (
    <Section id="rabby">
      <SectionHeading eyebrow="NO FOMO ACCOUNT? NO PROBLEM">BUY WITH RABBY WALLET</SectionHeading>
      <p className="max-w-[62ch]">
        Robinhood Chain is EVM-compatible, so a normal wallet like <ExternalLink href="https://rabby.io">Rabby</ExternalLink> can work once you add the network. Network details below come from public Robinhood Chain guides; double-check them against Robinhood's official docs (docs.robinhood.com/chain) before saving.
      </p>
      <Card className="my-[18px] max-w-[720px]">
        <Specs rows={[['Network name', NETWORK.name], ['Chain ID', NETWORK.chainId], ['RPC URL', NETWORK.rpc], ['Currency', NETWORK.currency], ['Explorer', NETWORK.explorer]]} />
        <p className="m-0 text-[.9rem] text-mute">Testnet (chain ID 46630) is not real money. Don't use it.</p>
      </Card>
      <StepList steps={RABBY_STEPS} />
      <Notice title="Scam check:">Fake tokens copy names and logos. Never click links from strangers, never sign approvals you don't understand, and never share your recovery phrase.</Notice>
    </Section>
  );
}
