const weatherData = {

    calicut: {
        city: "Calicut",
        temperature: 30,
        feelsLike: 32,
        description: "Sunny",
        humidity: 70,
        wind: 12,
        pressure: 1012
    },

    kannur: {
        city: "Kannur",
        temperature: 29,
        feelsLike: 31,
        description: "Cloudy",
        humidity: 75,
        wind: 10,
        pressure: 1010
    },

    kochi: {
        city: "Kochi",
        temperature: 31,
        feelsLike: 34,
        description: "Rainy",
        humidity: 80,
        wind: 15,
        pressure: 1008
    }
};




const forecastData = {

    calicut: [
        {
            day: "Monday",
            temperature: 30,
            condition: "Sunny"
        },
        {
            day: "Tuesday",
            temperature: 32,
            condition: "Cloudy"
        },
        {
            day: "Wednesday",
            temperature: 28,
            condition: "Rainy"
        },
        {
            day: "Thursday",
            temperature: 31,
            condition: "Sunny"
        },
        {
            day: "Friday",
            temperature: 29,
            condition: "Cloudy"
        }
    ],

    kannur: [
        {
            day: "Monday",
            temperature: 29,
            condition: "Cloudy"
        },
        {
            day: "Tuesday",
            temperature: 30,
            condition: "Rainy"
        },
        {
            day: "Wednesday",
            temperature: 27,
            condition: "Rainy"
        },
        {
            day: "Thursday",
            temperature: 31,
            condition: "Cloudy"
        },
        {
            day: "Friday",
            temperature: 28,
            condition: "Sunny"
        }
    ],

    kochi: [
        {
            day: "Monday",
            temperature: 31,
            condition: "Rainy"
        },
        {
            day: "Tuesday",
            temperature: 30,
            condition: "Rainy"
        },
        {
            day: "Wednesday",
            temperature: 32,
            condition: "Cloudy"
        },
        {
            day: "Thursday",
            temperature: 29,
            condition: "Rainy"
        },
        {
            day: "Friday",
            temperature: 31,
            condition: "Cloudy"
        }
    ]
};




const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");

const feelsLike = document.getElementById("feelsLike");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const pressure = document.getElementById("pressure");

const forecast = document.getElementById("forecast");




const showWeather = (weather) => {

    

    const {
        city,
        temperature: temp,
        feelsLike: feels,
        description: desc,
        humidity: humid,
        wind: windSpeed,
        pressure: airPressure
    } = weather;


    cityName.innerText = city;

    temperature.innerText = temp;

    description.innerText = desc;

    feelsLike.innerText = feels;

    humidity.innerText = `${humid}%`;

    wind.innerText = `${windSpeed} km/h`;

    pressure.innerText = `${airPressure} hPa`;


    console.log("Weather:", weather);
};




const searchCity = () => {

    const city = cityInput.value.toLowerCase().trim();

    const weather = weatherData[city];


    if (weather?.city) {

        
        showWeather(weather);

        showForecast(city);

        localStorage.setItem("lastCity", city);

    } else {

        alert("City not found!");

        console.log("City not found:", city);
    }
};




searchBtn.addEventListener("click", searchCity);



const showForecast = (city) => {

    forecast.innerHTML = "";


    const cityForecast = forecastData[city];


    cityForecast.forEach(day => {

        const card = document.createElement("div");

        card.classList.add("forecast-card");

        card.innerHTML = `
            <h3>${day.day}</h3>
            <p>${day.temperature}°C</p>
            <p>${day.condition}</p>
        `;

        forecast.appendChild(card);

    });
};




const rainyDays = forecastData.calicut.filter(
    day => day.condition === "Rainy"
);

console.log("Rainy days:", rainyDays);




const temperatures = forecastData.calicut.map(
    day => day.temperature
);

console.log("Temperatures:", temperatures);




const totalTemperature = temperatures.reduce(
    (total, temp) => total + temp,
    0
);

const averageTemperature =
    totalTemperature / temperatures.length;




const sortedTemperatures = [...temperatures].sort(
    (a, b) => a - b
);

console.log("Sorted temperatures:", sortedTemperatures);




const firstRainyDay = forecastData.calicut.find(
    day => day.condition === "Rainy"
);

console.log("First rainy day:", firstRainyDay);



const highestTemperature =
    Math.max(...temperatures);

const lowestTemperature =
    Math.min(...temperatures);




document.getElementById("averageTemp").innerText =
    `Average Temperature: ${averageTemperature}°C`;

document.getElementById("highestTemp").innerText =
    `Highest Temperature: ${highestTemperature}°C`;

document.getElementById("lowestTemp").innerText =
    `Lowest Temperature: ${lowestTemperature}°C`;




const lastCity = localStorage.getItem("lastCity");


if (lastCity) {

    cityInput.value = lastCity;

    console.log("Last searched city:", lastCity);
}



showWeather(weatherData.calicut);

showForecast("calicut");
