let form = document.getElementById("signup");
let signInform = document.getElementById("signIn");
let emailerror = document.getElementById("emailerror");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passerror = document.getElementById("passerror");
let userDetails = document.getElementById("userDetails");
let submit = document.getElementById("submit");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
let isvalid = true;

function checkval(){
  isvalid = true;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
    email.classList.add("error");
    emailerror.classList.remove("errormsg");
    isvalid = false;
  }
  if (password.value.trim() === "" || password.value.length < 8) {
    password.classList.add("error");
    passerror.classList.remove("errormsg");
    isvalid = false;
  }
  return isvalid;
}

if(form){
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if(!checkval()){
      return;
    }
      let checkemail = allUsers.some(function (element) {
        return email.value.trim() === element.email;
      });
      if (checkemail) {
        alert("email already exist");
        return;
      }
        let userData = {
          email: email.value.trim(),
          password: password.value.trim(),
        };
        allUsers.push(userData);
        localStorage.setItem("allUsers" , JSON.stringify(allUsers));
        alert("success")
        form.reset();
        window.open("login.html")
  console.log(allUsers);
  });
}

if(signInform){
  signInform.addEventListener("submit" , function(event){
    event.preventDefault();
     if(!checkval()){
      return;
    }
    let user = allUsers.find(function(element) {
    return email.value.trim() === element.email && password.value.trim() === element.password;
           });
    if(user){
      userDetails.innerHTML = `
          <p>${user.email}</p>
      `
    }else{
      userDetails.innerHTML = `
          <p>invalid</p>
      `
    }
  
  })
}
