import sessionStore from '@/stores/sessionStore';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import SigninComplete from '.';
import useCheckAsset from '@/hooks/useCheckAsset';

const mockUseNavigate = vi.fn();
const session = { user: { user_metadata: { user_name: 'MZ회원' } } };

// mocking
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

vi.mock('@/stores/sessionStore', () => ({
  default: vi.fn(),
}));

vi.mock('@/hooks/useCheckAsset', () => ({
  default: vi.fn(),
}));

describe('SigninComplete', () => {
  beforeEach(() => {
    (sessionStore as unknown as jest.Mock).mockReturnValue(session);
    (useCheckAsset as unknown as jest.Mock).mockReturnValue(false);
    render(<SigninComplete />);
  });

  it('renders `자산 등록 하러 가기` button', async () => {
    await waitFor(() => {
      screen.getByRole('button', { name: '자산 등록 하러 가기' });
    });
  });

  it('when click `자산 등록 하러 가기 ` button, useNavigate call', async () => {
    await waitFor(() => {
      const assetBtn = screen.getByRole('button', {
        name: '자산 등록 하러 가기',
      });
      fireEvent.click(assetBtn);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });

  it('when session is not empty, it renders user name', async () => {
    await waitFor(() => {
      screen.getByText(/환영합니다/);
    });
  });
});
