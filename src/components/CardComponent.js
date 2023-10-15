'use client'
import Image from "next/image";
import Link from "next/link";

export default function CardComponent({slug, image, category, title, price, sizes , colors}){
    return(
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href = {`/products/${slug}`} className="cursor-pointer">
        <span className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-contain object-center w-full h-full block" src={image}/>
        </span>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
          <h2 className="text-gray-900 title-font text-md font-medium h-20 overflow-auto">{title}</h2>
          <p className="mt-1">${price}</p>
          <div className="mt-1">
            { sizes.map(size=> <span key={size} className="border-1 text-sm border-grey-600 bg-blue-200 px-1 mr-2">{size}</span>)}
          </div>
          <div className="mt-1 flex">
            { colors.map(color=> <div key = {color} className={`border-1 border-gray-600 mr-2 bg-${color}-400 rounded-full w-4 h-4 focus:outline-none`}></div>)}
          </div>
        </div>
        </Link>
      </div>

    );
}