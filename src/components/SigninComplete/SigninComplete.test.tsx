import sessionStore from '@/stores/sessionStore';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import SigninComplete from '.';

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

describe('SigninComplete', () => {
  beforeEach(() => {
    (sessionStore as unknown as jest.Mock).mockReturnValue(session);
    render(<SigninComplete />);
  });

  it('renders `자산 등록 하러 가기` button', () => {
    screen.getByRole('button', { name: '자산 등록 하러 가기' });
  });

  it('when click `자산 등록 하러 가기 ` button, useNavigate call', () => {
    const assetBtn = screen.getByRole('button', {
      name: '자산 등록 하러 가기',
    });
    fireEvent.click(assetBtn);

    expect(mockUseNavigate).toHaveBeenCalled();
  });

  it('when session is not empty, it renders user name', () => {
    screen.getByText(/MZ회원/);
  });
});
