import Tossfolio from '@/assets/Tossfolio.png';
import useInnerWidth from '@/hooks/useInnerWidth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  text-align: center;
`;

const Logo = styled.img.attrs({
  src: Tossfolio,
  alt: 'tossfolio logo',
})<{ $underBreakPoint: boolean }>`
  width: ${props => (props.$underBreakPoint ? '12rem' : '32rem')};
  margin-inline: auto;
  cursor: pointer;
`;

const Signin = () => {
  const navigate = useNavigate();
  const { width } = useInnerWidth();

  const goLanding = () => {
    navigate('/landing');
  };

  const $underBreakPoint = width < 640;
  return (
    <Container>
      <Logo onClick={goLanding} $underBreakPoint={$underBreakPoint} />
      <div>
        <KakaoLogin $underBreakPoint={$underBreakPoint} />
      </div>
    </Container>
  );
};

export default Signin;
