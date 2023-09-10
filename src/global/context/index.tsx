"use client"
import { FC, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react"
import { cartReducer } from "../reducer"
import { json } from "stream/consumers"

export const cartContext = createContext<any>("Hi")

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {

    const iniatizilerofCart = {
        cart: [
            {
                productId: "",
                quantity: 2,
            },
        ],
    }
    const [state, dispatch] = useReducer(cartReducer, iniatizilerofCart)
    useEffect(() => {
        let cart = localStorage.getItem("cart") as string;
        if (cart === null) {
            localStorage.setItem("cart", JSON.stringify(state.cart));
        } else {
            iniatizilerofCart.cart = JSON.parse(cart);
        }
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}
export default ContextWrapper