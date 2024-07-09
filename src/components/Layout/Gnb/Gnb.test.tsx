import sessionStore from '@/stores/sessionStore';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import dayjs from 'dayjs';
import Gnb from '.';

const mockUseNavigate = vi.fn();
const signOut = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

vi.mock('@/stores/sessionStore', () => ({
  default: vi.fn(),
}));

describe('Gnb', () => {
  beforeEach(() => {
    (sessionStore as unknown as jest.Mock).mockReturnValue(signOut);
    render(<Gnb />);
  });

  it('renders 홈으로, 자산관리, 로그아웃', () => {
    expect(screen.getByText(/홈으로/));
    expect(screen.getByText(/자산관리/));
    expect(screen.getByText(/로그아웃/));
  });

  it('when click "홈으로", it calls navigate fn with "/"', () => {
    const goToHome = screen.getByText(/홈으로/);
    fireEvent.click(goToHome);

    expect(mockUseNavigate).toHaveBeenCalledWith('/');
  });

  it('when click "자산관리", it calls navigate fn with "/assets?year={year}"', () => {
    const year = dayjs().year();
    const assetManage = screen.getByText(/자산관리/);
    fireEvent.click(assetManage);

    expect(mockUseNavigate).toHaveBeenCalledWith(`/assets?year=${year}`);
  });

  it('when click "로그아웃", it calls signOut', () => {
    const logout = screen.getByText(/로그아웃/);
    fireEvent.click(logout);

    expect(signOut).toHaveBeenCalled();
  });
});
