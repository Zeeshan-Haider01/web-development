// getElementById
// document.getElementById("text").innerText = "Welcome";

// getElementsByClassName
// let items = document.getElementsByClassName("item");
// console.log(items[1].innerText);

// getElementsByTagName
// let p = document.getElementsByTagName("p");
// console.log(p[2].innerText);

// querySelector
// document.querySelector(".demo").innerText = "JavaScript";
// let text = document.querySelector(".demo");
// text.innerText = "JavaScript";

// querySelectorAll
// let fruits = document.querySelectorAll(".fruit");

// console.log(fruits)

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].innerText)
//     console.log(fruits[i].innerText = " fruit " + i)
//     // console.log("fruit 1")
//     // console.log("fruit 2")
// }

// innerHTML
// document.getElementById("box").innerHTML = "<h2>Hello</h2>";

// innerText
// document.getElementById("name").innerText = "Ali";

// textContent
// document.getElementById("city").textContent = "Karachi";

// style
// document.getElementById("text").style.color = "red";
// let p = document.getElementById("text");
// p.style.color = "red";
// p.style.fontSize = "30px";

//  setAttribute()
// document.getElementById("img").setAttribute("src", "cat.jpg");
// document.getElementById("img").setAttribute("src", "cat.jpg");

//  getAttribute()
// let url = document.getElementById("link").getAttribute("href");
// console.log(url)

//  removeAttribute()
// document.getElementById("box").removeAttribute("disabled");

// document.querySelector(".msg").setAttribute("class", "new-class");

//  classList.add()
// document.getElementById("msg").classList.add("red");

//  classList.remove()
// document.getElementById("msg").classList.remove("red");

//  classList.toggle()
// function darkMode() {
//     document.getElementById("menu").classList.toggle("active");
// }

// function toggle(){
//     document.getElementById("list").classList.toggle("active");
// }

//  createElement()
// let p = document.createElement("p");
// p.innerText = "New para";
// console.log(p)
// document.body.append(p);
//  appendChild()
// let li = document.createElement("li");
// li.innerText = "Apple";
// document.getElementById("list").appendChild(li);

//  remove()
// document.getElementById("text").remove();

 //  onclick
//  function hello() {
//         alert("Hello");
//     }
  
      <!-- <button id="btn">Click</button> -->

//  addEventListener()
// document.getElementById("btn").addEventListener("click", function() {
//     alert("Button Clicked");
// });

//  input

{/* <input id="name">
document.getElementById("name").addEventListener("input", function() {
    console.log(this.value);
}); */}

//  submit
// document.getElementById("form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Submitted");
// });

//  checked
// console.log(document.getElementById("check").checked);

//  disabled
// document.getElementById("btn").disabled = false;

//  src
// document.getElementById("pic").src = "cat.jpg";

/*  href
document.getElementById("site").href = "https://google.com"; */

// array.splice(startIndex, deleteCount, newItem);

// let fruits = ["Apple", "Banana", "Mango","Banana1", "Mango1"];
// // select
// fruits.splice(2, 0);
// // delete 1 item
// fruits.splice(2, 1);
// // delete 3 items
// fruits.splice(2, 3);
// // delete 1 and add 1
// fruits.splice(1, 1,"grapes");
// console.log(fruits);

// let students = ["Ali", "Ahmed", "Sara"];
// students.splice(1, 1, "Zeeshan");
// console.log(students);

// let students = ["Ali", "Ahmed", "Sara"];

// function deleteStudent(index) {
//     students.splice(index, 1);
//     console.log(students);
// }
// deleteStudent(2);

// let students = [];
// function addStudent() {
//     let input = document.getElementById("studentName");
//     let name = input.value;
//     if (name == "") {
//         alert("Enter Name");
//         return;
//     }
//     students.push(name);
//     input.value = "";
//     showStudents();
// }

// function showStudents() {
//     let list = document.getElementById("list");
//     list.innerHTML = "";
//     for (let i = 0; i < students.length; i++) {
//         list.innerHTML += `
//         <li>
//         ${students[i]}
//         <button onclick="editStudent(${i})">Edit</button>
//         <button onclick="deleteStudent(${i})">Delete</button>
//         </li>
//         `;
//     }
// }
// function deleteStudent(index) {
//     students.splice(index, 1);
//     showStudents();
// }

// function editStudent(index) {
//     let newName = prompt("Enter New Name", students[index])
//     if (newName != "") {
//         students[index] = newName;
//     }else{
//         console.log("enter name")
//     }
//     showStudents();
// }


// Slider
// Image list

// let images = [
//     "images/imagea.jpg",
//     "images/imageb.jpg",
//     "images/imagec.jpg",
//     "images/imaged.jpg",
// ];
// let currentIndex = 0;
// let sliderImage = document.getElementById("sliderImage");
// document.getElementById("nextBtn").addEventListener("click", function () {
//     currentIndex++;
//     if (currentIndex >= images.length) {
//         currentIndex = 0;
//     }
//     sliderImage.src = images[currentIndex];
// });

// document.getElementById("prevBtn").addEventListener("click", function () {
//     currentIndex--;
//     if (currentIndex < 0) {
//         currentIndex = images.length - 1;
//     }
//     sliderImage.src = images[currentIndex];
// });

// heading 
// paragraph
// banner slider


    let slides = [
        {
            image: "images/imagea.jpg",
            title: "Image 1",
            description: "This is the 1st slide description."
        },
        {
            image: "images/imageb.jpg",
            title: "Image 2",
            description: "This is the 2nd slide description."
        },
        {
            image: "images/imagec.jpg",
            title: "Image 3",
            description: "This is the 3rd slide description."
        },
        {
            image: "images/imaged.jpg",
            title: "Image 4",
            description: "This is the 4th slide description."
        }
    ];

    let current = 0;
    const image = document.getElementById("sliderImage");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    
    function showSlide() {
        image.src = slides[current].image;
        title.innerText = slides[current].title;
        description.innerText = slides[current].description;
    }
    document.getElementById("next").addEventListener("click", function () {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        showSlide();
    });

    document.getElementById("prev").addEventListener("click", function () {
        current--;
        if (current < 0) {
            current = slides.length - 1;
        }
        showSlide();
    });

    // showSlide();