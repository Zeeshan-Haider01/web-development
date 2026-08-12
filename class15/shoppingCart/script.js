let cart = [ ];
function addToCart(name, price) {
    let product = {
        name: name,
        price: price
    };
    cart.push(product);
    displayCart();
}
function displayCart() {
    let cartDiv = document.querySelector("#cart");
    cartDiv.innerHTML = "";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        let item = document.createElement("div");
        item.className = "cart-item";
        // console.log(` ${item} hello world ${tolal} `)
        item.innerHTML = `
            <span>
                ${cart[i].name} - $${cart[i].price}
            </span>
            <button class="delete" onclick="removeItem(${i})">
                Delete
            </button>
        `;
        cartDiv.appendChild(item);
    }
    document.querySelector("#total").textContent = total;
}
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}