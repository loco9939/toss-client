import { render, screen } from '@testing-library/react';
import BarChart from '.';

describe('BarChart', () => {
  it('renders "BarChart Role" element', () => {
    render(<BarChart />);

    expect(screen.getByRole('BarChart'));
  });
});
