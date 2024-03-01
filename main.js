function createProductCard(p){
    return `<div class="col text-center"mb-3>
    <div class="card h-100 pt-3">
        <img src="${p.image}" height="150px"style="object-fit:contain" alt="">
        <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">₹${p.price}
</p>
            
            <a href="#" class="btn btn-primary">Add to cart</a>

        </div>
    </div>
</div>`;
}
async function getProducts(){
const response = await fetch('https://fakestoreapi.com/products');
const products =await response.json();
let productsListContainer='';
for(let p of products){
    const productContainer=createProductCard(p)
    productsListContainer=productsListContainer + productContainer;
}
const productsContainer=document.getElementById('productsContainer');
productsContainer.innerHTML=productsListContainer;
}
getProducts();