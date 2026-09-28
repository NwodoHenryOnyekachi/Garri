export const CONTRACT_ADDRESS = '0xdddf7ab756c35b4d0537825497e6932780710241';
export const FOMO_URL = 'https://fomo.family/';
export const shortAddress = (a: string) => `${a.slice(0, 10)}…${a.slice(-6)}`;

export const NETWORK = {
  name: 'Robinhood Chain',
  chainId: '4663',
  rpc: 'https://rpc.mainnet.chain.robinhood.com',
  currency: 'ETH',
  explorer: 'https://robinhoodchain.blockscout.com',
} as const;

/** Add verified official channels here, e.g. { label: 'X', href: 'https://x.com/...' } */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];
