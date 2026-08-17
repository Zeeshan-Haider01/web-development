// console.log(Math.round(4.6)) // 5  → nearest
// console.log(Math.ceil(4.1))  // 5  → up
// console.log(Math.floor(4.9)) // 4  → down
// console.log(Math.trunc(4.9)) // 4  → remove decimal
// console.log(Math.abs(-10))   // 10 → positive
// console.log(Math.max(10, 20, 5)); // 20
// console.log(Math.min(10, 20, 5)); // 5
// console.log(Math.pow(2, 3));    // 8
// console.log(Math.sqrt(25));    // 5
// console.log(Math.random()); // 0.234534

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);

// Step 1: Math.random()
// Math.random()

// Gives a random decimal between 0 and less than 1.
// Examples:

// 0.2
// 0.5
// 0.8
// 0.99

// It can never be exactly 1.
// Step 2: * 3
// Math.random() * 3

// Now the range becomes:
// 0     to     less than 3

// Examples:
// 0.2 × 3 = 0.6
// 0.5 × 3 = 1.5
// 0.8 × 3 = 2.4
// 0.99 × 3 = 2.97

// So we can now get:
// 0, 1, 2
// Step 4: + 1

// We don't want 0, 1, 2.
// We want:
// 1, 2, 3

// So we add 1:
// Math.floor(Math.random() * 3) + 1
// Result:
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3



// let date = new Date();
// console.log(date.toString()); // Mon Aug 17 2026 18:25:00 GMT+0500
// console.log(date.toLocaleDateString()); // 8/17/2026
// console.log(date.toLocaleTimeString()); // 6:25:00 PM
// console.log(date.toUTCString()); // Mon, 17 Aug 2026 13:25:00 GMT
// console.log(date.toDateString());  // Mon Aug 17 2026
// console.log(date.getFullYear()); // 2026
// console.log(date.getDate());     // 1-31
// console.log(date.getMonth() + 1);    // 0-11
// console.log(date.getDay() + 1);      // 0-6
// console.log(date.getHours());    // 0-23
// console.log(date.getMinutes());  // 0-59
// console.log(date.getSeconds());  // 0-59

// let name = "Zeeshan";
// let Name = "Ali"
// console.log(name)
// console.log(Name)

// let name = "ali"
// const name = "ali"
// var name = "ali"

// function openWindow(){
//     let link = window.open("https://www.w3schools.com/js/js_quiz.asp")
// }

