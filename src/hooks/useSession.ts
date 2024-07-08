import signinStore from '@/stores/signinStore';
import { useEffect } from 'react';

const useSession = () => {
  const { user, session, getSession, signInWithKakao, signOut } = signinStore();

  const registerSession = () => {
    signInWithKakao();
  };

  const removeSession = () => {
    signOut();
  };

  useEffect(() => {
    getSession();
  }, []);

  return { session, user, registerSession, removeSession };
};

export default useSession;
