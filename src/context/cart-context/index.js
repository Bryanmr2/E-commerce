import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const findProductById = (productInfo) => {
        return cart.find(x => x.id === productInfo.id)
    }

    const addCartItem = (newItem) => {
        let productInfo = {
            id: newItem.id,
            title: newItem.title,
            qty: 1
        }
        let foundProduct = findProductById(productInfo);
        if (foundProduct) {
            Object.assign(foundProduct, {
                qty: foundProduct.qty+1
            })
        } else {
            setCart(cart.concat([productInfo]))
        }
    }

    const injectValues = {
        cart,
        addCartItem
    }

    return (
        <CartContext.Provider value={injectValues}>
            {children}
        </CartContext.Provider>
    )
} 