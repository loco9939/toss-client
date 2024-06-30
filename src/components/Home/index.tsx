import { useEffect, useState } from 'react';
import AssetList from './AssetList';
import Summary from './Summary';
import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '@/api';
import { AssetResponse } from '@/types';
import convertAssetResponse from '@/utils/convertAssetResponse';

const Home = () => {
  const [asset, setAsset] = useState<AssetResponse | null>(null);
  useEffect(() => {
    const getCurrentAsset = async () => {
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
    };

    getCurrentAsset();
  }, []);

  if (!asset) {
    return null;
  }

  return (
    <div>
      <Summary />
      <AssetList assetList={convertAssetResponse(asset)} />
    </div>
  );
};

export default Home;
