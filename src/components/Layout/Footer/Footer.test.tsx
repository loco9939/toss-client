import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders footer description', () => {
    render(<Footer />);

    screen.getByText(/footer/);
  });
});
