import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Icon = styled.p`
  margin-bottom: 3.2rem;
  font-size: ${props => props.theme.fontSize.xl};
`;

const Text = styled.p`
  margin-bottom: 0.4rem;
  font-size: ${props => props.theme.fontSize.lg};
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  margin-top: 4.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;
  font-size: ${props => props.theme.fontSize.lg};
  background-color: ${props => props.theme.colors['toss-blue']};
`;

const SigninComplete = () => {
  const navigate = useNavigate();
  const year = dayjs().get('year');

  return (
    <Container>
      <Icon>🥹</Icon>
      <Text>__님 환영합니다 🎉</Text>
      <Text>자산을 등록해주세요!</Text>

      <Button onClick={() => navigate(`/assets?year=${year}`)}>
        자산 등록 하러 가기
      </Button>
    </Container>
  );
};

export default SigninComplete;
