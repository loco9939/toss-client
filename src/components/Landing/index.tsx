import styled from 'styled-components';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const StyledLanding = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin-inline: auto;
  background-color: #ffffff;
`;

const Landing = () => {
  return (
    <StyledLanding>
      <Header />
      <Content />
      <Footer />
    </StyledLanding>
  );
};

export default Landing;
