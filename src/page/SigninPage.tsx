import Signin from '@/components/Signin';
import sessionStore from '@/stores/sessionStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();
  const session = sessionStore(state => state.session);

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, []);

  return <Signin />;
};

export default SigninPage;
