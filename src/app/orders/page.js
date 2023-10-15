'use client'

import {  useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Orders() {

  let [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("token");
    async function fetchOrders() {
      if (token) {
        try{
          let resp = await fetch("https://next-js-somanathworld.vercel.app/api/orders", {
            method: "POST",
            cache : 'no-cache',
            body: JSON.stringify({ token })
          });
          let data = await resp.json();
          setOrders(data.result);
        }catch(err){
          console.log(err);
        }
      }else{
        router.push("/login")
      } 
    }
    fetchOrders();
  },[])



return (
  <section className="w-5/6 p-2 md:p-8 m-auto min-h-screen">
    <h1 className="font-semibold text-2xl text-center p-4">My Orders</h1>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b-4 font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#Orderid</th>
                  <th scope="col" className="px-6 py-4">Amount</th>
                  <th scope="col" className="px-6 py-4">Created</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => (
                    <tr key = {order.orderId}
                      className="border-b-2 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-bold"><Link href={`/orders/${order._id}`}>{order.orderId}</Link></td>
                      <td className="whitespace-nowrap px-6 py-4">{order.amount}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.createdAt}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.status}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>);
}