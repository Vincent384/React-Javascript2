import React from 'react'
import { Outlet } from 'react-router-dom'
import RegisterUserContextProvider from '../contexts/registerUserContext'

const AuthLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout