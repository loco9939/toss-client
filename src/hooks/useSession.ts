import sessionStore from '@/stores/sessionStore';
import { useEffect } from 'react';

const useSession = () => {
  const { getSession, onAuthStateChange } = sessionStore();

  useEffect(() => {
    getSession();

    onAuthStateChange();
  }, []);
};

export default useSession;
