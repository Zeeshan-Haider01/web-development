let form = document.getElementById("signUp")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")
let signUpBtn = document.getElementById("signUpBtn")
let showData = document.getElementById("showData")

let users = JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit" , function(event){
    event.preventDefault();
    if(email.value.trim() === ""){
        emailError.classList.remove("error");
        return;
    }
    if(password.value.trim() === ""){
        passwordError.classList.remove("error");
        return;
    }
    let checkEmail = users.some(function(user) { return email.value.trim() === user.email}) 
    if(!checkEmail){
        let user = { 
            email : email.value.trim(),
            password : password.value.trim()
        }    
        users.push(user)
        localStorage.setItem("users" , JSON.stringify(users))
        console.log(users)
    }else{
        alert("user already exist")
    } 
})
