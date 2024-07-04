import defaultTheme from '@/styles/defaultTheme';
import { BarChartData } from '@/types';
import {
  Cell,
  PieChart as OriginPieChart,
  Pie,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

type BarChartProps = {
  data: BarChartData[];
};

const Container = styled.div.attrs({
  role: 'bar-chart',
})`
  width: 8.4rem;
  height: 8.2rem;
  margin-inline: auto;

  * {
    outline: none;
  }
`;

const COLORS = [
  defaultTheme.colors['toss-yellow'],
  defaultTheme.colors['toss-pink'],
  defaultTheme.colors['toss-lightblue'],
  defaultTheme.colors['toss-blue'],
  defaultTheme.colors['toss-green'],
];

const PieChart = ({ data }: BarChartProps) => {
  return (
    <Container>
      <ResponsiveContainer width='100%' height='100%'>
        <OriginPieChart width={400} height={400}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            innerRadius={25}
            outerRadius={40}
            dataKey='amount'
            stroke='none'
            paddingAngle={5}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </OriginPieChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default PieChart;
