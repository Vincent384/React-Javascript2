import React, { useState } from 'react';
import Images from '../Images/Images';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../Layout/contexts/cartcontext';

export const Product = ({item}) => {

  const { addToCart } = useCartContext()

  return (
    <>
      <div className='flex flex-wrap flex-col w-[430px] py-5 px-3 border rounded-md bg-stone-100 hover:bg-stone-50 transition-colors'>
      <Link to={`productDetails/${item._id}`}>
        <img className='max-w-[400px] cursor-pointer' src={item.images[0]} alt="" />
      </Link>
        <h2 className='text-lg font-serif my-3 text-slate-600 font-bold'>{item.name}</h2>
        <p className='my-2 font-serif text-red-600 font-bold'>{item.price +' kr'}</p>
        <p className='font-serif text-slate-600'>{item.description.slice(0,150)+ '....'}</p>
        <div className='flex justify-end'>
        <button><i onClick={() => addToCart(item)} className="text-gray-600 fa-solid 
        fa-cart-shopping m-5 scale-150 cursor-pointer hover:text-gray-800"></i></button>
        </div>
      </div>    

      

    </>
    
  );
};
