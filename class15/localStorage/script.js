
// 1. STORE DATA
let name = "subhan";
localStorage.setItem("username", name);
localStorage.setItem("id", 2);
localStorage.setItem("city", "khi");

// 2. GET DATA
let savedName = localStorage.getItem("username");
// console.log(savedName);

// 3. REMOVE DATA
// localStorage.removeItem("username");

// 4. CLEAR ALL DATA
// localStorage.clear();

// 5. BUTTON EXAMPLE
let nameInput = document.getElementById("nameInput");
let result = document.getElementById("result");
// let saveBtn = document.getElementById("saveBtn");
// let getBtn = document.getElementById("getBtn");
// let removeBtn = document.getElementById("removeBtn");
let clearBtn = document.getElementById("clearBtn");


// SAVE
// saveBtn.addEventListener("click", function () {
//     let name = nameInput.value;
//     localStorage.setItem("username", name);
//     nameInput.value = ""
//     result.innerText = "Name saved!";
// });


function saveItem(){
    let name = nameInput.value;
    localStorage.setItem("name", name)
    // console.log(name , "name")
}
// // GET
getBtn.addEventListener("click", function () {
    let name = localStorage.getItem("name");
    console.log(name , "name")
    if (name) {
        result.innerText = "Welcome " + name;
    } else {
        result.innerText = "No name found";
    }
});

// // REMOVE
// removeBtn.addEventListener("click", function () {
//     localStorage.removeItem("username");
//     result.innerText = "Name removed!";
// });

// // CLEAR
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    // result.innerText = "All local storage cleared!";
});


// function clearAll(){
//     localStorage.clear();
// }

function removeName(){
    localStorage.removeItem("username");
}

// // 6. OBJECT IN LOCAL STORAGE
let user = {
    name: "Ali",
    age: 22,
    city: "Karachi"
};
// // Object → String
// localStorage.setItem("user", user);
// localStorage.setItem("user", JSON.stringify(user));

// localStorage.setItem("user", user);
// // // String → Object
// let storedUser =  JSON.parse(localStorage.getItem("user"));
// console.log(storedUser);
// console.log(storedUser.name);
// console.log(storedUser.age);


// let users = {
//     name: "Ali",
//     age: 22
// };

// let data = JSON.stringify(users);
// console.log(data , "string");
// let test = JSON.parse(data) 
// console.log(test , "object")

// let dataa = '{"name":"Ali","age":22}';
// let userb = JSON.parse(dataa);
// console.log(userb.name);
// console.log(userb.age);