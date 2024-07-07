import TossfolioLogo from '@/assets/Tossfolio_logo.png';
import { ChevronLeftBtn } from '@/components/UI';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from '../Gnb';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 1.2rem;
`;

const Logo = styled.img`
  width: 4.6rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  user-select: none;
  font-size: ${props => props.theme.fontSize.lg};
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');
  return (
    <StyledHeader>
      {isHomePage ? <div /> : <ChevronLeftBtn role='back' onClick={goBack} />}
      <Logo src={TossfolioLogo} onClick={goHome} />
      <Gnb />
    </StyledHeader>
  );
};

export default Header;
