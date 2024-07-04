import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import Legend from '.';

describe('Legend', () => {
  it('renders 입출금, 저축, 투자, 연금, 부채', () => {
    render(<Legend />);
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(5);
  });
});
