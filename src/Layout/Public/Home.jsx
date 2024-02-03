import React, { useEffect, useState } from 'react'
import { LandingPage } from '../../components/LandingPage'
import { Product } from '../../components/Product'
import { Categories } from '../../components/Categories'
import { useGetFetchContext } from '../contexts/getfetchcontext'


const Home = () => {


  const { isloading, shopList } = useGetFetchContext()

  return (
    <>

    <LandingPage/>
    <Categories/>
    <h1 className='text-3xl text-center mb-10 mt-2 font-serif'>Best selling products</h1>
    <div className='flex flex-wrap justify-center gap-5 mx-auto my-3'>
    { 
      isloading ? <i className="fa-solid fa-spinner fa-spin flex justify-center "></i> :  shopList.map((item =>{
        return <Product key={item._id} item={item} />
      }))
      
    }
    </div>
    
    
    </>
  )
}

export default Home