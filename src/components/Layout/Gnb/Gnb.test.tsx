import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import Gnb from '.';

describe('Gnb', () => {
  beforeEach(() => {
    render(<Gnb />);
  });
  it('renders 홈으로, 자산관리, 로그아웃', () => {
    expect(screen.getByText(/홈으로/));
    expect(screen.getByText(/자산관리/));
    expect(screen.getByText(/로그아웃/));
  });
});
