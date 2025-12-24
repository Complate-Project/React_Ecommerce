import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import BkashPay from '../Pages/BKashPay/BkashPay';
import NagadPay from '../Pages/NagodPay/NagadPay';
import { NewOfter } from '../Pages/NewOfter/NewOfter';
import { Enroll } from '../Pages/enroll/Enroll';
import { Ofter } from '../Pages/Offer/Offer';
import { SecondEnroll } from '../Pages/Enroll-2/SecondEnroll';
import OrderComplete from '../Pages/order-complete/OrderComplete';

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
      {
        path: '/new-offer',
        Component: NewOfter,
      },
      {
        path: '/new-offer-complete',
        Component: OrderComplete,
      },
      {
        path: '/offer',
        Component: Ofter,
      },
      {
        path: '/new-offer/enroll',
        Component: Enroll,
      },
      {
        path: '/offer/enroll',
        Component: SecondEnroll,
      },
    ],
  },
]);
