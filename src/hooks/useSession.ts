import signinStore from '@/stores/signinStore';
import { useEffect } from 'react';

const useSession = () => {
  const { session, getSession, signInWithKakao, signOut } = signinStore();

  const registerSession = () => {
    signInWithKakao();
  };

  const removeSession = () => {
    signOut();
  };

  useEffect(() => {
    getSession();
  }, []);

  return { session, registerSession, removeSession };
};

export default useSession;
