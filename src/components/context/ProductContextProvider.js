'use client';

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {

    const [progress, setProgress] = useState(0)
    const [cart, setCart] = useState({ items: {}, subTotal: 0 });
    const [user, setUser] = useState({ value: null });
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
       setProgress(40)
        try {
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
            if (localStorage.getItem("token")) {
                setUser({ value: localStorage.getItem("token") });
            }
            setProgress(100);
        } catch (error) {
            console.error(error);
            localStorage.clear();
        }
    }, [pathname])

    function buyNow( itemCode, qty, price, name, img, size, variant) {
        let newCart = { items: { [itemCode]: { qty, price, name, img, size, variant } }, subTotal: price };
        setCart(newCart);
        saveCart(newCart);
        router.push("/checkout");
    }

    const findSubTotal = (newCart) => {
        let keys = Object.keys(newCart.items);
        let subt = 0;
        for (let i = 0; i < keys.length; i++) {
            subt += cart.items[keys[i]].qty * cart.items[keys[i]].price;
        }
        newCart.subTotal = subt;
    }

    const saveCart = (myCart) => {
        localStorage.setItem('cart', JSON.stringify(myCart));
    }

    const addToCart = (itemCode, qty, price, name, img, size, variant) => {
        let newCart = cart;
        if (itemCode in newCart.items) {
            newCart.items[itemCode].qty = newCart.items[itemCode].qty + qty;
        } else {
            newCart.items[itemCode] = { qty, price, name, img, size, variant }
        }
        findSubTotal(newCart);
        setCart({ ...newCart });
        saveCart({ ...newCart });
    }

    function removeQtyFromCart(itemCode, qty) {
        let myCart = cart;
        if (itemCode in myCart.items) {
            myCart.items[itemCode].qty = myCart.items[itemCode].qty - qty;
        }

        if (myCart.items[itemCode].qty <= 0) {
            delete myCart.items[itemCode];
        }

        findSubTotal(myCart);
        setCart({ ...myCart })
        saveCart({ ...myCart });
    }

    const clearCart = () => {
        setCart({ items: {}, subTotal: 0 });
        saveCart({ items: {}, subTotal: 0 });
    }

    function logout() {
        setUser({ value: null });
        localStorage.removeItem("token");
    }

    return (
        <ProductContext.Provider value={[user, logout, cart.items, buyNow, addToCart, removeQtyFromCart, clearCart, cart.subTotal]}>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            {children}
        </ProductContext.Provider>
    );

}