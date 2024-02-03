import React from 'react'
import { AuthLogin } from '../../components/AuthLogin'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='w-full h-full flex justify-center align-middle items-center flex-col my-10 '>
      <div className='border p-10'>
        <h1 className='text-3xl mb-10'>Login with your account</h1>
    <AuthLogin 
    errorMsg="hello"
    label="Email"
    type="email"/>
    <AuthLogin 
    errorMsg="hello"
    label="Your Password"
    type="password"/>
    <button className='border py-2 px-5 mt-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors'>Submit</button>
    <div className='mt-2'>
    <Link className='underline decoration-solid text-cyan-700' to="/">Forgot password?</Link>
    </div>
      </div>
    
          
    </div>
  )
}

export default Login