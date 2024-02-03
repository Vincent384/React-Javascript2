import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetFetchContext } from '../contexts/getfetchcontext'
import { useCartContext } from '../contexts/cartcontext'

const ProductDetails = () => {

  const { id } = useParams()
  
 const { shopList, isloading } = useGetFetchContext()
 const [activeImage, setActiveImage] = useState(0)
 
 const product = shopList.find((item => item._id === id))
 
 const { addToCart,minusCart,cart } = useCartContext()

  return (
<>

{
  isloading ? <i className="fa-solid fa-spinner fa-spin flex justify-center"></i> : product && (
    <>
    <div className='flex overflow-hidden w-[1200px] m-auto my-10'>
    <div className='flex flex-col align-middle m-auto'>
      <div className='flex justify-center'>
      <img className='w-[50%] border border-grey rounded-md cursor-pointer' src={product.images[activeImage]} alt="" />
      </div>
      <div className='flex m-auto max-w-[70%]'>
        <div className='flex w-[600px] m-auto my-4 gap-1'> 
        {
            product.images.map((image,index)=>{
              return <div className='cursor-pointer' onClick={() => setActiveImage(index)} key={index}>
                <img className='border border-grey rounded-md' src={image} alt="" />
              </div>
            })
          }
        </div>
      </div>
    </div>
      <div className=''>
      <p className='ml-5 text-2xl font-serif text-slate-600'>{product.name}</p>
      <p className='ml-5 mt-5 text-md font-serif text-slate-600 overflow-hidden w-[500px]'>{product.description}</p>
      <hr className='m-8 border-slate-600' />
      <div className='text-center'>
      <p className='font-serif text-red-600 text-xl font-bold mb-6'>{product.price} :-</p>
        <div className='flex justify-center cursor-pointer'>
          <button onClick={() => addToCart(product)} className='border border-gray-300 ml-5 px-4 py-1 
          rounded-md bg-red-500 text-white hover:bg-red-400 transition-colors '>Add to Cart</button>
      </div>
      </div>
    </div>

    </div>
  
    </>
  )
}

</>
  )
}

export default ProductDetails