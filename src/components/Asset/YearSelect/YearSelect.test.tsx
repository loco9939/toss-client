import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import YearSelect from '.';

describe('YearSelect', () => {
  beforeEach(() => {
    render(<YearSelect year='2024' />);
  });

  it('renders year', () => {
    expect(screen.getByRole('year')).toBeInTheDocument();
  });

  it('renders next,prev button', () => {
    screen.getByRole('prev');
    screen.getByRole('next');
  });
});
