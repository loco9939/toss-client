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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  // index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </OriginPieChart>
      </ResponsiveContainer>
      <Legend>만원 단위</Legend>
    </Container>
  );
};

export default PieChart;
