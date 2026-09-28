import { useState } from 'react';

export function useCopy(text: string) {
  const [message, setMessage] = useState('');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('✓ Copied full address');
    } catch {
      setMessage('✗ Copy failed. Select the address manually.');
    }
    setTimeout(() => setMessage(''), 3500);
  };
  return { message, copy };
}
