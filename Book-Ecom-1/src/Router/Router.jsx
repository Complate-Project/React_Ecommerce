import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
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
        path: '/complete-order',
        Component: OrderComplete,
      },
    ],
  },
  // {
  //   path: '/admin',
  //   element: (
  //     <PrivateRoute>
  //       <AdminRoot></AdminRoot>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       Component: Statistics,
  //     },
  //     {
  //       path: '/admin/all-products',
  //       Component: AllProducts,
  //     },
  //     {
  //       path: '/admin/add-product',
  //       Component: AddProduct,
  //     },
  //     {
  //       path: '/admin/orders',
  //       Component: Order,
  //     },
  //   ],
  // },
]);
