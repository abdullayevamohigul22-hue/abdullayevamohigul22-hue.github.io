const products = [
{
id:1,
name:"iPhone 15 Pro",
price:15000000,
image:"https://picsum.photos/300/200?1"
},
{
id:2,
name:"Samsung S24",
price:11000000,
image:"https://picsum.photos/300/200?2"
},
{
id:3,
name:"MacBook Air",
price:18000000,
image:"https://picsum.photos/300/200?3"
},
{
id:4,
name:"AirPods Pro",
price:2500000,
image:"https://picsum.photos/300/200?4"
},
{
id:5,
name:"Smart TV",
price:6000000,
image:"https://picsum.photos/300/200?5"
},
{
id:6,
name:"PS5",
price:8500000,
image:"https://picsum.photos/300/200?6"
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}

function showProducts(list){
const productsDiv = document.getElementById("products");

productsDiv.innerHTML = "";

list.forEach(product => {
productsDiv.innerHTML += `

<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<div class="price">${product.price.toLocaleString()} so'm</div>
<button onclick="addToCart(${product.id})">
Savatchaga qo'shish
</button>
</div>
`;
});
}

function addToCart(id){
const product = products.find(p => p.id === id);
cart.push(product);
saveCart();
renderCart();
}

function removeFromCart(index){
cart.splice(index,1);
saveCart();
renderCart();
}

function renderCart(){

document.getElementById("cartCount").innerText = cart.length;

let total = 0;

const cartList = document.getElementById("cartList");
cartList.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price;

cartList.innerHTML += `

<div class="cartItem">
<span>${item.name}</span>
<button class="removeBtn"
onclick="removeFromCart(${index})">
X
</button>
</div>
`;
});

document.getElementById("totalPrice").innerText =
total.toLocaleString();
}

document.getElementById("search")
.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(value)
);

showProducts(filtered);

});

showProducts(products);
renderCart();
