import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import PublicLayout from './Layout/Public/PublicLayout'
import ProductDetails from './Layout/Public/ProductDetails'
import Contact from './Layout/Public/Contact'
import AuthLayout from './Layout/Auth/AuthLayout'
import Login from './Layout/Auth/Login'
import Register from './Layout/Auth/Register'
import Home from './Layout/Public/Home' 
import Checkout from './Layout/Public/Checkout'
import OrderConfirmed from './Layout/Public/OrderConfirmed'
import Private from './Layout/Auth/Private'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/productDetails/:id',
            element: <ProductDetails />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          { 
            path:'checkout',
            element: <Checkout/>
          },
          {
            path:'orderconfirmed',
            element:<OrderConfirmed/>
          }
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
          {
            path:'private',
            element:<Private/>,
          }
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
