// import header from './header.js'
// import footer from './footer.js'

// document.getElementById("root").innerHTML = header("hamza");
// document.getElementById("root").innerHTML += footer();C:\Users\Hobopk\Desktop\frontend-class\React\my-web\index.html


// function student(name){
//   console.log(name)
// }
// student("test");

// let newstudent = (name) => {
//   console.log(name)
// } 
// newstudent("test")

// let newstudent = (name) => {console.log(name)} 
// let newstudent = (name) => console.log(name) 

// let newstudent = name => console.log(name) 
// newstudent("test")

// const person = {
//   name: "Ali",
//   normal: function () {
//     console.log(this.name , "normal"); 
//   },
//   arrow: () => {
//     console.log(this.name ,  "arrow");
//   }
// };

// person.normal(); // Ali
// person.arrow();  // usually undefined

{/* <input type="text" name="name" id="nameinp"> */}

// let nameinp = document.getElementById("nameinp");

// nameinp.addEventListener("input", function (event) {
//     console.log(event.target.value);
// });

// function print(a , b){
//   console.log(a  + b)
// }
// print(7 , 7)

// let print = (a , b) => console.log(a + b)

// print(7 , 7)

// let print = (a , b) => {
//   return a + b;
//   // console.log(a + b)
//   // let sum = a + b;
//   // console.log(sum)
// }

// function print(a , b){
//   return a + b;
// }

// let print = (a , b) => {
//   return a + b
// }

// setValue={(e) => e.target.value}
// let print = (a) => a;

// print(10 , 20)
// console.log(print(10))


// let countElement = document.getElementById("txt")

// let count = 0;
// function increment(){
//       count++;
//       countElement.textContent = count;
// }

// function sub(){
//       count--;
//       countElement.textContent = count;
// }

// let display = document.getElementById("root")

//  let products = [
//     {
//       name:"phone",
//       price:100,
//       inStoke: true,
//       colors: ["red", "blue"],
//     },
//     {
//       name:"shirt",
//       price:100,
//       inStoke: false,
//       colors: ["red", "blue"]
//     },
//   ]
//   function showData(){
//     products.map(function (product){
//       display.innerHTML += ` <p>${product.name} ${product.price} - ${product.inStoke ? "Avl" : "Not Avl"} </p> `
//     })
//   }
//   showData()



// const user = {
//   name: "Ali",
//   age: 22,
//   city: "Karachi"
// };

// let {name , age , city} = user;

// console.log(user.name)
// console.log(user.age)
// console.log(user.city)

// console.log(name)
// console.log(age)
// console.log(city)

// Object destructuring
// const { name, age, city } = user;

// console.log(name);
// console.log(age);
// console.log(city);

// Rename variables
// const student = {
//   name: "Hamza",
//   age: 20
// };

// const { name: studentName, age: studentAge } = student;

// console.log(studentName);
// console.log(studentAge);


// Default value
// const person = {
//   name: "Ahmed",
//   age: 25
// };

// const { name: personName, country = "Pakistan" } = person;

// console.log(personName);
// console.log(country);


// Array destructuring
// let colors = ["red", "green", "blue"];


// let [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);


// Skip value
// const numbers = [10, 20, 30];

// const [num1 , , num0] = numbers;

// console.log(num1);
// console.log(num0);


// Array default value
// const fruits = ["Apple"];

// const [fruit1, fruit2 = "Banana"] = fruits;

// console.log(fruit1);
// console.log(fruit2);

// function add(...prop){
//   // console.log("add = " , a + b + prop[1])
//   let start = 0;
//   prop.map(function(no){
//     start = start + no;
//   })
//   console.log(start)
//   // console.log(prop[0] + prop[1] + + prop[2])
// }
// add(2, 4 , 6 , 8 ,10 ,12 )

// Rest with array
// const marks = [80, 75, 90, 85 ,75, 90, 85 , 75, 90, 85 ,75, 90, 85];
// const [firstMark, ...remainingMarks] = marks;

// console.log(firstMark);
// console.log(remainingMarks[7]);

// Rest with object
// const employee = {
//   name: "Ali",
//   age: 25,
//   department: "IT",
//   salary: 50000
// };

// const { name: employeeName, ...details } = employee;

// console.log(employeeName);
// console.log(details.age);


// Destructuring in function
// function showUser({ name, age }) {
//   console.log(name);
//   console.log(age);
// }


// function showUser({name , age}){
function showUser(user){
  // console.log(user.name)
  // console.log(user.age)
  console.log(name)
  console.log(age)
}
let user = {
    name: "Zeeshan",
    age: 28
}

showUser(user);

// let arr = ['blue','red','green','yellow']

// let [blue, ...rest] = arr;
// console.log(blue)
// console.log(rest[1])

// let user = {
//     name:"ali",
//     age: 10,
//     city:'khi',
//     country:'pk'
// }

// function test({name , ...rest}){
    // console.log(name)
    // console.log(rest)
// }
// test(user)

// let {name , ...rest} = user;
// console.log(name)
// console.log(rest.age)