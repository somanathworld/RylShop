
import { getProductsByCategory } from "@/app/serverside/getProducts";
import CardComponent from "@/components/CardComponent";

export default async function SmartPhones() {
  let products = await getProductsByCategory("smartphones");

  return (
    <section className="text-gray-600 body-font w-4/5 mx-auto min-h-screen">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map(product =>
           <CardComponent key={product._id} slug={product._id} image={product.images[0]}
              title={product.title} category={product.category}
              price={product.price} sizes={["S", "M", "L", "XL", "XXL"]}
              colors={["red", "green", "blue", "yellow"]} />
              )}
        </div>
      </div>
    </section>
  )
}