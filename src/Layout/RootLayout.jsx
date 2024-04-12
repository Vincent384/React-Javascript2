import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import GetFetchContextProvider from './contexts/getfetchcontext'
import MessageContextProvider from './contexts/messageContext'
import CartContextProvider, { CartContext } from './contexts/cartcontext'
import RegisterUserContextProvider from './contexts/registerUserContext'
import LoginUserContextProvider from './contexts/loginUserContext'

const RootLayout = () => {
  return (
    
      <div>
        <LoginUserContextProvider>
        <RegisterUserContextProvider>
        <CartContextProvider>
        <MessageContextProvider>
        <GetFetchContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
        </GetFetchContextProvider>
        </MessageContextProvider>
        </CartContextProvider>
        </RegisterUserContextProvider>
        </LoginUserContextProvider>
      </div>
  
  )
}

export default RootLayout
