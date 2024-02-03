import React, { useState } from 'react'
import { useCartContext } from '../contexts/cartcontext'
import { Link, useParams } from 'react-router-dom'
import { Form } from '../../components/form'
import { OrderPayment } from '../../components/OrderPayment'


const Checkout = () => {

    const { cart, totalPrice,deleteCart, addToCart,minusCart,clearCart } = useCartContext()

  return (
    <>
    <div className='flex justify-around font-serif text-gray-800 p-4 my-10'>
            <div className='max-w-[600px] border h-full'>
        <div className='m-10 border py-10 rounded-md'>
            {
                cart.map(item => (
                    <div className='flex justify-between px-7' key={item.product._id} item={item}>
                        <div>
                            <Link to={`/productDetails/${item.product._id}`}>
                            <img className='w-[30%]' src={item.product.images[0]} alt="" />
                            </Link>
                            <p>{item.product.name}</p>
                            <div className='flex gap-1'>
                            <p className=''>{item.quantity} x </p>    
                            <p className='text-red-700'>{item.product.price} :-</p>
                        </div>
                        <hr className='my-5 border'/>
                        </div>
                        <div className='flex flex-col justify-center text-center '>
                            <div className='flex justify-center align-middle text-center gap-4'>
                                <button onClick={() => minusCart(item.product._id)} 
                                className='bg-black py-1 px-3 text-white rounded-md text-sm mr-1'><i className="fa-solid fa-minus"></i></button>
                                <button onClick={() => addToCart(item.product)}
                                className='bg-black py-1 px-3 text-white rounded-md text-sm'><i className="fa-solid fa-plus"></i></button>
                                <i onClick={() => deleteCart(item.product._id)} 
                                className="text-red-700 fa-solid fa-xmark cursor-pointer hover:text-red-500 transition-colors"></i>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div> 
                ))
            }
        </div>
            <hr className='m-10 border'/>
    <div className='flex justify-between m-10'>
            <p className='font-serif'>Total Price: <span className='font-bold'>{totalPrice}</span>:-</p>
            <div>
                <button onClick={() => clearCart()} className='bg-red-600 py-2 px-5 ml-10 rounded-lg text-white
                hover:bg-red-500 transition-colors'>Clear cart</button>
            </div>
        </div>
        </div>
        <div className=''>
            <div className=''>
            <h1 className='text-center text-2xl mt-5 '>Checkout - Shipment Information</h1>   
            <OrderPayment cart={cart} totalPrice={totalPrice}/>
            </div>
        </div>
    </div>
</>
  )
}

export default Checkout