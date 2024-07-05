import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import MonthAsset from '.';

const mockUseNavigate = vi.fn();

// mocking
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

const { yearAssets } = fixtures;

const context = describe;
describe('MonthAsset', () => {
  context('when it received asset props', () => {
    beforeEach(() => {
      render(<MonthAsset asset={yearAssets[0]} />);
    });

    it('renders date', () => {
      screen.getByText(/월/);
    });
  });

  context(`when it doesn't receive asset props`, () => {
    beforeEach(() => {
      render(<MonthAsset />);
    });

    it('renders "자산 등록"', () => {
      screen.getByText(/자산 등록/);
    });
  });

  context('when click item', () => {
    beforeEach(() => {
      render(<MonthAsset />);
    });

    it('calls useNavigate', () => {
      const item = screen.getByRole('listitem');

      fireEvent.click(item);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
