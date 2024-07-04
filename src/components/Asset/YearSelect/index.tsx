import { ChevronLeftBtn } from '@/components/UI';
import styled from 'styled-components';

type YearSelectProps = {
  year?: string;
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

const ChevronRightBtn = styled(ChevronLeftBtn)`
  svg {
    rotate: 180deg;
  }
`;

const Year = styled.span.attrs({
  role: 'year',
})`
  font-size: ${props => props.theme.fontSize.lg};
`;

const YearSelect = ({ year }: YearSelectProps) => {
  return (
    <Container>
      <ChevronLeftBtn role='prev' />
      <Year>{year}</Year>
      <ChevronRightBtn role='next' />
    </Container>
  );
};

export default YearSelect;
