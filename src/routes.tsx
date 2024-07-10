import AssetEditPage from './page/AssetEditPage';
import AssetPage from './page/AssetPage';
import HomePage from './page/HomePage';
import LandingPage from './page/LandingPage';
import Layout from './page/Layout';
import SigninCompletePage from './page/SigninCompletePage';
import SigninPage from './page/SigninPage';

const routes = [
  {
    path: '/landing',
    element: <LandingPage />,
  },

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

  {
    path: '/signin',
    element: <SigninPage />,
  },
];

export default routes;
