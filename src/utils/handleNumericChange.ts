import { ChangeEvent } from 'react';

const handleNumericChange =
  (changeFn: (value: string) => void) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const numericValue = value.replace(/[^0-9]/g, '');
    changeFn(numericValue);
  };

export default handleNumericChange;
