import fixtures from '@/fixtures';
import { render } from '@/utils/test-helpers';
import { screen } from '@testing-library/dom';
import MonthAsset from '.';

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

    it('renders "등록된 자산이 없습니다."', () => {
      expect(screen.getByText(/없습니다./));
    });
  });
});
