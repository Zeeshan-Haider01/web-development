// function header(name) {
//     return(
//         `
//             <header>
//                 <h2>Hello ${name}</h2>
//             </header>
//         `
//     )
// }

// export default header;

var a = 10;

function test(){
    a = 12;
    console.log("inside" , a)
}
test();
console.log(a)