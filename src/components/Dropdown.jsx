import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { ShoppingCart } from './ShoppingCart'
import ReactDOM from 'react-dom'
import { useCartContext } from '../Layout/contexts/cartcontext'

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { totalQuantity } = useCartContext()

  return (
    <>
     {isOpen && <ModalBackGround setIsOpen={setIsOpen}/>}
    <div>
        
            <div onClick={() => setIsOpen(true)} className="text-gray-600 fa-solid fa-cart-shopping
             cursor-pointer hover:text-gray-800 transition-colors">
              {totalQuantity > 0  ? 
              <span className='ml-1 text-sm text-white bg-red-700 
              px-2 py-1 rounded-full'>{totalQuantity}</span> : ''}  </div>
        {
            isOpen && <div>
              <div className='p-3 bg-gray-100 fixed top-0 right-0 h-full shadow-2xl w-[35vw] 
              xl:max-w-[30vw] transition-transform ease-in-out duration-500 transform slideInFromRight overflow-auto z-10'>
              <div className='flex justify-between mx-7 my-8'>
                <h1 className='text-gray-700 font-serif text-xl'>Shoping Cart</h1>
                <button onClick={() => setIsOpen(false)} className='text-gray-800 cursor-pointer
                 hover:text-red-300 transition-colors'><i className="fa-solid fa-x"></i></button>
                </div>
                <div className='max-w-[400px] m-auto'>
                <hr className='mt-10 border'/>
                <ShoppingCart/>
                </div>
              </div>

            </div>
         }
 </div>

 </>
  )
}


const ModalBackGround = ({setIsOpen}) =>{
  return ReactDOM.createPortal((
  <div onClick={() => setIsOpen(false)} className="fixed h-full inset-0 bg-gray-800 opacity-50 z-5"></div>)
  ,document.querySelector('#modal'))
}