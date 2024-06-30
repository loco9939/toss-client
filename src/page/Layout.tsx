import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 480px;
  margin-inline: auto;
  background-color: lightgray;
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