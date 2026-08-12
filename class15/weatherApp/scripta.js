// let list = document.getElementById("list")
// list.innerHTML = "<p>...loading</p>"
// let response = fetch("https://jsonplaceholder.typicode.com/posts/")
// .then(function (response){
//     return response.json()
// })
// .then(function (data){
//     list.innerHTML = "";
//     for (let index = 0; index < data.length; index++) {
//         list.innerHTML += `
//             <h2 class="heading"> ${data[index].title} </h2>
//             <p> ${data[index].body}</p>
//         `
//     }
// })
// .catch(function (error){
//     console.log("error" , error)
//     list.innerHTML = `<p> ${error} </p>`;
// })

// async await

// async function getdata(){
//     let list = document.getElementById("list")
//     list.innerHTML = "<p>...loading </p>";
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/")
//         let data = await response.json()
//         list.innerHTML = "";
//         for (let index = 0; index < data.length; index++) {
//             list.innerHTML += `
//             <p> ${data[index].title} </p>
//         `    
//         }
//     } catch (error) {
//         list.innerHTML = "<p>something went wrong </p>";
//         console.log(error)
//     }
// }
// getdata()



// let data = [
//   {
//     "id": 1,
//     "img": "profle.png",
//     "like" 3,
//     "comments":5,
//     "share":6,
//     "title": "1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     id: 2,
//     title: "2 sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
// ]

// for (let index = 0; index < data.length; index++) {
//     // const element = array[index];
//     console.log(data[index].title) 
// }