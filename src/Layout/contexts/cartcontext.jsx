import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) =>{

    

    const calculateTotalPrice = (cart) => {
        let totalPrice = 0;
        cart.forEach((item) => {
          totalPrice += item.quantity * item.product.price;
        });
        return totalPrice;
      };
        
    const countQuantity = (cart) =>{
        let totalitems = 0
        cart.forEach(item =>{
            totalitems += item.quantity
        })
        return totalitems
    }
    const [cart, setCart] = useState([])
    const totalQuantity = countQuantity(cart)
    const totalPrice = calculateTotalPrice(cart)
    
    const addToCart = (product) =>{
      const findProduct  = cart.find((item => item.product._id === product._id))
      
      const newCart = []  
      cart.forEach((item => {
        newCart.push(item)
      }))

     if (findProduct){
        findProduct.quantity += 1
     }else{
        newCart.push({product,quantity:1})
     }
     setCart(newCart)
    }
    const minusCart = (productId) =>{
        const findProduct = cart.find((item) => item.product._id === productId)
        
        let newCart = []  
        cart.forEach((item => {
          newCart.push(item)
        }))

        if(findProduct.quantity <= 1){
            newCart = newCart.filter((item => item.product._id !== productId))
        }else{
            findProduct.quantity --
        }
        
        setCart(newCart)

    }

    const deleteCart = (productId) =>{
      const newCart =  cart.filter((item => item.product._id !== productId))
        setCart(newCart)
        console.log(newCart)
    }

    const clearCart = () => {
        setCart([])
    }


    const value= {
        cart,
        addToCart,
        minusCart,
        deleteCart,
        totalQuantity,
        totalPrice,
        clearCart,
        setCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context){
        throw new Error('useCartContext must be within a provider')
    }
    return context
}