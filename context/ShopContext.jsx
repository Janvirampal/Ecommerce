import  { createContext, useState } from "react";
import PropTypes from "prop-types";
import product_fruits from "../components/Assets/Exoticfruits";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<product_fruits.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removecart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = { product_fruits,cartItems,addToCart,removecart };
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
