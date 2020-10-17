import { useEffect, useState } from 'react';

export default function useOnline(): boolean {
  // TODO: Default value.
  const [isOnline, setIsOnline] = useState(true);

  useEffect((): (() => void) => {
    const handleOffline = (): void => {
      setIsOnline(false);
    };
    const handleOnline = (): void => {
      setIsOnline(true);
    };
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return (): void => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return isOnline;
}
