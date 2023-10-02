'use client'

import Link from "next/link"
import { useContext, useRef } from "react"
import { ProductContext } from "./context/ProductContextProvider";

export default function NavBarComponent() {

  const ref = useRef();
  const [cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);
  function toggleCart() {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  }
  return (<header className="text-gray-600 bg-white body-font mb-2 shadow-xl sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/" className="flex title-font font-medium items-center pr-16 text-gray-900 mb-4 md:mb-0 md:pr-0">
        <img src="/logo.png" height={45} width={45} />
        <span className="ml-3 text-xl">RYL-SHOP</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap md:items-center text-base md:justify-center">
        <Link href="/category/shirts" className="mr-5 hover:text-gray-900">TShirt</Link>
        <Link href="/category/hoodies" className="mr-5 hover:text-gray-900">Hoodies</Link >
        <Link href="/category/mugs" className="mr-5 hover:text-gray-900">Mugs</Link>
        <Link href="/category/stickers" className="mr-5 hover:text-gray-900">Stickers</Link >
      </nav>
      <div  className="absolute top-3 right-2 md:static w-20 md:w-32 flex justify-between items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
        <Link href = "/login"><i className = "bi bi-person-circle text-base md:text-2xl text-blue-500 hover:text-blue-600"></i></Link>
        <i onClick={toggleCart} className="bi bi-cart-check-fill text-base md:text-2xl text-blue-500 hover:text-blue-600"></i>
      </div>
      <div ref={ref} className={`absolute w-60 md:w-72 h-[100vh] top-0 right-0 bg-blue-100 p-10 transform transition-transform ${Object.keys(cart).length === 0? "translate-x-full" : "translate-x-0"}`}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span className="absolute top-4 right-2 cursor-pointer text-2xl text-blue-400 hover:text-blue-600"><i onClick={toggleCart} className="bi bi-arrow-right-square-fill"></i></span>
        {
          Object.keys(cart).length <= 0 && <h1 className="text-center font-base my-4">Your cart is empty!</h1>
        }
        <ol className="list-decimal font-semibold">
          {
            Object.keys(cart).map(item => (
              <li key = {item}>
                <div className="flex my-4">
                  <div className="w-2/3">{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
                  <div className="flex justify-center items-center w-1/3">
                    <i onClick = {()=>addToCart(item, 1, 499, "Sticker-1", "M", "Blue")}className="bi bi-plus-circle-fill cursor-pointer text-blue-500" />
                    <span className="mx-2 w-4 text-center text-sm">{cart[item].qty}</span>
                    <i onClick = {()=>removeQtyFromCart(item, 1)}className="bi bi-dash-circle-fill cursor-pointer text-blue-500" />
                  </div>
                </div>
              </li>))
          }
        </ol> 
        <p className="font-bold pb-2">Subtotal : &#x20b9; {subTotal}</p>

        <div className="flex justify-around">
          <Link href={"/checkout"}><button className="inline-flex text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-xs md:text-sm">Check Out</button></Link>
          <button onClick={clearCart} className="inline-flex text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-xs md:text-sm">Clear Cart</button>
        </div>
      </div>
    </div>
  </header>)
}