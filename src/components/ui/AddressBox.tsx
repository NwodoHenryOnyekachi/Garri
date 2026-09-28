import { cn } from '@/lib/cn';

export function AddressBox({ address, dark }: { address: string; dark?: boolean }) {
  return (
    <div className={cn('my-2.5 break-all rounded-xl border-2 border-dashed p-3.5 font-mono',
      dark ? 'border-[#5a4028] bg-[#3a291b] text-[#f7ead2]' : 'border-line bg-bg2')}>
      {address}
    </div>
  );
}
