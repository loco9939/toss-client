import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import { useSearchParams } from 'react-router-dom';
import MonthSelect from '.';

const setParamsMock = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useSearchParams: vi.fn(),
}));

const context = describe;
describe('MonthSelect', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue([{}, setParamsMock]);
  });

  it('renders month', () => {
    render(<MonthSelect year={2024} month={12} />);
    expect(screen.getByRole('month')).toBeInTheDocument();
  });

  it('renders next,prev button', () => {
    render(<MonthSelect year={2024} month={12} />);
    screen.getByRole('prev');
    screen.getByRole('next');
  });

  context('when next button click', () => {
    it('if month is lower than 12, it calls with month+1 as params', async () => {
      const month = 10;
      render(<MonthSelect year={2024} month={month} />);

      const nextBtn = screen.getByRole('next');
      fireEvent.click(nextBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2024&month=11');
    });

    it('if month is 12, it calls year+1, month=1 as params', () => {
      const month = 12;
      render(<MonthSelect year={2024} month={month} />);

      const nextBtn = screen.getByRole('next');
      fireEvent.click(nextBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2025&month=1');
    });
  });

  context('when prev button click', () => {
    it('if month is more than 1, it calls with month-1 as params', async () => {
      const month = 12;
      render(<MonthSelect year={2024} month={month} />);

      const prevBtn = screen.getByRole('prev');
      fireEvent.click(prevBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2024&month=11');
    });

    it('if month is 1, it calls year-1, month=12 as params', () => {
      const month = 1;
      render(<MonthSelect year={2024} month={month} />);

      const prevBtn = screen.getByRole('prev');
      fireEvent.click(prevBtn);

      expect(setParamsMock).toHaveBeenCalledWith('year=2023&month=12');
    });
  });
});
