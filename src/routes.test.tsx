import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

const context = describe;
describe('Routes', () => {
  context('when the current path is "/"', () => {
    it('renders `Header` Toss', () => {
      renderRouter('/');

      screen.getByRole('heading',{name:'Toss'})
    });
  });
});

function renderRouter(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
}
