import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';

const context = describe;
describe('Routes', () => {
  context('when the current path is "/"', () => {
    it('renders `Header` Toss', () => {
      renderRouter('/');

      screen.getByRole('heading', { name: 'Toss' });
    });
  });
});

function renderRouter(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
}
