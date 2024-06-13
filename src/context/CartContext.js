import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider=({children})=>{

    const addToCart=(item)=>{
         const itemExit= carts.findIndex((cart)=>cart.id === item.id);
         if(itemExit=== -1){
            setCarts([...carts,item])
         }
    };

    const[carts,setCarts]= useState([1,2]);
    const value={
        carts,
        addToCart,
    };

    return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
 }
