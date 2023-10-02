'use client';

import CardComponent from "@/components/CardComponent";

export default function Hoodies() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="text-gray-600 body-font w-4/5 mx-auto">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map(item => <CardComponent key = {item} slug={item} image="https://m.media-amazon.com/images/I/51JLxe5LrNL._AC_UL320_.jpg" title="Stylish Printed Fleece Sweatshirts for Men" category="Hoodie" price="599" sizes={["S", "M", "L", "XL", "XXL"]}
              colors={["red", "green", "blue", "yellow"]}/>)}
        </div>   
      </div>
    </section>
  )
}