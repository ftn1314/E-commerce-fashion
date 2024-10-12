import react, { createContext, useState } from 'react';
 import all_product from '../Components/Assests/all_product' 

export const ShopContext=createContext(null);
const getDefaultCart = () =>{
    let cart ={};
    for (let index = 0; index <all_product.length+1; index++) {
        cart[index]=0;   
    }
    return cart;
}
const ShopContextProvider=(props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());

    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        //console.log(cartItems)
    }    

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }  
    
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        console.log("cart",cartItems)
        for (const items in cartItems)
        {
            console.log("test1")
            console.log("item",items)
            console.log("cartItems",cartItems[items])
        
            if(cartItems[items]>0)
            {
                console.log("test2")
                let itemInfo=all_product.find((product)=>product.id===Number(items));
                console.log("test", itemInfo)
                totalAmount += itemInfo.new_price * cartItems[items];
                console.log( "new price" ,totalAmount)
            }
           
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalIteem=0;
        for (const item in cartItems)
        {
            if (cartItems[item]>0)
            {
                totalIteem +=cartItems[item];
            }
        }
        return totalIteem;
    }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider 