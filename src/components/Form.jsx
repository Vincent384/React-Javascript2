import React, { useRef, useState } from 'react'
import { useMessageContext } from '../Layout/contexts/messageContext'
import { validate } from '../utils/validate'


export const Form = ({isCheckOutPage,totalPrice}) => {

  const [error, setError] = useState({
    name:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',
    adress:'',
  })

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()
  
const { postData,messageSuccess,setMessageSuccess } = useMessageContext()

const handleSubmit = (e) =>{
  e.preventDefault()
  setMessageSuccess(false)
  const postMessage = {
    name:firstNameRef.current.value,
    lastName:lastNameRef.current.value,
    email:emailRef.current.value,
    phone:phoneRef.current.value,
    message:messageRef.current.value
  }
  
  if(validate(postMessage,setError)){

    console.log(postMessage)
    setError('')
    postData(postMessage)
    
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    messageRef.current.value = '';
  }
  
}


  return (
     <>
        <div className='max-w-[500px] mx-auto my-10 border'>
        <form onSubmit={handleSubmit} className='m-10'>
            <label className='font-serif' htmlFor="FirstName">First Name</label>
            <input className='border w-full my-2 rounded-md py-1 ' ref={firstNameRef} type="text" placeholder='Your name*' />
            {error ? <p className='mb-2 text-red-500'>{error.name}</p> : ''}
            
            <label className='font-serif' htmlFor="LastName" >Last Name</label>
            <input className='border w-full my-2 rounded-md py-1' ref={lastNameRef} type="text" placeholder='Your Last Name*' />
            {error ? <p className='mb-2 text-red-500'>{error.lastName}</p> : ''}
            
            <label className='font-serif' htmlFor="email">Email</label>
            <input className='border w-full my-2 rounded-md py-1' ref={emailRef} type="email" placeholder='Your Email*' />
            {error ? <p className='mb-2 text-red-500'>{error.email}</p> : ''}
            
            <label className='font-serif' htmlFor="phone">Phone</label>
            <input className='border w-full my-2 rounded-md py-1' ref={phoneRef} type="tel" placeholder='Tel*' />
            {error ? <p className='mb-2 text-red-500'>{error.phone}</p> : ''}
            
            <label className='font-serif' htmlFor="email">Write a message</label>
            <textarea className='border w-full resize-none rounded-md' ref={messageRef} name="" id="" cols="30" rows="5" ></textarea>
            {error ? <p className='mb-2 text-red-500'>{error.message}</p> : ''}
            <button className='border my-3 py-2 w-full bg-cyan-600 rounded-xl text-white text-lg hover:bg-cyan-500 transition-colors'>Submit</button>
            {
              messageSuccess ? <p className='py-2 w-full bg-emerald-400 
              text-center text-white text-lg'>Skickat!</p> : ''
            }
         
            
            
        </form>
        </div>   
    
    </>
  )
}
