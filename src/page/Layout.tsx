import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  min-width: 37.5rem;
  width: 50rem;
  margin-inline: auto;

  main {
    padding: 1.2rem;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
