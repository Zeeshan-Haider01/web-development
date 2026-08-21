let SignUpform = document.getElementById("signUp")
let signInForm = document.getElementById("signIn")
let email = document.getElementById("email")
let emailError = document.getElementById("emailError")
let password = document.getElementById("password")
let passwordError = document.getElementById("passwordError")
let showData = document.getElementById("showData")
let users = JSON.parse(localStorage.getItem("users")) || []
function checkEmailVal(){
    if(email.value.trim() === ""){
        emailError.classList.remove("error");
        return;
    }
}
function checkPassVal(){
    if(password.value.trim() === ""){
        passwordError.classList.remove("error");
        return;
    }
}

// Sign Up From

if(SignUpform){
    SignUpform.addEventListener("submit" , function(event){
        event.preventDefault();
        checkEmailVal()
        checkPassVal()
        let checkEmail = users.some(function(user) { return email.value.trim() === user.email}) 
        if(!checkEmail){
            let user = { 
                email : email.value.trim(),
                password : password.value.trim()
            }    
            users.push(user)
            localStorage.setItem("users" , JSON.stringify(users))
            window.location.href = "signIn.html"
            console.log(users)
        }else{
            alert("user already exist")
        } 
    })
}

if(signInForm){
    signInForm.addEventListener("submit", function(event){
    event.preventDefault();
    checkEmailVal()
    checkPassVal()
    let checkCorrectEmail = users.find(function (users){
        return email.value.trim() === users.email;
    })
    if(!checkCorrectEmail){
        showData.innerHTML = `<p> Invalid Cred </p> `
    }else{
        showData.innerHTML = `<p> wellcome ${checkCorrectEmail.email}</p> `
    }
})
}

{/* <input type="text" id="city" placeholder="enter city">
<button onclick="getweather()">get weather</button>

async function getweather(){

    let city = document.getElementById("city").value;

    API_KEY =  'api key'

    let weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
   
    let response = await weather.json();

    console.log(response)
} */}


async function getposts(){
    let showPost = document.getElementById("showData")

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()

    data.map(function (post){
        showPost.innerHTML += `

        <p>${post.id} - ${post.title}</p>

        `
    })

    // console.log(data)
}

getposts()


