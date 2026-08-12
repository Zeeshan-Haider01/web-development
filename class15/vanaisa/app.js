let cart=[];

function addToCart(name,price) {
    let product={
        name:name,
        price:price
    };
    cart.push(product);
    displayCart()
}

function displayCart(){
    let divCart=document.getElementById("cart");
    divCart.innerHTML="";

    let total=0;
    for(let i=0;i<cart.length;i++){
        let item=document.createElement("div");
        item.className="cart-item";
        item.innerHTML=`
        <span>
           ${cart[i].name} - $${cart[i].price}
        </span>

        <button onclick=removeItem(${i})>Delete</button>
        
        `
        total=total+cart[i].price;
        document.getElementById("total").innerText=total;
        divCart.appendChild(item);
    }

}

function removeItem(index){
    cart.splice(index,1)
    displayCart()
}