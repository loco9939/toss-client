import { create } from 'zustand';

import supabase from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { persist } from 'zustand/middleware';

export type SessionStore = {
  session: Session | null;
  getSession: () => void;
  onAuthStateChange: () => void;
  signInWithKakao: () => void;
  signOut: () => void;
};

const sessionStore = create(
  persist<SessionStore>(
    set => ({
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
        // TODO: asset 데이터 있으면 홈으로, 없으면 signin-complete로
        // const { data } = await supabase
        //   .from('assets')
        //   .select()
        //   .returns<Record<string, string | number>[]>();

        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithOAuth({
            provider: 'kakao',
            options: {
              redirectTo:
                // : data
                //   ? '/'
                `${import.meta.env.VITE_BASE_URL}/signin-complete`,
            },
          });

        if (signInError || !signInData || !signInData.url) {
          console.error('Error signing in:', signInError);
        }
      },
      signOut: async () => {
        await supabase.auth.signOut();
      },
    }),
    {
      name: 'session',
      // storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default sessionStore;
