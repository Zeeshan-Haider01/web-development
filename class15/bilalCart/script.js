arr = []

function myFunc(itemName , itemPrice){
    let items = {
        item : itemName,
        price : itemPrice
    }
    // let heading = document.getElementById("heading")
    // let price = document.getElementById("Price")
    // for(let i = 0 ; i<arr.length ; i++){
    // }
    // console.log(heading.innerHTML)
    // console.log(price.innerHTML)
    arr.push(items)

    showItems()
}

function showItems(){
    let cart = document.getElementById("cart")
    cart.innerHTML = "";
    let totalPrice = 0;
    for(let i = 0 ; i < arr.length ; i++){
        totalPrice += arr[i].price;
        
        cart.innerHTML += `
        <p>${arr[i].item} - ${arr[i].price}</p>
        <button onclick="remove(${i})">Delete</button>
        `;
        // cart.innerHTML = totalPrice;
        
    }
    console.log(totalPrice)
    let total = document.getElementById("total")
    total.innerHTML = totalPrice;
    console.log(arr , "show function")
}

function remove(index){
    console.log("first")
    console.log(index)
    arr.splice(index , 1)
    console.log(arr , "remove function")
    showItems()
}