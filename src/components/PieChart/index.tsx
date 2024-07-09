import defaultTheme from '@/styles/defaultTheme';
import { BarChartData } from '@/types';
import {
  Cell,
  PieChart as OriginPieChart,
  Pie,
  ResponsiveContainer,
} from 'recharts';

type BarChartProps = {
  data: BarChartData[];
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
};

const COLORS = [
  defaultTheme.colors['toss-yellow'],
  defaultTheme.colors['toss-pink'],
  defaultTheme.colors['toss-lightblue'],
  defaultTheme.colors['toss-blue'],
  defaultTheme.colors['toss-green'],
];

const PieChart = ({
  data,
  innerRadius,
  outerRadius,
  paddingAngle,
}: BarChartProps) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <OriginPieChart role='pie-chart'>
        <Pie
          data={data}
          labelLine={false}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey='amount'
          stroke='none'
          paddingAngle={paddingAngle}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </OriginPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
