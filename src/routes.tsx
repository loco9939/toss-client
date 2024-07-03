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
    ],
  },
];

export default routes;
