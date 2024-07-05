import { ChangeEvent } from 'react';
import handleNumericChange from './handleNumericChange';

describe('handleNumericChange', () => {
  it('should only allow numeric input', () => {
    const mockChangeFn = vi.fn();
    const event = {
      currentTarget: {
        value: '123!@#',
      },
    } as ChangeEvent<HTMLInputElement>;

    handleNumericChange(mockChangeFn)(event);

    expect(mockChangeFn).toHaveBeenCalledWith('123');
  });

  it('should allow empty input', () => {
    const mockChangeFn = vi.fn();
    const event = {
      currentTarget: {
        value: '',
      },
    } as ChangeEvent<HTMLInputElement>;

    handleNumericChange(mockChangeFn)(event);

    expect(mockChangeFn).toHaveBeenCalledWith('');
  });

  it('should allow numeric input', () => {
    const mockChangeFn = vi.fn();
    const event = {
      currentTarget: {
        value: '456',
      },
    } as ChangeEvent<HTMLInputElement>;

    handleNumericChange(mockChangeFn)(event);

    expect(mockChangeFn).toHaveBeenCalledWith('456');
  });
});
