'use client'

import { ProductContext } from "@/components/context/ProductContextProvider";
import Link from "next/link";
import { useContext } from "react";

export default function CheckOut() {
    const [cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);

    return (
        <section className="text-blue-600 body-font py-4">
            <h1 className="font-bold text-3xl my-4 text-center tracking-wider">CHECK OUT </h1>
            <h2 className="font-bold text-lg text-center tracking-wide">1.Delivery Details</h2>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="full-name" className="leading-7 text-sm text-blue-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="email" className="leading-7 text-sm text-blue-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="addrs" className="leading-7 text-sm text-blue-600">Address</label>
                        <textarea id="addrs" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="phone" className="leading-7 text-sm text-blue-600">Phone</label>
                        <input type="tel" id="phone" name="full-name" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="city" className="leading-7 text-sm text-blue-600">City</label>
                        <input type="email" id="city" name="email" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="state" className="leading-7 text-sm text-blue-600">State</label>
                        <input type="text" id="state" name="full-name" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="pin" className="leading-7 text-sm text-blue-600">PinCode</label>
                        <input type="number" id="pin" name="email" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="w-3/4 mx-auto py-4">
                <h2 className="font-bold text-lg text-center tracking-wide pb-2">2.Review Cart item</h2>
                <div className="bg-sky-100 p-8">
                    {
                        Object.keys(cart).length <= 0 && <h1 className="text-center font-base my-4">Your cart is empty!</h1>
                    }
                    <ol className="list-decimal font-semibold border-red-300">
                        {
                            Object.keys(cart).map(item => (
                                <li key={item}>
                                    <div className="flex my-4">
                                        <div className="w-2/3">{cart[item].name}</div>
                                        <div className="flex items-center w-1/3">
                                            <i onClick={() => addToCart(item, 1, 499, "Sticker-1", "M", "Blue")} className="bi bi-plus-circle-fill cursor-pointer text-blue-500" />
                                            <span className="mx-2 w-4 text-center text-sm">{cart[item].qty}</span>
                                            <i onClick={() => removeQtyFromCart(item, 1)} className="bi bi-dash-circle-fill cursor-pointer text-blue-500" />
                                        </div>
                                    </div>
                                </li>))
                        }
                    </ol>
                    <p className="font-bold">Subtotal : &#x20b9; {subTotal}</p>
                </div>
                <Link href={"/order"}><button className="inline-flex text-white bg-blue-500 border-0 my-2 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">
                    <i className="bi bi-bag-check-fill pr-2" />Checkout
                </button>
                </Link>

            </div>
        </section>)
}