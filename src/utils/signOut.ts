import supabase from './supabase';

async function signOut() {
  const { error } = await supabase.auth.signOut();

  console.log('====logout Error: ', error);
}

export default signOut;
