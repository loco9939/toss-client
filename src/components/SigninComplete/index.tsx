import sessionStore from '@/stores/sessionStore';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    transform:translateY(50%);
    opacity: 0;
  }

  to {
    transform:translateY(0);
    opacity: 1;
  }
`;

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Icon = styled.p`
  margin-bottom: 3.2rem;
  font-size: 6rem;

  animation: ${fadeUp} 0.3s ease-in;
`;

const Text = styled.p`
  margin-bottom: 0.4rem;
  line-height: 1.2;
  font-size: ${props => props.theme.fontSize.lg};
  animation: ${fadeUp} 0.5s ease-in;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  opacity: 0;

  span {
    font-size: 2.8rem;
    font-weight: 700;
  }
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  margin-top: 4.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;
  font-size: ${props => props.theme.fontSize.lg};
  background-color: ${props => props.theme.colors['toss-blue']};

  &:hover {
    opacity: 0.8;
  }
`;

const SigninComplete = () => {
  const navigate = useNavigate();
  const year = dayjs().get('year');

  const session = sessionStore(state => state.session);

  return (
    <Container>
      <Icon>🎉</Icon>
      <Text>
        <span>{session?.user?.user_metadata?.user_name ?? '회원'}</span>님
        환영합니다!
      </Text>
      <Text>자산을 등록 해주세요!</Text>

      <Button onClick={() => navigate(`/assets?year=${year}`)}>
        자산 등록 하러 가기
      </Button>
    </Container>
  );
};

export default SigninComplete;
