import supabase from './supabase';

async function signInWithKakao() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: 'https://qvoiduranowziowofcvl.supabase.co/auth/v1/callback',
    },
  });

  console.log('====SignInWithKakao: ', data, error);
}

export default signInWithKakao;
