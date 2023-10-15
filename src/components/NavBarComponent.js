'use client'
import Image from "next/image";
import Link from "next/link"
import { useContext, useEffect, useRef, useState } from "react"
import { ProductContext } from "./context/ProductContextProvider";
import { usePathname, useRouter } from "next/navigation";

export default function NavBarComponent() {

  const ref = useRef();
  const [user, logout, cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);
  const [dropdown, setDropdown] = useState(false);

  const path = usePathname();
  let exempted = ["/orders", "/order", "/checkout"];

  function toggleCart() {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
       ref.current.classList.remove("hidden");
      ref.current.classList.add("translate-x-0");
      ref.current.classList.add("block");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.remove("block");      
      ref.current.classList.add("translate-x-full");
      ref.current.classList.add("hidden");
    }
  }
  return (<header className="text-gray-600 bg-white body-font mb-2 shadow-xl sticky top-0 z-20">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/" className="flex title-font font-medium items-center mr-auto md:mr-0 text-gray-900 mb-4 md:mb-0 md:pr-0">
        <Image src="/logo.png" height={45} width={45} />
        <span className="ml-3 text-xl">RYL-SHOP</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap md:items-center text-xs md:text-base md:justify-center">
        <Link href="/category/mencasuals" className="md:mr-4 mr-2 hover:text-gray-900">{`Men's Casuals`}</Link>
        <Link href="/category/electronics" className="md:mr-4 mr-2 hover:text-gray-900">Electronics</Link >
        <Link href="/category/smartphones" className="md:mr-4 mr-2 hover:text-gray-900">Smartphones</Link>
        <Link href="/category/laptops" className="md:mr-4 mr-2 hover:text-gray-900">Laptops</Link >
        <Link href="/category/womencasuals" className="md:mr-4 mr-2 hover:text-gray-900">{`Women's Casuals`}</Link>
        <Link href="/category/skincare" className="md:mr-4 mr-2 hover:text-gray-900">Skincare</Link >
        <Link href="/category/fragrances" className="md:mr-4 mr-2 hover:text-gray-900">Fragrances</Link>
        <Link href="/category/homedecorations" className="md:mr-4 mr-2 hover:text-gray-900">Decorations</Link >
        </nav>
      <div className="absolute top-3 right-2 md:static w-24 md:w-28 flex justify-around md:justify-between items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
        {user.value && <i onMouseOver={()=>setDropdown(true)} onMouseOut={()=>setDropdown(false)}
          className="bi bi-person-circle text-base md:text-2xl text-blue-500 hover:text-blue-600"></i>}

        {dropdown &&
          <div className="absolute right-20 top-6 md:right-32 md:top-12 bg-white border-2 border-blue-200 shadow-lg p-3 rounded-md w-32"
            onMouseOver={()=>setDropdown(true)} onMouseOut={()=>setDropdown(false)}>
            <ul>
              <Link href = "/account"><li className="py-1 text-sm hover:text-blue-400 font-bold">My Account</li></Link>
              <Link href = "/orders"><li className="py-1 text-sm hover:text-blue-400  font-bold">Orders</li></Link>
              <Link href = "/login"><li onClick = {()=>{ logout(); setDropdown(false);}} className="py-1 text-sm hover:text-blue-400 font-bold">Logout</li></Link>
            </ul>
          </div>}

        {!user.value && <Link href="/login"><button className="p-1 md:p-2 bg-blue-500 hover:bg-blue-600 text-xs md:text-sm text-white text-center rounded-md">Login</button></Link>}
        <i onClick={toggleCart} className="bi bi-cart-check-fill text-base md:text-2xl text-blue-500 hover:text-blue-600"></i>
      </div>
      <div ref={ref} className={`absolute w-60 md:w-72 h-[100vh] top-0 right-0 bg-blue-100 p-10 transform transition-all ${(Object.keys(cart).length === 0 || exempted.includes(path)) ? "translate-x-full hidden" : "translate-x-0 block"}`}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span className="absolute top-4 right-2 cursor-pointer text-2xl text-blue-400 hover:text-blue-600"><i onClick={toggleCart} className="bi bi-arrow-right-square-fill"></i></span>
        {
          Object.keys(cart).length <= 0 && <h1 className="text-center font-base my-4">Your cart is empty!</h1>
        }
        <ol className="list-decimal font-semibold">
          {
            Object.keys(cart).map(item => (
              <li key={item}>
                <div className="flex my-4">
                  <div className="w-2/3">{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
                  <div className="flex justify-center items-center w-1/3">
                    <i onClick={() => addToCart(item, 1, 499, "Sticker-1", "M", "Blue")} className="bi bi-plus-circle-fill cursor-pointer text-blue-500" />
                    <span className="mx-2 w-4 text-center text-sm">{cart[item].qty}</span>
                    <i onClick={() => removeQtyFromCart(item, 1)} className="bi bi-dash-circle-fill cursor-pointer text-blue-500" />
                  </div>
                </div>
              </li>))
          }
        </ol>
        <p className="font-bold pb-2">Subtotal : &#x20b9; {subTotal}</p>

        <div className="flex justify-around">
          <Link href={"/checkout"}><button disabled = {Object.keys(cart).length === 0} className="disabled:bg-blue-400 inline-flex text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-xs md:text-sm">Check Out</button></Link>
          <button onClick={clearCart} disabled = {Object.keys(cart).length === 0}  className="disabled:bg-blue-400 inline-flex text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-xs md:text-sm">Clear Cart</button>
        </div>
      </div>
    </div>
  </header>)
}