import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const OrderConfirmed = () => {

  return (
    <div className='m-auto my-10 max-w-[900px] text-center'>
        <div className='flex align-middle'>
            <Player
            loop={false}
            src="https://lottie.host/3c082c05-dd7c-494e-b4ab-da29c83a37b0/BCTObqn1b2.json"
            style={{ height: '300px', width: '300px' }}
            >
            </Player>
            <lottie-player src="https://lottie.host/3c082c05-dd7c-494e-b4ab-da29c83a37b0/BCTObqn1b2.json" background="#fff" speed="1"  style={{ height: '300px', width: '300px' }} autoplay direction="1" mode="normal"></lottie-player>
        </div>
            <p className='text-2xl text-gray-800'>Order Complete!</p>
            <Link to={'/'}><small className='mb-10 underline text-blue-400'>Go back to shop</small></Link>
    </div>
  );
};

export default OrderConfirmed;
