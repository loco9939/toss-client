import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalStyles';

const router = createBrowserRouter(routes);

function App() {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
