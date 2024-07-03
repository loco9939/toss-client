import Icon_chevron_left from '@/assets/Icon_chevron_left.svg?react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
})`
  width: 24px;
  height: 24px;
`;

const ChevronLeftBtn: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <Button {...props}>
      <Icon_chevron_left />
    </Button>
  );
};

export default ChevronLeftBtn;
