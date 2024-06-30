import { render, screen } from '@testing-library/react';
import Summary from '.';

describe('Summary', () => {
  it('renders asset price', () => {
    render(<Summary />);

    expect(screen.getByRole('heading', { name: '총자산' }));
    expect(screen.getByText(/원/));
  });

  it('renders bar chart', () => {
    render(<Summary />);

    expect(screen.getByRole('BarChart'));
  });
});
