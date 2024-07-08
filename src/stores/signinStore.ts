import { create } from 'zustand';

import supabase from '@/utils/supabase';
import { Session, Subscription } from '@supabase/supabase-js';

export type SigninStore = {
  session: Session | null;
  subscription: Subscription | null;
  signInWithKakao: () => void;
  signOut: () => void;
  getSession: () => void;
  connectSubscription: () => void;
  disconnectSubscription: () => void;
};

const signinStore = create<SigninStore>((set, get) => ({
  session: null,
  subscription: null,
  signInWithKakao: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: 'https://qvoiduranowziowofcvl.supabase.co/auth/v1/callback',
      },
    });

    if (error) {
      throw new Error(`Failed: ${error}`);
    } else {
      // 성공시 session 구독
      get().connectSubscription();
    }
  },
  signOut: () => {
    // 로그아웃 시 session 및 subscription 초기화
    set(() => ({ session: null }));
    get().disconnectSubscription();
    supabase.auth.signOut();
  },
  getSession: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    set(() => ({ session }));
  },
  connectSubscription: () => {
    // auth의 상태를 관찰하여 변경 시 실행
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        set(() => ({ session: null, subscription: null }));
      } else if (session) {
        // set(() => ({ session: session }));
        get().getSession();
      }
    });

    set(() => ({ subscription }));
  },
  disconnectSubscription: () => {
    get().subscription?.unsubscribe();
    set(() => ({ subscription: null }));
  },
}));

export default signinStore;
