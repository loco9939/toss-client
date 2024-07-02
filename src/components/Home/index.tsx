import Summary from './Summary';
import AssetList from './AssetList';
import MonthlyChart from './MonthlyChart';

import useFetchLatestAssets from '@/hooks/useFetchLatestAssets';

import convertAssetResponse from '@/utils/convertAssetResponse';

const Home = () => {
  const { loading, latestAssets } = useFetchLatestAssets();

  if (loading) {
    return <p>로딩중...</p>;
  }

  if (latestAssets.length === 0) {
    return <p>실패...</p>;
  }

  const currentAsset = latestAssets[0];

  const currentAssetList = convertAssetResponse(currentAsset);

  return (
    <>
      <Summary assetList={currentAssetList} />
      <AssetList assetList={currentAssetList} />
      <MonthlyChart latestAssets={latestAssets} />
    </>
  );
};

export default Home;
