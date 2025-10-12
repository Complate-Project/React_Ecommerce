import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import CheckoutOrder from '../Pages/Order/CheckoutOrder';
import SingleOrder from '../Pages/Order/SingleOrder';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'product-details/:id',
        Component: ProductDetails,
      },
      {
        path: 'checkout-order',
        Component: CheckoutOrder,
      },
      {
        path: 'single-order',
        Component: SingleOrder,
      },
    ],
  },
]);
