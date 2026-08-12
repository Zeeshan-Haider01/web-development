let cart = []

function addToCart(name,price) {
    let product = {
        name:name,
        price:price
    }
    cart.push(product);
    showCart()
}

function showCart(){
    let cartDiv = document.getElementById('cart');
    let totalDiv = document.getElementById('total-price');
    let total = 0;
    cartDiv.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        let newProduct = document.createElement('div');
        
        newProduct.className = "cart-item";
        newProduct.innerHTML = `
        <p>${cart[i].name} - $${cart[i].price}</p>
        <button onclick="removeItem(${i})">Delete</button>
        `
        total = total + cart[i].price;
        cartDiv.appendChild(newProduct);
        totalDiv.innerText = total;
    }
}

function removeItem(index){
    cart.splice(index,1);
    showCart();
}