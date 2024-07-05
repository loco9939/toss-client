import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import MonthSelect from '.';

describe('MonthSelect', () => {
  beforeEach(() => {
    render(<MonthSelect year={2024} month={12} />);
  });

  it('renders month', () => {
    expect(screen.getByRole('month')).toBeInTheDocument();
  });

  it('renders next,prev button', () => {
    screen.getByRole('prev');
    screen.getByRole('next');
  });
});
