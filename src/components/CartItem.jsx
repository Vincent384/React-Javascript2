import React from 'react'
import { useGetFetchContext } from '../Layout/contexts/getfetchcontext'
import { useCartContext } from '../Layout/contexts/cartcontext'
import { Link } from 'react-router-dom'

export const CartItem = ({item}) => {

  const { minusCart,deleteCart,addToCart } = useCartContext()

  return (
    <div className='flex justify-between mt-2' key={item.product._id} item={item}>
    <div>
        <div>
        <img className='w-[30%]' src={item.product.images[0]} alt="" />
        </div>
        <p>{item.product.name}</p>
        <div className='flex gap-1'>
        <p className=''>{item.quantity} x </p>    
        <p className='text-red-700'>{item.product.price} :-</p>
    </div>
    <hr className='my-4 border'/>
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
  )
}
