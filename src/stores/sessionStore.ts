import { create } from 'zustand';

import supabase from '@/utils/supabase';
import { AuthError, Session, Subscription, User } from '@supabase/supabase-js';
import { persist } from 'zustand/middleware';

export type SessionStore = {
  session: Session | null;
  getUser: () => Promise<{ user: User | null; error: AuthError | null }>;
  onAuthStateChange: () => { subscription: Subscription };
  signInWithKakao: () => void;
  signOut: () => void;
};

const sessionStore = create(
  persist<SessionStore>(
    set => ({
      session: null,
      getUser: async () => {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error || !user) {
          console.error('Error fetching user:', error);
          return { user, error };
        }

        return { user, error };
      },
      onAuthStateChange: () => {
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_, session) => {
          set(() => ({ session }));
        });

        return { subscription };
      },
      signInWithKakao: async () => {
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithOAuth({
            provider: 'kakao',
            options: {
              redirectTo: `${import.meta.env.VITE_BASE_URL}/signin-complete`,
            },
          });

        if (signInError || !signInData || !signInData.url) {
          console.error('Error signing in:', signInError);
        }
      },
      signOut: async () => {
        await supabase.auth.signOut();
        set(() => ({ session: null }));
      },
    }),
    {
      name: 'session',
      // storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default sessionStore;
