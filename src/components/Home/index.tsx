import { API_BASE_URL } from '@/api';
import { AssetResponse } from '@/types';
import convertAssetResponse from '@/utils/convertAssetResponse';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import AssetList from './AssetList';
import MonthlyChart from './MonthlyChart';
import Summary from './Summary';

const Home = () => {
  const [asset, setAsset] = useState<AssetResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentAsset = async () => {
      try {
        const response: AxiosResponse<AssetResponse> = await axios.get(
          `${API_BASE_URL}/assets:id`,
          {
            params: {
              id: 'cur-id',
            },
          },
        );
        const { data } = response;
        setAsset(data);
      } catch (error) {
        new Error(`${error}`);
      }
      setLoading(true);
    };

    getCurrentAsset();
    // setAsset(assetResponse);
  }, []);

  if (!loading) {
    return null;
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
