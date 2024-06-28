import AssetList from '../components/AssetList';
import Summary from '../components/Summary';

const HomePage = () => {
  return (
    <div>
      <Summary />
      <AssetList assetList={[]} />
    </div>
  );
};

export default HomePage;
