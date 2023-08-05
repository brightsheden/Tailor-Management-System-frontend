import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import TailorDshboardScreen from './screens/TailorDshboardScreen';
import HomeScreen from './screens/HomeScreen';
import CompanyDashboradScreen from './screens/CompanyDashboradScreen';
import Orders from './components/Orders';
import Tailors from './components/Tailors';
import Payments from './components/Payments';
import OrderCreateScreen from './screens/OrderCreateScreen';
import TailorCreateScreen from './screens/TailorCreateScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderEditScreen from './screens/OrderEditScreen';
import TailorEditScreen from './screens/TailorEditScreen';
import Customers from './screens/CustomerScreen';
import AddCustomerScreen from './screens/AddCustomerScreen';
import StytlesScreen from './screens/StytlesScreen';
import AddStyleScreen from './screens/AddStyleScreen';
import EditeStyleScreen from './screens/EditeStyleScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/tailordashboard',
    element: <TailorDshboardScreen />,
  },
  {
    path: '/login/',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
  {
    path: '/companydashboard',
    element: <CompanyDashboradScreen />,
    children: [
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'orders/create',
        element: <OrderCreateScreen />,
      }

      ,
      {
        path: 'orders/edit/:orderId',
        element: <OrderEditScreen  />,
      },
      {
        path: 'tailors',
        element: <Tailors />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },

      {
        path: 'customers/create',
        element: <AddCustomerScreen />,
      },

      {
        path: 'tailors/create',
        element: <TailorCreateScreen />,
      },
      {
        path: 'tailors/edit/:Id',
        element: <TailorEditScreen  />,
      },
      {
        path: 'payments',
        element: <Payments />,
      },
      {
        path: 'styles',
        element: <StytlesScreen/>,
      },
      {
        path: 'styles/create',
        element: <AddStyleScreen/>,
      },
      {
        path: 'styles/edit/:id',
        element: <EditeStyleScreen/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  
);
