import sessionStore from '@/stores/sessionStore';
import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import KakaoLogin from '.';

const signInWithKakao = vi.fn();

vi.mock('@/stores/sessionStore', () => ({
  default: vi.fn(),
}));

describe('KakaoLogin', () => {
  beforeEach(() => {
    (sessionStore as unknown as jest.Mock).mockReturnValue(signInWithKakao);
    render(<KakaoLogin />);
  });

  it('when click button, it calls signInWithKakao Fn', () => {
    const loginBtn = screen.getByRole('login');
    fireEvent.click(loginBtn);

    expect(signInWithKakao).toHaveBeenCalled();
  });
});
