import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <button>back</button>
      <h1>Toss</h1>
      <button>hamburger</button>
    </StyledHeader>
  );
};

export default Header;
