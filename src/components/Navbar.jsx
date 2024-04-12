import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Images from '../Images/Images'
import { Dropdown } from './Dropdown'

export const Navbar = () => {
  return (
    <>
    <nav className='w-full py-3 border bg-gray-50 sticky z-10 top-0'>
    <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <Link to="/" className='text-white'><img className='w-[50px]' src={Images.imgLogo} alt="" /></Link>
        <ul className='text-white font-bold flex'>
            <li><NavLink className='text-gray-600 [&.active]:underline m-4 hover:text-gray-800 transition-colors' to="/">Home</NavLink></li>
            <li><NavLink className='text-gray-600 [&.active]:underline m-4 hover:text-gray-800 transition-colors' to="/contact">Contact</NavLink></li>
            <li><NavLink className='text-gray-600 [&.active]:underline m-4 hover:text-gray-800 transition-colors' to="auth/login">Login</NavLink></li>
            <li><NavLink className='text-gray-600 [&.active]:underline m-4 hover:text-gray-800 transition-colors' to="auth/register">Register</NavLink></li>
            <Dropdown/>
        </ul>
    </div>
    </nav>
    </>
  )
}
