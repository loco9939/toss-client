import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />);

    screen.getByText(/SNS/);
    screen.getByText(/연락처/);
  });
});
