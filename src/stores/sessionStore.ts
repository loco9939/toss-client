import { create } from 'zustand';

import supabase from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';

export type SessionStore = {
  session: Session | null;
  getSession: () => void;
  onAuthStateChange: () => void;
  signInWithKakao: () => void;
  signOut: () => void;
};

const sessionStore = create<SessionStore>(set => ({
  session: null,
  getSession: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    set(() => ({ session }));
  },
  onAuthStateChange: () => {
    supabase.auth.onAuthStateChange((_, session) => {
      set(() => ({ session }));
    });
  },
  signInWithKakao: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${import.meta.env.VITE_BASE_URL}/signin-complete`,
      },
    });

    if (error || !data || !data.url) {
      console.error('Error signing in:', error);
    }
  },
  signOut: async () => {
    await supabase.auth.signOut();
  },
}));

export default sessionStore;
