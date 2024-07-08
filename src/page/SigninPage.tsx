import Signin from '@/components/Signin';
import useSession from '@/hooks/useSession';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();
  const { session } = useSession();

  if (session) {
    navigate('/');
  }

  return <Signin />;
};

export default SigninPage;
