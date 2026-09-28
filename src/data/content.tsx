import type { ReactNode } from 'react';
import cold from '@/assets/images/garri-cold-water.jpg';
import eba from '@/assets/images/eba.jpg';
import everyday from '@/assets/images/everyday-life.jpg';
import { CONTRACT_ADDRESS, FOMO_URL, shortAddress } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';
import type { Step } from '@/components/ui/StepList';

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'The Story' },
  { href: '#buy', label: 'How to Buy' },
  { href: '#token', label: 'Token Info' },
  { href: '#community', label: 'Community' },
];

export const PROCESS = [
  ['Cassava', 'Harvested, then peeled and washed.'],
  ['Grated', 'Turned into a wet mash.'],
  ['Fermented', 'The mash is left to ferment.'],
  ['Pressed', 'Excess liquid is pressed out.'],
  ['Sieved', 'Broken into smaller particles.'],
  ['Roasted', 'Granules are roasted until dry.'],
  ['Garri', 'Ready to store and prepare.'],
];

export const CULTURE = [
  { img: cold, alt: 'Garri in a bowl with groundnuts, sugar and evaporated milk being poured in', title: '🥛 Garri & cold water', text: 'Soaked garri with cold water, often with sugar, milk and groundnuts. The snack.' },
  { img: eba, alt: 'A smooth yellow ball of Eba beside a bowl of egusi soup', title: '🍲 Garri & Eba', text: 'Add hot water and it becomes Eba, commonly eaten with soups like egusi, okra, vegetable and ogbono. The swallow.' },
  { img: everyday, alt: 'A man sitting on a couch eating from a plate, with groundnuts and a bottle of water on the table', title: '🏠 Everyday life', text: 'Familiar, versatile and accessible: homes, markets, student hostels. Some things need no introduction.' },
];

export const BUY_STEPS: Step[] = [
  { title: 'Start here', body: <>Visit <ExternalLink href={FOMO_URL}>Fomo.family</ExternalLink>, sign in or create an account if required. Web and mobile may differ, and features vary by region.</> },
  { title: 'Get your funds ready', body: 'Check which funding methods you\'re offered. If depositing crypto, confirm the supported asset, correct network, receiving address, minimums and fees before sending. Never use an address from an unofficial source.' },
  { title: 'Find the real $GARRI', body: `Search $GARRI, then compare the full contract address with ${shortAddress(CONTRACT_ADDRESS)} above. A ticker or logo alone isn't proof. No match? Wait for a verified route.` },
  { title: 'Check before you buy', body: 'Verify contract, network, asset or pair, quote, amount, fees and price impact. If the contract can\'t be verified, stop.' },
  { title: 'Choose your amount', body: 'Enter what you\'re willing to lose. Review estimated tokens received, fees and slippage. Nothing is guaranteed, including price or execution.' },
  { title: 'Review. Then confirm.', body: 'Check every detail in the platform\'s own confirmation step. Never share seed phrases, private keys or passwords.' },
  { title: 'Check your transaction', body: 'Look at your portfolio or history in the app. Balances can take time to update; don\'t assume success until confirmed.' },
  { title: 'Join the community', body: 'Visit official channels once they\'re published below.' },
];

export const RABBY_STEPS: Step[] = [
  { title: 'Install Rabby', body: 'Get it only from rabby.io or your browser\'s official extension store. Create a wallet.' },
  { title: 'Save your recovery phrase offline', body: 'Write it on paper. Never screenshot it, never share it, never type it into a website. Nobody legitimate will ask for it.' },
  { title: 'Add Robinhood Chain', body: 'In Rabby, use the custom network option and enter the five fields above exactly. If the chain ID isn\'t 4663, stop and re-check.' },
  { title: 'Get ETH on Robinhood Chain', body: 'ETH is the gas token and usually what you swap from. Move ETH over using a bridge listed in Robinhood\'s official docs, or withdraw to your Rabby address from an exchange that supports the network. Send a small test amount first.' },
  { title: 'Open a DEX that supports Robinhood Chain', body: 'Get the link from a source you trust, not from a random DM or comment. We haven\'t verified which DEX lists $GARRI. Connect Rabby and confirm the chain says Robinhood Chain.' },
  { title: 'Paste the contract address', body: <>Paste {CONTRACT_ADDRESS} (copy it <a href="#token" className="underline">above</a>) into the token search. Match every character. If nothing appears, don't pick a lookalike.</> },
  { title: 'Enter amount, check the quote', body: 'Review tokens you\'d receive, fees and price impact. Meme coins can be thinly traded, so set slippage carefully and start small.' },
  { title: 'Confirm in Rabby', body: 'Rabby shows a preview of the transaction. Read it, then sign. You may need to approve the token first, then swap. Only approve the amount you need.' },
  { title: 'Check it landed', body: 'Open your Rabby history or the Blockscout explorer and search your wallet address. If $GARRI doesn\'t show in your balance, add it as a custom token using the contract address.' },
];

export const FAQ: [string, ReactNode][] = [
  ['What is $GARRI?', 'A community/meme coin whose branding is inspired by Nigerian food culture. It carries no promised utility or returns.'],
  ['What is garri?', 'A cassava-based staple, common in Nigeria and elsewhere in Africa, eaten soaked or made into Eba.'],
  ['Which blockchain is $GARRI on?', 'Robinhood Chain, per the project. We haven\'t independently confirmed it.'],
  ['What is the contract address?', `${CONTRACT_ADDRESS}. Copy it from the Token Info section.`],
  ['How can I buy $GARRI? Can I on Fomo.family?', 'Fomo.family is the featured platform, but this specific token\'s availability there is unverified. Follow the walkthrough and confirm the contract matches.'],
  ['How do I verify the correct token?', 'Compare the full contract address character by character, and confirm the network. Never rely on name, logo or ticker.'],
  ['Where can I view the price? Why might data be unavailable?', 'No verified market source is connected. A token may simply not be indexed by a data provider yet.'],
  ['Is $GARRI a risk-free investment?', 'No. Meme coins can be extremely volatile, and you may lose some or all of what you spend. This is not financial advice.'],
];
