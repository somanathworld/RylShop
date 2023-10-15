'use client';

import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function OrderConfirmation(){
    
    const params = useSearchParams();
    console.log(params.get("oid"));

    useEffect(()=>{
        async function OrderDetails(){
            let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/orders/${params.get("oid")}`, {
                cache : "no-cache",
                method : "PUT",
                body : JSON.stringify({status : "paid"})
            });
            let data = await resp.json();

            alert("Order saved with order id "+params.get("oid"));
            setTimeout(
                () => window.location.href = `/orders/${data.result._id}`, 2000)
        }

        OrderDetails();
    },[params.oid])

    return(<h1 className="min-h-screen">Wait for some time for order confirmation</h1>);
}