import React, { useState } from 'react'
import { CartItem } from './CartItem'
import { useCartContext } from '../Layout/contexts/cartcontext'
import { Link } from 'react-router-dom'


export const ShoppingCart = () => {

 
    const { cart, totalPrice } = useCartContext()
    const [isCheckout, setIsCheckout] = useState(false)

  return (
    <>
    <div className='flex flex-col justify-center font-medium text-gray-900'>
        <div className="justify-center">
            {
                cart.map(item => (
                    <CartItem key={item.product._id} item={item}/>
                ))
                
            }
        </div>
        <hr className='mt-10 border'/>
    
        <div className='flex justify-between my-10'>
            <p className='font-serif'>Total Price: <span className='font-bold'>{totalPrice}</span>:-</p>
            <div>
                <Link onClick={() => setIsCheckout(true)} to='checkout' className='bg-cyan-600 py-2 px-5 rounded-lg text-white
                 hover:bg-cyan-500 transition-colors'>Checkout</Link>
            </div>
        </div>
    </div>
    </>
  )
}
