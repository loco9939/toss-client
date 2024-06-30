import BarChart from '@/components/BarChart';
import convertKRW from '@/utils/convertKRW';

const Summary = () => {
  return (
    <section>
      <h2>총자산</h2>
      <span>{convertKRW(16523456)}원</span>

      <BarChart />
    </section>
  );
};

export default Summary;
