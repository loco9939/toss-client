import sessionStore from '@/stores/sessionStore';
import { useEffect } from 'react';

const useSession = () => {
  const { onAuthStateChange } = sessionStore();

  useEffect(() => {
    const { subscription } = onAuthStateChange();

    return () => subscription.unsubscribe();
  }, []);
};

export default useSession;
