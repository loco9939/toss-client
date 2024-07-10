import monthAssetFormStore from '@/stores/monthAssetFormStore';
import sessionStore from '@/stores/sessionStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckAsset = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { getUser } = sessionStore();
  const { fetchMonthAsset } = monthAssetFormStore();

  useEffect(() => {
    const checkAssetsAndRedirect = async () => {
      setLoading(true);

      // 현재 로그인한 유저의 정보를 가져옵니다.
      const { user } = await getUser();

      const user_id = user?.id;

      // 유저 ID를 사용하여 asset 데이터를 조회합니다.
      const assetData = await fetchMonthAsset({
        user_id,
      });

      // asset 데이터 유무에 따라 추가 리다이렉트를 수행합니다.
      if (assetData && assetData.length > 0) {
        navigate('/');
      }
      setLoading(false);
    };

    checkAssetsAndRedirect();
  }, []);

  return { loading };
};

export default useCheckAsset;
