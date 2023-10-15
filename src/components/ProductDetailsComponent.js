'use client';

import Image from "next/image";
import { useContext, useState } from "react";
import AddToCartBtnComponent from "./AddToCartBtnComponent";
import VariantChangeComponent from "./VariantChangeComponent";
import { ProductContext } from "./context/ProductContextProvider";

export default function ProductDetailsComponent({ product, sizes, colors }) {
    const [variant, setVariant] = useState({ color: "RED", size: "S" });

    const [user, logout, cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);

    console.log(variant)
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 md:py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col-reverse md:flex-row">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            {product.category}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.title}{' '} {variant.size}/{variant.color}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>
                            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                        </div>
                        <p className="leading-relaxed mb-4 h-24 overflow-auto">{product.description}</p>
                        <VariantChangeComponent name = "color" values={colors} variant = {variant} variantChangeHandler={setVariant} />
                        <VariantChangeComponent name = "size" values={sizes} variant={variant} variantChangeHandler={setVariant}/>
                        <div className="flex border-t border-b mb-6 border-blue-200 py-2">
                            <span className="text-gray-500">Quantity</span>
                            <span className="ml-auto text-gray-900">{(product.title in cart)?cart[product.title].qty: 0}</span>
                        </div>
                        <AddToCartBtnComponent product={product} variant = {variant}/>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[36rem] mt-0 md:mt-8 h-64 object-contain object-center rounded" src={product.images[0]} />
                </div>
            </div>
        </section>)
}