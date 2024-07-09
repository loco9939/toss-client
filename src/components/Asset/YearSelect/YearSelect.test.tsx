import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import { useSearchParams } from 'react-router-dom';
import YearSelect from '.';

const setParamsMock = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useSearchParams: vi.fn(),
}));

const context = describe;
describe('YearSelect', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue([{}, setParamsMock]);
  });

  it('renders year', () => {
    render(<YearSelect year={2024} />);
    expect(screen.getByRole('year')).toBeInTheDocument();
  });

  it('renders next,prev button', () => {
    render(<YearSelect year={2024} />);
    screen.getByRole('prev');
    screen.getByRole('next');
  });

  context('when next button click', () => {
    it('calls year+1 as params', () => {
      const year = 2024;
      render(<YearSelect year={year} />);

      const nextBtn = screen.getByRole('next');
      fireEvent.click(nextBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2025');
    });
  });

  context('when prev button click', () => {
    it('calls year-1 as params', () => {
      const year = 2024;
      render(<YearSelect year={year} />);

      const prevBtn = screen.getByRole('prev');
      fireEvent.click(prevBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2023');
    });
  });
});
