// let cityInput = document.querySelector("#cityInput");
// let searchBtn = document.querySelector("#searchBtn");
// let city = document.querySelector("#city");
// let temperature = document.querySelector("#temperature");
// let condition = document.querySelector("#condition");   
// searchBtn.addEventListener("click", function () {
//     let cityName = cityInput.value.trim();
//     if (cityName === "") {
//         alert("Enter city name");
//         return;
//     }
//     getWeather(cityName);
// });


async function searchBtn(){
    console.log("inside func")
    let apiKey = "api_key";
    let inputCity = document.getElementById("cityInput").value;
    if(inputCity === ""){
        alert("please enter city name")
        return;
    }
    let locationUrl = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(inputCity)}&limit=1&appid=${apiKey}`);
    console.log("before json" , locationUrl) 
    let response =  await locationUrl.json()
    console.log("after json" ,  response)
    let lat = response[0].lat;
    let lon = response[0].lon;

    let weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    let weatherResponse = await weatherUrl.json();

    document.getElementById("temperature").textContent = weatherResponse.main.temp; 
    document.getElementById("condition").textContent = weatherResponse.weather[0].description; 
    document.getElementById("city").textContent = weatherResponse.name; 
}



// async function getWeather(cityName) {
//     let apiKey = "api_key";
//     try {
//         // Show loading state
//         city.innerText = "Loading...";
//         temperature.innerText = "";
//         condition.innerText = "";
//         // Get latitude and longitude
//         let locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${apiKey}`;
//         let response = await fetch(locationUrl);
//         // if (!response.ok) {
//         //     throw new Error("Failed to fetch location data");
//         // }
//         let data = await response.json();
//         // Check if city exists
//         // if (data.length === 0) {
//         //     throw new Error("City not found");
//         // }
//         let latitude = data[0].lat;
//         let longitude = data[0].lon;

//         // Get weather data
//         let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//         let weatherResponse = await fetch(weatherUrl);
//         // if (!weatherResponse.ok) {
//         //     throw new Error("Failed to fetch weather data");
//         // }
//         let weatherData = await weatherResponse.json();

//         // Display weather
//         city.innerText = weatherData.name;
//         temperature.innerText = `${weatherData.main.temp}°C`;
//         condition.innerText = weatherData.weather[0].description;
//         console.log(weatherData);

//     } catch (error) {
//         console.error("Error:", error);
//         city.innerText = "Error";
//         temperature.innerText = "";
//         condition.innerText = error.message;
//     }
// }








// let cityInput = document.querySelector("#cityInput");
// let searchBtn = document.querySelector("#searchBtn");
// let city = document.querySelector("#city");
// let temperature = document.querySelector("#temperature");
// let condition = document.querySelector("#condition");

// searchBtn.addEventListener("click", function () {
//     let cityName = cityInput.value;
//     if (cityName === "") {
//         alert("Enter city name");
//         return;
//     }
//     getWeather(cityName);
// });


// async function getWeather(cityName) {
//     let apiKey = "api_key";
//     let locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
//     let response = await fetch(locationUrl);
//     let data = await response.json();
//     let latitude = data[0].lat;
//     let longitude = data[0].lon;
//     let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     let currentWeather = await fetch(weatherUrl)
//     let neweather  =  await currentWeather.json();
//      city.innerText = cityInput.value;
//      temperature.innerText = neweather.main.temp + "°C";
//      condition.innerText = neweather.weather[0].description;
//     console.log(data)



    // fetch(locationUrl)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (locationData) {
    //         console.log(locationData);
    //         if (locationData.length === 0) {
    //             alert("City not found");
    //             return;
    //         }

    //         let latitude = locationData[0].lat;
    //         let longitude = locationData[0].lon;

    //         let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    //         return fetch(weatherUrl);

    //     })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (weatherData) {
    //         console.log(weatherData , "weather");
    //         city.innerText = cityInput.value;
    //         temperature.innerText = weatherData.main.temp + "°C";
    //         condition.innerText = weatherData.weather[0].description;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         alert("Something went wrong");
    //     });
// }



// Ask the server for post #1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(function (response) {
//     return response.json(); // Convert raw response to usable JavaScript object
//   })
//   .then(function (data) {
//     console.log(data.title); // Print the title: "sunt aut facere..."
//   });



//   try {
//   // Intentional error: variable doesn't exist
//   let result = 10 + unknownVariable;
//   console.log(result);
// } catch (error) {
//   console.log("Something went wrong:", error.message);
// }

// console.log("App is still running safely!");

// async function getPost() {
//   try {
//     // Wait for the response from the server
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     // Wait for the response to convert into JSON
//     let data = await response.json();
//     // Use the data
//     console.log("Title:", data.title);
//   } catch (error) {
//     // Catch network issues or server crashes
//     console.log("Failed to fetch data:", error);
//   }
// }

// getPost();


// async function getPost() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data.title);
//   } catch (error) {
//     console.log("Failed to fetch post:", error);
//   }
// }

// getPost();