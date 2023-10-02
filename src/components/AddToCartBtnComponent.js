'use client';

import React, { useContext, useState } from "react";
import { ProductContext } from "./context/ProductContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddToCartBtnComponent({ product, variant }) {
    const [cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);
    const availablePins = [752001, 752002, 752003, 752004];
    const [pin, setPin] = useState('');
    const [isAvailable, setIsAvailable] = useState();

    function checkAvailability(event) {
        
        if (availablePins.includes(parseInt(pin))) {
            setIsAvailable(true);
            toast.success('Services available on your location', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });       
             } else {
            setIsAvailable(false);
            toast.error('Sorry, Services are not available on your location', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });       
        }
    }
    let productId = product.title.replace(/\s/g, "") + variant.size + variant.color;

    return (<>
        <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">&#x20b9; {product.price}</span>
            <button onClick={() => buyNow(productId, 1, product.price, product.title, variant.size, variant.color)} className="flex ml-auto text-white bg-blue-500 text-sm md:text-base py-2 px-2 border-0 md:py-2 md:px-4 focus:outline-none hover:bg-blue-600 rounded">Buy Now</button>
            <button onClick={() => addToCart(productId, 1, product.price, product.title, variant.size, variant.color)} className="flex ml-auto text-white bg-blue-500 text-sm md:text-base py-2 px-2 border-0 md:py-2 md:px-4 focus:outline-none hover:bg-blue-600 rounded">AddTo Cart</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <i className="bi bi-suit-heart-fill"></i>
            </button>
        </div>
        <div className="h-24">
            <div className="mt-4">
                <input type="text" onChange={event => setPin(event.target.value)} placeholder="pin-code" className="outline-none border-blue-500 focus:border-b-2 w-32 md:w-52 mr-2" />
                <button onClick={checkAvailability} className="ml-auto text-white text-xs md:text-base bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded ">Check PIN</button>
                <ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

                {(isAvailable !== undefined && isAvailable === true)
                    && <p className="text-green-400 mt-2">Services available on your location</p>}
                {(isAvailable !== undefined && isAvailable === false)
                    && <p className="text-red-400 mt-2">Services not available on your location</p>}
            </div>
        </div>
    </>);
}