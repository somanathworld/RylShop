'use client'

import { ProductContext } from "@/components/context/ProductContextProvider";
import { useContext, useEffect, useState } from "react";

export default function CheckOut() {

    const [user, logout, cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);

    const [deliveryDet, setDeliveryDet] = useState({
        name: "",
        email: "",
        addrs: "",
        phone: "",
        pin: "",
        city: "",
        state: "",
        isServicable: ""
    });
    const [disabled, setDisabled] = useState(true);

    const [availablePincode, setAvailablePincodes] = useState({})
    useEffect(() => {
        async function fetchPins() {
            let resp = await fetch("https://next-js-somanathworld.vercel.app/api/pinservice");
            let data = await resp.json();
            setAvailablePincodes(data.pincodes);
        }

        let token = localStorage.getItem("token");
        async function fetchUser() {
            let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/getUser?token=${token}`)
            let data = await resp.json();
            const { fname, email, address, phone, pincode, city, state } = data.user[0];
            setDeliveryDet({
                name: fname, email, addrs: address, phone
            })
        }
        fetchPins();
        fetchUser();
    }, [])



    function handleChange(event) {
        if (event.target.name === 'name')
            setDeliveryDet({ ...deliveryDet, name: event.target.value })

        if (event.target.name === 'email')
            setDeliveryDet({ ...deliveryDet, email: event.target.value })

        if (event.target.name === 'addrs')
            setDeliveryDet({ ...deliveryDet, addrs: event.target.value })

        if (event.target.name === 'phone')
            setDeliveryDet({ ...deliveryDet, phone: event.target.value })

        if (event.target.name === 'pin') {
            if (Object.keys(availablePincode).includes(event.target.value)) {
                setDisabled(false)
                setDeliveryDet({ ...deliveryDet, pin: event.target.value, state: availablePincode[event.target.value]['state'], city: availablePincode[event.target.value]['city'], isServicable: true });
            } else {
                setDisabled(true)
                setDeliveryDet({ ...deliveryDet, pin: event.target.value, state: "", city: "", isServicable: false });
            }
        }

    }
    console.log("service : " + deliveryDet.isServicable)

    async function initiatePayment() {
        let oid = Math.floor(Math.random() * Date.now());
        let successUrl = `${window.origin}/orderconfirmation?oid=${oid}`;
        let failuerUrl = `${window.href}`;
        const prodItems = { cart, subTotal, oid, deliveryDet, successUrl, failuerUrl }
        let resp = await fetch('https://next-js-somanathworld.vercel.app/api/payment', {
            cache: 'no-cache',
            method: 'POST',
            body: JSON.stringify(prodItems),
        });
        const data = await resp.json();
        if (data.url === undefined) {
            data.error === "Product Price changed.Try again later!" ? clearCart() : ""
            alert(data.error)
        } else {
            window.location.href = data.url;
        }
    }


    return (
        <section className="text-gray-600 body-font py-4 min-h-screen">
            <h1 className="font-bold text-3xl my-4 text-center tracking-wider">CHECK OUT </h1>
            <h2 className="font-bold text-lg text-center tracking-wide">1.Delivery Details</h2>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input onChange={handleChange} type="text" id="name" value={deliveryDet.name} name="name" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input onChange={handleChange} type="email" id="email" value={deliveryDet.email} name="email" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="addrs" className="leading-7 text-sm text-gray-600">Address</label>
                        <textarea onChange={handleChange} id="addrs" name="addrs" value={deliveryDet.addrs} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input onChange={handleChange} type="tel" id="phone" value={deliveryDet.phone} name="phone" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="pin" className="leading-7 text-sm text-gray-600">PinCode</label>
                        {deliveryDet.isServicable === true && <span className=" ml-4 text-xs md:text-base text-green-600">Delivery available</span>}
                        {deliveryDet.isServicable === false && <span className="ml-4 text-xs md:text-base text-red-600">Delivery not available</span>}
                        <input onChange={handleChange} type="number" id="pin" value={deliveryDet.pin} name="pin" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>

            </div>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" value={deliveryDet.state} readOnly={true} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" value={deliveryDet.city} readOnly={true} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                            <i onClick={() => addToCart(item, 1, 499, "Sticker-1", "M", "Blue")} className="bi bi-plus-circle-fill cursor-pointer text-gray-500" />
                                            <span className="mx-2 w-4 text-center text-sm">{cart[item].qty}</span>
                                            <i onClick={() => removeQtyFromCart(item, 1)} className="bi bi-dash-circle-fill cursor-pointer text-gray-500" />
                                        </div>
                                    </div>
                                </li>))
                        }
                    </ol>
                    <p className="font-bold">Subtotal : &#x20b9; {subTotal}</p>
                </div>
                <button disabled={disabled} onClick={initiatePayment} className="disabled:bg-blue-200 inline-flex text-white bg-blue-500 border-0 my-2 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">
                    <i className="bi bi-bag-check-fill pr-2" />Pay &#x20b9; {subTotal}
                </button>

            </div>
        </section>)
}