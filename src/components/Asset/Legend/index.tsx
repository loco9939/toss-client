import styled from 'styled-components';

const List = styled.ul`
  width: 55%;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  gap: 1.6rem;
  padding-bottom: 0.6rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors['text-secondary']};
`;

const Icon = styled.div<{ type: string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${props => {
    switch (props.type) {
      case 'dw':
        return props.theme.colors['toss-yellow'];

      case 'saving':
        return props.theme.colors['toss-pink'];

      case 'investment':
        return props.theme.colors['toss-lightblue'];

      case 'pension':
        return props.theme.colors['toss-blue'];

      case 'debt':
        return props.theme.colors['toss-green'];

      default:
        break;
    }
  }};
`;

const Item = styled.li`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  font-size: ${props => props.theme.fontSize.sm};
`;

const Legend = () => {
  return (
    <List>
      <Item>
        <Icon type='dw' />
        <p>입출금</p>
      </Item>
      <Item>
        <Icon type='saving' />
        <p>저축</p>
      </Item>
      <Item>
        <Icon type='investment' />
        <p>투자</p>
      </Item>
      <Item>
        <Icon type='pension' />
        <p>연금</p>
      </Item>
      <Item>
        <Icon type='debt' />
        <p>부채</p>
      </Item>
    </List>
  );
};

export default Legend;
