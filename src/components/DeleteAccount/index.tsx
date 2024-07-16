import sessionStore from '@/stores/sessionStore';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  font-size: ${props => props.theme.fontSize.xl};
`;

const Description = styled.p`
  line-height: 1.2;
  margin-block: 2rem;
  color: ${props => props.theme.colors['text-secondary']};

  span {
    text-decoration: underline;
    color: ${props => props.theme.colors['toss-red']};
  }
`;

const CancelBtn = styled.button`
  padding: 1rem;
  margin-right: 3rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors['toss-blue']};

  &:hover {
    opacity: 0.8;
  }
`;

const DeleteBtn = styled.button`
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors['gray-700']};

  &:hover {
    opacity: 0.8;
  }
`;

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { session, deleteUser, signOut } = sessionStore();
  const user_id = session?.user?.id;

  const goHome = () => {
    navigate('/');
  };

  const resignUser = () => {
    const answer = confirm('정말로 탈퇴하시겠습니까?');
    if (answer) {
      signOut();
      deleteUser({ user_id });
      navigate('/landing');
    }
  };

  return (
    <Container>
      <Title>회원을 탈퇴하시겠습니까?</Title>
      <Description>
        회원탈퇴 시 등록된 자산 데이터도
        <br />
        <span>모두 사라지며 복구되지 않습니다.</span>
      </Description>
      <CancelBtn onClick={goHome}>취소하기</CancelBtn>
      <DeleteBtn onClick={resignUser}>탈퇴하기</DeleteBtn>
    </Container>
  );
};

export default DeleteAccount;
