let cart = [];

function addtocart(name, price) {
    let product = {
        name: name,
        price: price
    };
    cart.push(product);
    display();
}

function display(){
    let cartdiv = document.getElementById("cart");
    cartdiv.innerHTML = "";
    let total = 0;

    for(let i in cart){
        total = total + cart[i].price;

        let item = document.createElement("div");
        item.innerHTML = `
        <span>${cart[i].name} -$${cart[i].price}</span>
        <button onclick="removeitem()">Delete</button>
        `;
        cartdiv.appendChild(item);
    }
    document.getElementById('total').innerText = total;
    
}


function removeitem(index){
    cart.splice(index, 1);
    display();
}