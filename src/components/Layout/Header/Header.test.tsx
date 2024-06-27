import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders Logo, Hamburger button', () => {
    render(<Header />);

    screen.getByText(/Toss/);
    screen.getByRole('button');
  });
});
