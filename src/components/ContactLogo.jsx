import React from 'react';
import Images from '../Images/Images';

export const ContactLogo = () => {
  return (
    <div className='flex justify-center items-center align-middle'>
      <img
        className='object-cover object-center w-full h-[400px] relative'
        src={Images.imgContact}
        alt=""
      />
      
        <h1 className='text-4xl text-white font-serif absolute'>Contact us</h1>
      </div>
    
  )
}
