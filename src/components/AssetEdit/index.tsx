import YearSelect from '../Asset/YearSelect';
import PieChart from '../PieChart';
import Form from './Form';

const AssetEdit = () => {
  return (
    <section>
      <YearSelect year='2024' />
      <PieChart data={[]} />
      <Form />
    </section>
  );
};

export default AssetEdit;
