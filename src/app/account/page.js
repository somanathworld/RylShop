'use client';

import { ProductContext } from "@/components/context/ProductContextProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function MyAccount() {


    const router = useRouter();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        } else {
            fetchUser();
        }

        async function fetchUser() {
            let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/getUser?token=${token}`)
            let data = await resp.json();
            const { fname, email, address, phone, pincode, city, state } = data.user[0];
            setuserDetails({
                name: fname, email: email, addrs: address, phone, pin: pincode, city, state
            })

            console.log(data.user[0]);
        }

    }, [])
    const [user, logout, cart, buyNow, addToCart, removeQtyFromCart, clearCart, subTotal] = useContext(ProductContext);

    const [userDetails, setuserDetails] = useState({
        name: "",
        email: "",
        addrs: "",
        phone: "",
        pin: "",
        city: "",
        state: "",
        pwd: "",
        npwd : "",
        cpwd: ""
    });

    function handleChange(event) {
        if (event.target.name === 'name')
            setuserDetails({ ...userDetails, name: event.target.value })

        if (event.target.name === 'email')
            setuserDetails({ ...userDetails, email: event.target.value })

        if (event.target.name === 'addrs')
            setuserDetails({ ...userDetails, addrs: event.target.value })

        if (event.target.name === 'phone') {
            setuserDetails({ ...userDetails, phone: event.target.value })
        }

        if (event.target.name === 'pin') {
            setuserDetails({ ...userDetails, pin: event.target.value })
        }

        if (event.target.name === 'city') {
            setuserDetails({ ...userDetails, city: event.target.value })
        }
        if (event.target.name === 'state') {
            setuserDetails({ ...userDetails, state: event.target.value })
        }

        if (event.target.name === "pwd") {
            setuserDetails({ ...userDetails, pwd: event.target.value })
        }
        if (event.target.name === "npwd") {
            setuserDetails({ ...userDetails, npwd: event.target.value })
        }

        if (event.target.name === "cpwd") {
            setuserDetails({ ...userDetails, cpwd: event.target.value })
        }
    }

    async function handleDetailsChange() {
        let token = localStorage.getItem("token");

        let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/updateUser?token=${token}`, {
            method: "POST",
            cache: "no-cache",
            body: JSON.stringify(userDetails)
        });
        let data = await resp.json();
        console.log(data);
    }

    async function handlePasswordChange(){
        if(userDetails.npwd === userDetails.cpwd){
        let token = localStorage.getItem("token")
        let body = {email : userDetails.email, pwd : userDetails.pwd, npwd : userDetails.npwd};
        let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/updatePassword`, {
            method: "POST",
            cache: "no-cache",
            body: JSON.stringify(body)
        });
        let data = await resp.json();
        console.log(data);
    }else{
        alert("password not match");
    }
    }
    return (
        <>
            <h1 className="font-bold md:font-black text-sm md:text-3xl p-4 text-center">Update Your Account Details</h1>
            <section className="text-gray-600 body-font py-4">
                <h2 className="font-bold text-lg text-center tracking-wide">1.Account Details</h2>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input onChange={handleChange} type="text" id="name" value={userDetails.name} name="name" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={handleChange} type="email" id="email" value={userDetails.email} name="email" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="addrs" className="leading-7 text-sm text-gray-600">Address</label>
                            <textarea onChange={handleChange} id="addrs" name="addrs" value={userDetails.addrs} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input onChange={handleChange} type="tel" id="phone" value={userDetails.phone} name="phone" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="pin" className="leading-7 text-sm text-gray-600">PinCode</label>
                            <input onChange={handleChange} type="number" id="pin" value={userDetails.pin} name="pin" className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                            <input type="text" id="state" name="state" onChange={handleChange} value={userDetails.state} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input type="text" id="city" name="city" onChange={handleChange} value={userDetails.city} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="w-40 mx-auto">
                    <button onClick={handleDetailsChange} className="disabled:bg-blue-200 w-40 md:w-48 text-white text-center font-bold bg-blue-500 border-0 my-2 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">
                        Update
                    </button>
                </div>
                <hr />
                <h2 className="font-bold text-lg text-center tracking-wide mt-4">2.Change Password</h2>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex lg:w-3/4 w-full sm:flex-row  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="pwd" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="text" id="pwd" name="pwd" value={userDetails.pwd} onChange={handleChange} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="pwd" className="leading-7 text-sm text-gray-600">New Password</label>
                            <input type="text" id="npwd" name="npwd" value={userDetails.npwd} onChange={handleChange} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="cpwd" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                            <input type="text" id="cpwd" name="cpwd" value={userDetails.cpwd} onChange={handleChange} className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                </div>
                <div className="w-40 mx-auto">
                    <button onClick={handlePasswordChange} className="disabled:bg-blue-200 w-40 md:w-48 text-white text-center font-bold bg-blue-500 border-0 my-2 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">
                        Chage Password
                    </button>
                </div>

            </section>
        </>)
}