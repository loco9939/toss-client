import supabase from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import KakaoLogin from './KakaoLogin';

const Signin = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    // return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
    return <KakaoLogin />;
  } else {
    return <div>Logged in!</div>;
  }
};

export default Signin;
