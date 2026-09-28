// import type { ReactNode } from 'react';
// import { NETWORK } from '@/config/site';
// import { RABBY_STEPS } from '@/data/content';
// import { Card } from '@/components/ui/Card';
// import { ExternalLink } from '@/components/ui/ExternalLink';
// import { Notice } from '@/components/ui/Notice';
// import { Section } from '@/components/ui/Section';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { Specs } from '@/components/ui/Specs';

// type Step =
//   | string
//   | {
//       title?: ReactNode;
//       body?: ReactNode;
//       text?: ReactNode;
//     };

// function StepList({ steps }: { steps: Step[] }) {
//   return (
//     <ol className="m-0 flex w-full max-w-full min-w-0 list-none flex-col gap-[14px] p-0">
//       {steps.map((step, i) => {
//         const title = typeof step === 'string' ? null : step.title;
//         const body = typeof step === 'string' ? step : (step.body ?? step.text);

//         return (
//           <li
//             key={i}
//             className="grid w-full max-w-full min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-[18px] border-2 border-line p-4 sm:gap-4 sm:p-5"
//           >
//             <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-base font-extrabold text-ink sm:size-10">
//               {i + 1}
//             </span>

//             <div className="min-w-0 max-w-full">
//               {title && (
//                 <h3 className="m-0 mb-1 text-base font-extrabold uppercase leading-6 sm:text-lg">
//                   {title}
//                 </h3>
//               )}
//               <div className="min-w-0 max-w-full whitespace-normal break-words [overflow-wrap:anywhere] text-[.95rem] leading-6 text-mute sm:text-base">
//                 {body}
//               </div>
//             </div>
//           </li>
//         );
//       })}
//     </ol>
//   );
// }

// export function Rabby() {
//   return (
//     <Section id="rabby" className="min-w-0 scroll-mt-24">
//       <SectionHeading eyebrow="NO FOMO ACCOUNT? NO PROBLEM">BUY WITH RABBY WALLET</SectionHeading>
//       <p className="max-w-[62ch] text-pretty text-base leading-7 sm:text-lg">
//         Robinhood Chain is EVM-compatible, so a normal wallet like <ExternalLink href="https://rabby.io">Rabby</ExternalLink> can work once you add the network. Network details below come from public Robinhood Chain guides; double-check them against Robinhood's official docs (docs.robinhood.com/chain) before saving.
//       </p>

//       <Card className="my-4 w-full max-w-[720px] min-w-0 sm:my-[18px]">
//         <div className="min-w-0 overflow-x-auto">
//           <div className="min-w-[560px]">
//             <Specs rows={[['Network name', NETWORK.name], ['Chain ID', NETWORK.chainId], ['RPC URL', NETWORK.rpc], ['Currency', NETWORK.currency], ['Explorer', NETWORK.explorer]]} />
//           </div>
//         </div>
//         <p className="m-0 text-[.9rem] leading-6 text-mute">Testnet (chain ID 46630) is not real money. Don't use it.</p>
//       </Card>

//       <div className="w-full max-w-full min-w-0 [overflow-wrap:anywhere]">
//         <StepList steps={RABBY_STEPS} />
//       </div>

//       <Notice title="Scam check:">Fake tokens copy names and logos. Never click links from strangers, never sign approvals you don't understand, and never share your recovery phrase.</Notice>
//     </Section>
//   );
// }





import type { ReactNode } from 'react';
import { NETWORK } from '@/config/site';
import { RABBY_STEPS } from '@/data/content';
import { Card } from '@/components/ui/Card';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Notice } from '@/components/ui/Notice';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Specs } from '@/components/ui/Specs';

type Step =
  | string
  | {
      title?: ReactNode;
      body?: ReactNode;
      text?: ReactNode;
    };

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="m-0 flex w-full max-w-full min-w-0 list-none flex-col gap-[14px] p-0">
      {steps.map((step, i) => {
        const title = typeof step === 'string' ? null : step.title;
        const body =
          typeof step === 'string' ? step : (step.body ?? step.text);

        return (
          <li
            key={i}
            className="grid w-full max-w-full min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-[18px] border-2 border-line p-4 sm:gap-4 sm:p-5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-base font-extrabold text-ink sm:size-10">
              {i + 1}
            </span>

            <div className="min-w-0 max-w-full">
              {title && (
                <h3 className="m-0 mb-1 text-base font-extrabold uppercase leading-6 sm:text-lg">
                  {title}
                </h3>
              )}

              <div className="min-w-0 max-w-full whitespace-normal break-words [overflow-wrap:anywhere] text-[.95rem] leading-6 text-mute sm:text-base">
                {body}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Rabby() {
  return (
    <Section id="rabby">
      <SectionHeading eyebrow="NO FOMO ACCOUNT? NO PROBLEM">
        BUY WITH RABBY WALLET
      </SectionHeading>

      <p className="max-w-[62ch] text-pretty text-base leading-7 sm:text-lg">
        Robinhood Chain is EVM-compatible, so a normal wallet like{' '}
        <ExternalLink href="https://rabby.io">Rabby</ExternalLink> can work
        once you add the network. Network details below come from public
        Robinhood Chain guides; double-check them against Robinhood's official
        docs (docs.robinhood.com/chain) before saving.
      </p>

      <Card className="my-4 w-full max-w-[720px] min-w-0 sm:my-[18px]">
        <div className="min-w-0 overflow-x-auto">
          <div className="min-w-[560px]">
            <Specs
              rows={[
                ['Network name', NETWORK.name],
                ['Chain ID', NETWORK.chainId],
                ['RPC URL', NETWORK.rpc],
                ['Currency', NETWORK.currency],
                ['Explorer', NETWORK.explorer],
              ]}
            />
          </div>
        </div>

        <p className="m-0 text-[.9rem] leading-6 text-mute">
          Testnet (chain ID 46630) is not real money. Don't use it.
        </p>
      </Card>

      <div className="w-full max-w-full min-w-0 [overflow-wrap:anywhere]">
        <StepList steps={RABBY_STEPS} />
      </div>

      <Notice title="Scam check:">
        Fake tokens copy names and logos. Never click links from strangers,
        never sign approvals you don't understand, and never share your
        recovery phrase.
      </Notice>
    </Section>
  );
}