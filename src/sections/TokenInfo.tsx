import { CONTRACT_ADDRESS, FOMO_URL, NETWORK } from '@/config/site';
import { useCopy } from '@/hooks/useCopy';
import { AddressBox } from '@/components/ui/AddressBox';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Specs } from '@/components/ui/Specs';

export function TokenInfo() {
  const { message, copy } = useCopy(CONTRACT_ADDRESS);
  return (
    <Section id="token">
      <SectionHeading eyebrow="TOKEN INFO">MEET $GARRI</SectionHeading>
      <Card className="max-w-[720px]">
        <Specs rows={[['Token', '$GARRI'], ['Network', `${NETWORK.name} (project-provided)`]]} />
        <div>Contract address</div>
        <AddressBox address={CONTRACT_ADDRESS} />
        <div className="flex flex-wrap gap-3">
          <Button onClick={copy}>Copy address</Button>
          <Button href={FOMO_URL} external variant="outline">Open Fomo.family</Button>
        </div>
        <p role="status" className="min-h-[1.5em] font-bold">{message}</p>
        <p className="m-0 text-[.92rem] text-mute">The address and chain are as supplied by the project and haven't been independently verified here. No explorer link, audit, tokenomics or listing is claimed.</p>
      </Card>
      <h2 className="mb-4 mt-14 font-display text-[clamp(1.8rem,5vw,2.8rem)] font-bold leading-none tracking-tight">THE MARKET CORNER</h2>
      <Card className="max-w-[720px] text-center">
        <CardTitle>MARKET DATA UNAVAILABLE</CardTitle>
        <p className="m-0 text-mute">Live pricing will appear here when a verified market data source is available.</p>
      </Card>
    </Section>
  );
}
