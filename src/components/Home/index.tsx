import { API_BASE_URL } from '@/api';
import { AssetResponse } from '@/types';
import convertAssetResponse from '@/utils/convertAssetResponse';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import AssetList from './AssetList';
import Summary from './Summary';

const Home = () => {
  const [asset, setAsset] = useState<AssetResponse | null>(null);

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
        return new Error(`${error}`);
      }
    };

    getCurrentAsset();
    // setAsset(assetResponse);
  }, []);

  if (!asset) {
    return <p>실패...</p>;
  }

  const assetList = convertAssetResponse(asset);

  return (
    <div>
      <Summary assetList={assetList} />
      <AssetList assetList={assetList} />
    </div>
  );
};

export default Home;
