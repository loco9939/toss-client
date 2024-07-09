import kakao_large from '@/assets/kakao_login_large_wide.png';
import kakao_medium from '@/assets/kakao_login_medium_wide.png';
import sessionStore from '@/stores/sessionStore';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

type KakaoLoginProps = {
  $underBreakPoint?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const KakaoLoginButton = styled.img.attrs({
  role: 'login',
})`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const KakaoLogin = ({ $underBreakPoint }: KakaoLoginProps) => {
  const signInWithKakao = sessionStore(state => state.signInWithKakao);

  const handleSignIn = () => {
    signInWithKakao();
  };

  return (
    <KakaoLoginButton
      onClick={handleSignIn}
      src={$underBreakPoint ? kakao_medium : kakao_large}
    />
  );
};

export default KakaoLogin;
