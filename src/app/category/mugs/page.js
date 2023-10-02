'use client';

import CardComponent from "@/components/CardComponent";

export default function Mugs() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="text-gray-600 body-font w-4/5 mx-auto">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map(item => <CardComponent key = {item} slug={item} image="https://m.media-amazon.com/images/I/81njWrJjQhL._AC_UL320_.jpg" title="Irida Naturals Rice Husk Coffee Mugs Set of 1-300 ml,Unbreakable Coffee Mug" category="mugs" price="79" sizes={["S", "M", "L", "XL", "XXL"]}
              colors={["red", "green", "blue", "yellow"]}/>)}
        </div>
      </div>
    </section>
  )
}