import Summary from './Summary';
import AssetList from './AssetList';
import MonthlyChart from './MonthlyChart';

import useFetchLatestAssets from '@/hooks/useFetchLatestAssets';

import convertAssetResponse from '@/utils/convertAssetResponse';

const Home = () => {
  const { loading, latestAssets } = useFetchLatestAssets();

  const asset = latestAssets[0];
  const prevAsset = latestAssets[1];

  if (loading) {
    return <p>로딩중...</p>;
  }

  console.log('asset', latestAssets);
  if (!asset) {
    return <p>실패...</p>;
  }

  const assetList = convertAssetResponse(asset);
  const prevAssetList = convertAssetResponse(prevAsset);

  return (
    <>
      <Summary assetList={assetList} />
      <AssetList assetList={assetList} />
      <MonthlyChart assetList={assetList} prevAssetList={prevAssetList} />
    </>
  );
};

export default Home;
