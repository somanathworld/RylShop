
import { getProductById } from "@/app/serverside/getProducts";
import ProductDetailsComponent from "@/components/ProductDetailsComponent";

export default async function ProductDetails({ params }) {
  let id = params.prodid ? params.prodid : null;
  let product = await getProductById(id);
  return (<ProductDetailsComponent product = {product} sizes={["S", "M", "L", "XL", "XXL"]}
  colors={["red", "green", "blue", "yellow"]}/>);
}