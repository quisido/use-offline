import { useEffect, useState } from 'react';

export default function useOffline(): boolean {
  // TODO: Default value.
  const [isOffline, setIsOffline] = useState(true);

  useEffect((): (() => void) => {
    const handleOffline = (): void => {
      setIsOffline(true);
    };
    const handleOnline = (): void => {
      setIsOffline(false);
    };
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return (): void => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return isOffline;
}
