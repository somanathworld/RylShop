export async function getProductsByCategory(category){
    let resp = await fetch(`https://next-js-somanathworld.vercel.app/api/products/category/${category}`, {
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

