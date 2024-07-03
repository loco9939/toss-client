import Icons_menu from '@/assets/Icon_menu.svg?react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.6rem 1.2rem;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${props => props.theme.fontSize.lg};
`;

const HamburgerBtn = styled.button.attrs({
  role: 'menu',
})`
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Toss</Title>
      <HamburgerBtn>
        <Icons_menu />
      </HamburgerBtn>
    </StyledHeader>
  );
};

export default Header;
