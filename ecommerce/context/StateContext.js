import React, { createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext =({ children }) => {
    const [showCart, setShowCart] = useState(false); // To Show CART
    const [cartItems, setCartItems] = useState(); // To know how much items we have in cart
    const [totalPrice, setTotalPrice] = useState(); // To know the price 
    const [totalQuantities, setTotalQuantities] = useState(); // To know the quantity
    const [qty, setQty] = useState(1);

    return (
        <Context.Provider
            value= {{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty
            }}>
            {children}
        </Context.Provider>
    )

}