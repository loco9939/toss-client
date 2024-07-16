import { render } from '@/utils/test-helpers';
import { fireEvent, screen } from '@testing-library/dom';
import DeleteAccount from '.';

const mockUseNavigate = vi.fn();

// mocking
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useNavigate: () => mockUseNavigate,
}));

describe('DeleteAccount', () => {
  it('renders "취소하기", "탈퇴하기"', () => {
    render(<DeleteAccount />);

    screen.getByRole('button', { name: '취소하기' });
    screen.getByRole('button', { name: '탈퇴하기' });
  });

  it('when click "취소하기" btn, it calls navigate', () => {
    render(<DeleteAccount />);

    const cancelBtn = screen.getByRole('button', { name: '취소하기' });

    fireEvent.click(cancelBtn);

    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
