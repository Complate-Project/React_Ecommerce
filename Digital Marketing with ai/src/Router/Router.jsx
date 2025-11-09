import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import BkashPay from '../Pages/BKashPay/BkashPay';
import NagadPay from '../Pages/NagodPay/NagadPay';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/bkash-pay',
        Component: BkashPay,
      },
      {
        path: '/nagod-pay',
        Component: NagadPay,
      },
    ],
  },
]);
