import React, { useRef,useState } from 'react'
import { AuthLogin } from '../../components/AuthLogin'
import { Link } from 'react-router-dom'
import { useLoginUserContext } from '../contexts/loginUserContext'


const Login = () => {

  const [error, setError] = useState({
    email:'',
    error:'',
  })

  const emailRef = useRef()
  const passwordRef = useRef()

  const { loginUser } = useLoginUserContext()

  const handleSubmit= (e) =>{
    e.preventDefault()
  
    const logUser = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }
  
    if(registerValidate(logUser,setError)){
      
      setError({})
    }
    loginUser(logUser)
    if(error){
      setError(error)
    }

    return
    }

  return (
    <form onSubmit={handleSubmit}>
    <div className='w-full h-full flex justify-center align-middle items-center flex-col my-10 '>
      <div className='border p-10'>
        <h1 className='text-3xl mb-10'>Login with your account</h1>
    <AuthLogin 
    errorMsg={error.email}
    label="Email"
    type="email"/>
    <AuthLogin 
    errorMsg={error.password}
    label="Your Password"
    type="password"/>
    <button className='border py-2 px-5 mt-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors'>Submit</button>
    <div className='mt-2'>
    <Link className='underline decoration-solid text-cyan-700' to="/">Forgot password?</Link>
    </div>
      </div>      
    </div>
 </form>
  )
}

export default Login