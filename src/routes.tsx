import AssetEditPage from './page/AssetEditPage';
import AssetPage from './page/AssetPage';
import HomePage from './page/HomePage';
import LandingPage from './page/LandingPage';
import Layout from './page/Layout';
import SigninCompletePage from './page/SigninCompletePage';

const routes = [
  {
    path: '/landing',
    element: <LandingPage />,
  },

  {
    element: <Layout />, // TODO: Auth 추가
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/signin-complete',
        element: <SigninCompletePage />,
      },
      {
        path: '/assets',
        element: <AssetPage />,
      },
      {
        path: '/asset-detail',
        element: <AssetEditPage />,
      },
    ],
  },
];

export default routes;
