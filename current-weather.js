import weather from './data/current-weather.js';
import { formatDate, formatTemp } from './utils/format-data.js';
import { getLatLng } from './geolocation.js';
import { weatherConditionCodes } from './constants.js';
import { getCurrentWeather } from './services/weather.js';

// debugger

// console.log(weatherConditionCodes[String(weather.weather[0].id).charAt(0)])
// Convert weather type and gets the first item of the number
// String(weather.weather[0].id).charAt(0)


// Set Current City
function setCurrentCity($el, city) {
    $el.textContent = city;
}

// Set Current Country
function setCurrentCountry($el, country) {
    $el.textContent = country;
}

function setCurrentDate($el) {
    const date = new Date;
    const formattedDate = formatDate(date) 
    // debugger
    $el.textContent = formattedDate;
}

function setCurrentTemp($el, temp) {
    $el.textContent = formatTemp(temp)
}

// Check Solar Status
function solarStatus(sunriseTime, sunsetTime) {
    
    const currentHours = new Date().getHours();
    const sunriseHours = sunriseTime.getHours();
    const sunsetHours = sunsetTime.getHours();

    console.log('currentHours ' + currentHours);
    console.log('sunsetHours ' + sunsetHours);
    console.log('sunriseHours ' + sunriseHours);

    if (currentHours > sunsetHours || currentHours < sunriseHours) {
        return 'night'        
    }

    return 'day'
}

// Set Dynamic Backgrounds
function setBackground($el, conditionCode, solarStatus, weather, weatherId) {

    // const weatherId = weather.weather[0].id;

    const weatherType = weatherConditionCodes[conditionCode];
    // console.log('------', weatherId, weatherType);

    const size = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches ? '@2x' : '';
    const $body = document.querySelector('body');
    const $weatherImage = document.querySelector('.weather-type-image');
    

    // console.log(weatherType = weatherConditionCodes[weatherId])

    if (weather === 800) {
        console.log('OHHH YES, its ', weather, weatherType)
        weather = 'clear';
        
        $body.classList.add(`weather-type-${weather}-${solarStatus}`);
        $weatherImage.src = `./../images/${solarStatus}-weather-${weatherType}.png`;

        return
    }



    

    $body.classList.add(`weather-type-${weatherType}-${solarStatus}`);
    $weatherImage.src = `./../images/${solarStatus}-weather-${weatherType}.png`;

    console.log(`
        Current weather Type: ${weatherType}
        Solar Status: ${solarStatus}
        Weather Code: ${weatherConditionCodes[conditionCode]}
        Weather ID: ${weatherId}
    `)

    
    // $el.style.backgroundImage = `url("./../images/${solarStatus}-${weatherType}${size}.jpg")`;
}

function showCurrentWeather($app, $loader){
    $app.hidden = false;
    $loader.hidden = true;
}

function configCurrentWeather(weather) {

    const $app = document.querySelector('#app');
    const $loading = document.querySelector('#loading');
    // Loader
    showCurrentWeather($app, $loading )

    // Current Date
    const $setCurrentDate = document.querySelector('#current-weather-date');
    setCurrentDate($setCurrentDate)

    // City
    const $currentWeatherCity = document.querySelector('.current-location-name');
    const city = weather.name;
    setCurrentCity($currentWeatherCity, city)

    // Country
    const $currentWeatherCountry = document.querySelector('.current-country')
    const country = weather.sys.country;
    setCurrentCountry($currentWeatherCountry, country)

    // Temp
    const $currentWeatherTemp = document.querySelector('#current-weather-temp');
    const temp = weather.main.temp
    setCurrentTemp($currentWeatherTemp, temp);

    
    // Dynamic Background
    const sunriseTime = new Date(weather.sys.sunrise * 1000);
    const sunsetTime = new Date(weather.sys.sunset * 1000);
    const conditionCode = String(weather.weather[0].id).charAt(0);
    const weatherDetails = weather.weather[0].id;
    const fullId = weather.weather[0].id;
    setBackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime), weatherDetails, fullId)

    // debugger
}

export default async function currentWeather() {

    // GEO // API - weather // Config
    const { lat, lng, isError } = await getLatLng();

    if (isError) return console.log('Error finding your location')

    console.log(lat, lng)


    const { isError: currentWatherError, data: weather } = await getCurrentWeather(lat, lng);

    if (currentWatherError) return console.log('oh! an error has occurred getting the API data');

    configCurrentWeather(weather);

    console.log(weather)
}