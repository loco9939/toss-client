import AssetEditPage from './page/AssetEditPage';
import AssetPage from './page/AssetPage';
import HomePage from './page/HomePage';
import Layout from './page/Layout';
import SigninCompletePage from './page/SigninCompletePage';

const routes = [
  {
    element: <Layout />,
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
