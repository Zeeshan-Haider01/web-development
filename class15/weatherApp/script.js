let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let condition = document.querySelector("#condition");


searchBtn.addEventListener("click", function () {
    let cityName = cityInput.value;
    if (cityName === "") {
        alert("Enter city name");
        return;
    }
    getWeather(cityName);
});


function getWeather(cityName) {
    let apiKey = "6d0910fe57f505e2331f3e1a2f0dc6ba";
    // Step 1: Get city coordinates
    let locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (locationData) {
            console.log(locationData);
            if (locationData.length === 0) {
                alert("City not found");
                return;
            }

            // Get latitude and longitude
            let latitude = locationData[0].lat;
            let longitude = locationData[0].lon;

            // Step 2: Get weather
            let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            return fetch(weatherUrl);

        })
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
            city.innerText = cityInput.value;
            temperature.innerText = weatherData.data[0].temp + "°C";
            condition.innerText = weatherData.data[0].weather[0].description;
        })
        .catch(function (error) {
            console.log(error);
            alert("Something went wrong");
        });
}



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