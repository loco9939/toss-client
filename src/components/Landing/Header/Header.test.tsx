import sessionStore from '@/stores/sessionStore';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import Header from '.';

vi.mock('@/stores/sessionStore', () => ({
  default: vi.fn(),
}));

describe('Header', () => {
  it('renders Logo', () => {
    render(<Header />);
    screen.getByRole('img');
  });

  it('when session is empty, it renders 로그인', () => {
    (sessionStore as unknown as jest.Mock).mockReturnValue(null);
    render(<Header />);
    screen.getByText(/로그인/);
  });

  it('when session is not empty, it renders 홈으로', () => {
    (sessionStore as unknown as jest.Mock).mockReturnValue('test-session');
    render(<Header />);
    screen.getByText(/홈으로/);
  });
});
