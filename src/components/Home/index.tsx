import Summary from './Summary';
import AssetList from './AssetList';
import MonthlyChart from './MonthlyChart';

import useFetchLatestAssets from '@/hooks/useFetchLatestAssets';

import convertAssetResponse from '@/utils/convertAssetResponse';

const Home = () => {
  const { loading, latestAssets } = useFetchLatestAssets();

  const asset = latestAssets[0];

  if (loading) {
    return <p>로딩중...</p>;
  }

  if (!asset) {
    return <p>실패...</p>;
  }

  const assetList = convertAssetResponse(asset);

  return (
    <>
      <Summary assetList={assetList} />
      <AssetList assetList={assetList} />
      <MonthlyChart assetList={assetList} prevAssetList={assetList} />
    </>
  );
};

export default Home;
