import React, { createContext, useContext, useEffect, useState } from 'react'

export const GetFetchContext = createContext()

const GetFetchContextProvider = ({ children }) => {
  const [shopList, setShopList] = useState([])
  const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/products')
  const [isloading, setisLoading] = useState(false)
 useEffect(()=>{
   const getData = async () => {
     try {
       setisLoading(true)
       const res = await fetch(url)
       if (!res.ok) {
         throw new Error(`${res.status} ${res.statusText}`)
       }
       const data = await res.json()
       setisLoading(false)
       setShopList(data)
     } catch (error) {
       console.error(error)
     }
   }
   getData()
  },[url])
  
  const value = {
    isloading,
    shopList,
  }

  return (
    <GetFetchContext.Provider value={value}>
      {children}
    </GetFetchContext.Provider>
  )
}

export default GetFetchContextProvider

export const useGetFetchContext = () => {
  const context = useContext(GetFetchContext)

  if (!context) {
    throw new Error('useGetFetchContext must be within a provider')
  }

  return context
}
