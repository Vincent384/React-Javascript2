import React from 'react'
import Images from '../Images/Images'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const LandingPage = () => {
    

  return (
    <>
    <header className='py-10 bg-gray-100 flex'>
        <div className=" flex mx-5 ">
          <div className="w-3/5 flex text-center flex-col bg-cyan-600 mr-5 rounded-xl font-serif">
            <p className='text-2xl mt-10 text-white'>Welcome to Ello</p>            
            <h1 className='text-3xl mt-3 text-white'>Start shop Quality instead of Quantity</h1>
              <small className='text-white underline cursor-pointer'>Go to our FaceBook page!</small>
              <div className='flex justify-center'>
                <div>
                <lottie-player src="https://lottie.host/85d9033f-6e51-4c88-95e1-ed0443ae2284/3sbVrHyNI4.json" background="##FFFFFF" speed="1" style={{ height: '300px', width: '300px' }} loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
              </div>
          </div>
          <img className='w-3/5 border rounded-xl cursor-pointer' src={Images.imgLandingPage} alt="" />
        </div>
    </header>
    </>
  )
}
