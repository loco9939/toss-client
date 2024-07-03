import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import SigninComplete from '.';

const mockUseNavigate = vi.fn();

// mocking
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

describe('SigninComplete', () => {
  beforeEach(() => {
    render(<SigninComplete />);
  });

  it('renders `자산 등록 하러 가기` button', () => {
    screen.getByRole('button', { name: '자산 등록 하러 가기' });
  });

  it('when click `자산 등록 하러 가기 ` button, useNavigate call', async () => {
    const assetBtn = screen.getByRole('button', {
      name: '자산 등록 하러 가기',
    });
    fireEvent.click(assetBtn);

    expect(mockUseNavigate).toHaveBeenCalledWith('/assets');
  });
});
