'use client';

import CardComponent from "@/components/CardComponent";

export default function Stickers() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="text-gray-600 body-font w-4/5 mx-auto">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map(item => <CardComponent  key = {item} slug={item} image="https://m.media-amazon.com/images/I/61zqqJJtrqL._AC_UL320_.jpg" title="Rangoli Big Shiva Picture Wall Sticker Vinyl 50 x 70 cm Pack of 1, Multicolour," category="sticker" price="109" sizes={["S", "M", "L", "XL", "XXL"]}
              colors={["red", "green", "blue", "yellow"]}/>)}
        </div>
      </div>
    </section>
  )
}