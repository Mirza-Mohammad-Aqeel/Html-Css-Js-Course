
const weatherForm = document.getElementById("weatherform");
const cityinput = document.getElementById("enteredcity");
const card = document.querySelector("card");
const apikey = "7e110cdc2be92c961edf0feaba2825ce";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityinput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            console.error(error)
            displayError(error)
        }
    } else {
        displayError("Please enter a Valid city")
    }
});

async function getWeatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const response = await fetch(apiurl);

    if (!response.ok) {
        throw new Error("Could not fetch Weather data");
    } 

    return await response.json();
}

function displayWeatherInfo (data) {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descWeather = document.createElement("p");
    const weatheremoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} ° C`;
    humidityDisplay.textContent = `Humidity = ${humidity} %`;
    descWeather.textContent = description;
    weatheremoji.textContent = getWeatherEmoji(id)    


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descWeather.classList.add("descWeather");
    weatheremoji.classList.add("weatheremoji");



    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descWeather);
    card.appendChild(weatheremoji);

}

function getWeatherEmoji (weatherId) {

    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⚡";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";   
        case (weatherId >= 500 && weatherId < 600):
            return "⛈️";       
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";  
        case (weatherId >= 700 && weatherId < 800):
            return "🍃";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";   
        default:
            return "❓";                                                             
    }
}

function displayError (message) {
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errordisplay");

    card.textContent = ``
    card.style.display = "flex";
    card.appendChild(errorDisplay)
}    