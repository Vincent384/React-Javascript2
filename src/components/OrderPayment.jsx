import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../Layout/contexts/cartcontext'

export const OrderPayment = ({totalPrice,cart}) => {
    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/orders')

    const { setCart } = useCartContext()
    let navigate = useNavigate()

     const handleClick = () =>{
        let sendOrder = {
            products:[],

        };
        cart.forEach((item) => {
          sendOrder.products.push({
           productId:item.product._id,
           quantity:item.quantity
          });
        });
    
        console.log(sendOrder);
    
        const postOrder = async () => {
          try {
            const res = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body:JSON.stringify(sendOrder),
            });
    
            if (!res.ok) {
              throw new Error(res.status, res.statusText);
            }
    
            const data = await res.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
          setCart([])
          navigate('/orderconfirmed');
        };
    
        postOrder();
      
    }

  return (
    <div>
        <div className='w-full p-5 border'>
            <div className='font-serif'>
                <h2 className='font-serif text-lg font-bold mb-2'>Who should the order be sent to?</h2>
                <div className='flex'>
                    <Link to={'/auth/login'} className='bg-red-600 py-2 px-3 text-white
                     rounded-md mr-2 hover:bg-red-500 transition-colors'>Login</Link>
                    <span className='text-sm'>or continue below.
                    You can create an account after you have paid</span>
                </div>
                <div className='flex mt-3 gap-4'>
                    <div>
                        <input className='border p-1 rounded-md' type="email" placeholder='Email*' />
                        <p className='text-sm'>Here do we send order-information</p>
                    </div>
                    <div>
                        <input className='border p-1 rounded-md' type="text" placeholder='YYYYMMDDXXXX' />
                        <p className='text-sm'>Get your adress</p>
                    </div>
                </div>
               
                <button onClick={handleClick} className='border px-5 py-2 bg-cyan-600
                 text-white rounded-md mt-3
                  hover:bg-cyan-500 transition-colors'>
                    Complete order on <span className='text-white bg-emerald-600 rounded-lg px-2 py-1'>{totalPrice}:-</span>
                    </button>                
                
            </div>
        </div>
    </div>
  )
}
