// let nums = [1, 2, 3];
// nums.forEach(function (num){
//     console.log(num)
// })
// // map
// nums.map(function (num){
//     console.log(num * 2)
// })
// const finalResult = numbers.filter(function(num) {
//   return num > 2;
// });
// // find
// const arr = [10, 20, 30];
// const resultfinal = arr.find(function(num) {
//   return num > 15;
// });
// // console.log(resultfinal); // 20

// const array = [email, 20, 30];
// const resultfinals = arr.some(function(num) {
//   return num == email;
// });
// console.log(resultfinals);
// // every
// let allNums  = [2 , 4 , 6]
// const resultvalue = allNums.every(function(num) {
//   return num % 2 === 0;
// });
// let result = nums.map(function(num) {
//     //   return 
//      console.log(num * 2) 
//     });
    // console.log(result); // [2, 4, 6]
    // console.log(nums); // [1, 2, 3]

// let test = nums.map(function(num) {
//   return "Item " + num;  // string
// });
// console.log(test)

// let test = nums.map(function(num) {
//   return { value: num }; // object
// });
// console.log(test)

// // filter
// const numbers = [1, 2, 3, 4];
// const finalResult = numbers.filter(function(num) {
//   return num > 2;
// });
// console.log(finalResult); // [3 , 4]

// // find
// const arr = [10, 20, 30];
// const resultfinal = arr.find(function(num) {
//   return num > 15;
// });
// console.log(resultfinal); // 20

// // every
// const allNums = [2, 4, 6,3];
// const resultvalue = allNums.every(function(num) {
//   return num % 2 === 0;
// });
// console.log(resultvalue); // true

// // reduce
// const allnums = [10, 20, 30];

// const reslt = allnums.reduce(function(total, num) {
//   return total + num;
// }, 0);
// console.log(reslt); // 60

// // total = 10
// // 0 + 10 = 10
// // 10 + 20 = 30
// // 30 + 30 = 60



const students = [
    { name: "Ali", age: 20, marks: 80 },
    { name: "Hamza", age: 21, marks: 75 },
    { name: "Zeeshan", age: 22, marks: 90 }
];

let show  = document.getElementById("list")

// students.map(function(student){
//     show.innerHTML = `
//     <p>${student.name}</p>
//     <p>${student.age}</p>
//     <p>${student.marks}</p>
//     `
// })
// const studentNames = students.map(function(student) {
//     return student;
// });
// console.log(studentNames);

// students.map(function(student) {
//     console.log(
//         "Name:", student.name,
//         "Age:", student.age,
//         "Marks:", student.marks
//     );
// });