import Tossfolio from '@/assets/Tossfolio.png';
import useSession from '@/hooks/useSession';
import styled from 'styled-components';

const Navigation = styled.nav`
  max-width: 1140px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 6rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    color: ${props => props.theme.colors['gray-700']};

    img {
      width: 7.6rem;
    }
  }
`;

const NavContent = styled.div``;

const NavMenu = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 0 0.8rem;

  a {
    padding: 1.2rem 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 0.8rem;
    color: ${props => props.theme.colors['gray-700']};

    &:hover {
      background-color: ${props => props.theme.colors['gray-opacity-100']};
    }
  }
`;

const Header = () => {
  const { session } = useSession();
  return (
    <header>
      <Navigation>
        <LogoContainer>
          <a href='/landing'>
            <img src={Tossfolio} alt='logo' />
          </a>
        </LogoContainer>
        <NavContent>
          <NavMenu>
            <NavItem>
              {session ? <a href='/'>홈으로</a> : <a href='/signin'>로그인</a>}
            </NavItem>
          </NavMenu>
        </NavContent>
      </Navigation>
    </header>
  );
};

export default Header;
