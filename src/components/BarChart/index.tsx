import defaultTheme from '@/styles/defaultTheme';
import convertKRW from '@/utils/convertKRW';
import { useState } from 'react';
import {
  Bar,
  Cell,
  LabelList,
  BarChart as OriginBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import styled from 'styled-components';

type BarChartProps = {
  data: { [key: string]: string | number }[];
};

const Container = styled.div.attrs({
  role: 'bar-chart',
})`
  position: relative;
  width: 100%;
  height: 22.5rem;
  margin-block: 4.8rem;

  .recharts-label-list {
    font-weight: ${props => props.theme.font.light};
    font-size: 1.4rem;
  }
`;

const Legend = styled.div`
  position: absolute;
  bottom: -3.2rem;
  color: ${props => props.theme.colors['text-secondary']};
`;

const labelListFormatter = (value: number) => {
  return convertKRW(value / 10000);
};

const BarChart = ({ data }: BarChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const renderCustomAxisTick = (props: any) => {
    const { x, y, payload, index } = props;
    const fill =
      index === activeIndex
        ? defaultTheme.colors['text-primary']
        : defaultTheme.colors['text-secondary'];
    return (
      <text
        x={x}
        y={y + 10}
        fill={fill}
        textAnchor='middle'
        dominantBaseline='middle'
        style={{ fontSize: '1.4rem' }}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <Container>
      <ResponsiveContainer width='100%' height='100%'>
        <OriginBarChart
          width={150}
          height={40}
          data={data}
          margin={{ top: 20 }}
        >
          <Tooltip active={false} />
          <Bar dataKey='amount' radius={[8, 8, 0, 0]}>
            <LabelList
              dataKey='amount'
              position='top'
              formatter={labelListFormatter}
              offset={10}
            />
            {data.map((_, index) => {
              const lastBarIndex = data.length - 1;
              const fill =
                index === lastBarIndex || index === activeIndex
                  ? defaultTheme.colors['toss-lightblue']
                  : defaultTheme.colors['bg-secondary'];
              return (
                <Cell
                  key={`bar-${index}`}
                  fill={fill}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
          </Bar>
          <XAxis
            dataKey='name'
            tickLine={false}
            tickMargin={8}
            strokeDasharray={2}
            style={{ fill: defaultTheme.colors['text-secondary'] }}
            tick={renderCustomAxisTick}
          />
        </OriginBarChart>
      </ResponsiveContainer>
      <Legend>만원 단위</Legend>
    </Container>
  );
};

export default BarChart;
