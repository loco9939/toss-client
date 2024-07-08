import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalStyles';

const router = createBrowserRouter(routes);

// NOTE: Hash 제거
function removeLocationHash() {
  const noHashURL = window.location.href.replace(/#.*$/, '');
  window.history.replaceState('', document.title, noHashURL);
}

function App() {
  const theme = defaultTheme;

  useEffect(() => {
    window.addEventListener('load', removeLocationHash);

    return () => window.removeEventListener('load', removeLocationHash);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
