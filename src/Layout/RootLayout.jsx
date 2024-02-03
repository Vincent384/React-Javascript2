import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import GetFetchContextProvider from './contexts/getfetchcontext'
import MessageContextProvider from './contexts/messageContext'
import CartContextProvider, { CartContext } from './contexts/cartcontext'

const RootLayout = () => {
  return (
    
      <div>
        <CartContextProvider>
        <MessageContextProvider>
        <GetFetchContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
        </GetFetchContextProvider>
        </MessageContextProvider>
        </CartContextProvider>
      </div>
  
  )
}

export default RootLayout
