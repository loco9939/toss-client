import HomePage from './page/HomePage';
import Layout from './page/Layout';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
