import React, { useRef, useState } from 'react'
import { AuthLogin } from '../../components/AuthLogin'
import { Link } from 'react-router-dom'
import { registerValidate } from '../../utils/registerValidate'
import { useRegisterUserContext } from '../contexts/registerUserContext'

const Register = () => {
  
  const [error, setError] = useState({
    name:'',
    lastName:'',
    email:'',
    error:'',
  })

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const { registerUser, userExist } = useRegisterUserContext()

const handleSubmit= (e) =>{
  e.preventDefault()

  const newUser = {
    name:firstNameRef.current.value,
    lastName:lastNameRef.current.value,
    email:emailRef.current.value,
    password:passwordRef.current.value,
  }

  if(registerValidate(newUser,setError)){
    
    setError({})
  }
  registerUser(newUser)
  if(error){
    setError(error)
  }
  
  // firstNameRef.current.value = '';
  // lastNameRef.current.value = '';
  // emailRef.current.value = '';
  // passwordRef.current.value = '';
  return
  }


  return (
    <form onSubmit={handleSubmit} className='' noValidate>
    <div>
          <div className='w-full h-full flex justify-center align-middle items-center flex-col my-10 '>
      <div className='border p-10'>
        <h1 className='text-3xl mb-10'>Register a new account</h1>
        <AuthLogin 
        label="First Name"
        id='firstName'
        name='firstName'
        ref={firstNameRef}
        errorMsg={error.firstName}
        type="text"/>
    
        <AuthLogin 
        label="Last Name"
        id='lastName'
        name='lastName'
        ref={lastNameRef}
        errorMsg={error.lastName}
        type="text"/>
    <AuthLogin 
    label="Email"
    id='email'
    name='email'
    ref={emailRef}
    errorMsg={error.email}
    type="email"/>
    <AuthLogin 
    label="Your Password"
    id='password'
    name='password'
    ref={passwordRef}
    errorMsg={error.password}
    type="password"/>
    <button className='border py-2 px-5 mt-3 bg-cyan-600 text-white rounded-md
     hover:bg-cyan-500 transition-colors'>Register</button>
    <div className='mt-2'>
    <Link className='underline decoration-solid text-cyan-700' to="/auth/login/">Already have an account?</Link>
    </div>
    {error && <p>
      {error.message}
      </p>}
      </div>
    </div>
    </div>



    </form>
  )
}

export default Register