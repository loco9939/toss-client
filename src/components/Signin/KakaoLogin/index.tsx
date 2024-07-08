import kakao_large from '@/assets/kakao_login_large_wide.png';
import kakao_medium from '@/assets/kakao_login_medium_wide.png';
import useSession from '@/hooks/useSession';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const KakaoLoginButton = styled.img.attrs({
  role: 'login',
})`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoLogin = () => {
  const { registerSession } = useSession();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const handleSignIn = () => {
    registerSession();
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const underBreakPoint = width < 640;
  return (
    <KakaoLoginButton
      onClick={handleSignIn}
      src={underBreakPoint ? kakao_medium : kakao_large}
    />
  );
};

export default KakaoLogin;
