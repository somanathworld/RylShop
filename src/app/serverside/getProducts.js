export async function getProductsByCategory(){
    let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/products/category/men's%20clothing`, {
        cache : "no-cache"
    });
    let data = await resp.json();
    return data.result;
} 


export async function getProductById(id){
    let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/products/${id}`, {
        cache : "no-cache"
    });
    let data = await resp.json();
    return data.result;
} 