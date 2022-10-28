import React, { createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext =({ children }) => {
    const [showCart, setShowCart] = useState(false); // To Show CART
    const [cartItems, setCartItems] = useState([]); // To know how much items we have in cart
    const [totalPrice, setTotalPrice] = useState(0); // To know the price 
    const [totalQuantities, setTotalQuantities] = useState(0); // To know the quantity
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    /* Incremente and Decremente the value*/

    const incQty = () => setQty((prevQty) => prevQty + 1);

    const decQty = () => setQty((prevQty) => { 
        if(prevQty - 1 < 1) return 1;
        return prevQty - 1;
    });

    /* Add to the Cart */

    const addTo = (product, quantity ) => {
        const allReadyInCart = cartItems.find((item) => item._id === product._id); //we check if the item is already in cart
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if (allReadyInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            
            setCartItems([...cartItems, {...product }]);
        }
        console.log(product);
        toast.success(`${qty} ${product.name} added to the cart.`);
    };

    /* Remove from Cart */

    /*  */
    
    const toggleCartItemQuantity = (value, id) => {
        foundProduct = cartItems.find((item) => item._id === id);   // This is gonna find our item, select it
        index = cartItems.findIndex((product) => product._id === id); //This is gonna find the index of product with findIndex
        const newCartItems = cartItems.filter((item) => item._id !== id);

        if ( value === 'inc' ) {
            setCartItems( [...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price );
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1 );
        } else if ( value === 'dec' ) {
            if(foundProduct.quantity > 1) {
            setCartItems( [...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price );
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1 ) ;
            }
        }
    }



    return (
        <Context.Provider
            value= {{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                addTo,
                setShowCart,
                toggleCartItemQuantity
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);