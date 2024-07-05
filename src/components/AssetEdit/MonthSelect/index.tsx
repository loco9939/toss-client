import { ChevronLeftBtn } from '@/components/UI';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

type MonthSelectProps = {
  year: number;
  month: number;
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

const Month = styled.span.attrs({
  role: 'month',
})`
  font-size: ${props => props.theme.fontSize.lg};
`;

const MonthSelect = ({ year, month }: MonthSelectProps) => {
  const [, setParams] = useSearchParams();

  const onClickPrev = () => {
    if (month < 2) {
      year = year - 1;
      month = 13;
    }
    setParams(`year=${year}&month=${month - 1}`);
  };

  const onClickNext = () => {
    if (month > 11) {
      year = year + 1;
      month = 0;
    }
    setParams(`year=${year}&month=${month + 1}`);
  };

  return (
    <Container>
      <ChevronLeftBtn role='prev' onClick={onClickPrev} />
      <Month>{month}</Month>
      <ChevronRightBtn role='next' onClick={onClickNext} />
    </Container>
  );
};

export default MonthSelect;
