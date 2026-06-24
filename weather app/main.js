const apiKey= "350bdc8e4ab84e7685284016261806"
const apiUrl= "https://api.weatherapi.com/v1/current.json?key=350bdc8e4ab84e7685284016261806&aqi=yes&q="

const searchBox =document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+city);

    if(response.status==400  ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.location.name;
    document.querySelector(".temp").innerHTML= Math.round(data.current.temp_c) +"°C";
    document.querySelector(".humidity").innerHTML= data.current.humidity+"%";
    document.querySelector(".wind").innerHTML= data.current.wind_kph+" km/h";


    if(data.current.condition.text == "Partly cloudy"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/113.png"
    }
    else if(data.current.condition.text=="Cloudy"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/119.png"
    }
    else if(data.current.condition.text=="Overcast"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/122.png"
    }
    else if(data.current.condition.text=="Haze"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/125.png"
    }
    else if(data.current.condition.text=="Dust haze"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/128.png"
    }
    else if(data.current.condition.text=="Blowing dust"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/131.png"
    }
    else if(data.current.condition.text=="Dust Storm"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/134.png"
    }
    else if(data.current.condition.text=="Sandstorm"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/137.png"
    }
    else if(data.current.condition.text=="Severe sandstorm"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/140.png"
    }
    else if(data.current.condition.text=="Mist"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/143.png"
    }
    else if(data.current.condition.text=="Smoke"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/146.png"
    }
    else if(data.current.condition.text=="Smoky haze"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/149.png"
    }
    else if(data.current.condition.text=="Smog"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/152.png"
    }
    else if(data.current.condition.text=="Cloudy"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/119.png"
    }
    else if(data.current.condition.text=="Severe smog"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/155.png"
    }
    else if(data.current.condition.text=="Saharan dust"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/158.png"
    }
    else if(data.current.condition.text=="Dust"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/161.png"
    }
    else if(data.current.condition.text=="Patchy rain possible"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/158.png"
    }
    else if(data.current.condition.text=="Patchy snow possible"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/179.png"
    }
    else if(data.current.condition.text=="Patchy Sleet Possible"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/182.png"
    }
    else if(data.current.condition.text=="Patchy freezing drizzle possible"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/185.png"
    }
    else if(data.current.condition.text=="Thundery outbreaks possible"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/200.png"
    }
    else if(data.current.condition.text=="Blowing snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/227.png"
    }
    else if(data.current.condition.text=="Blizzard"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/230.png"
    }
    else if(data.current.condition.text=="Fog"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/248.png"
    }
    else if(data.current.condition.text=="Freezing fog"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/260.png"
    }
    else if(data.current.condition.text=="Patchy light drizzle"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/263.png"
    }
    else if(data.current.condition.text=="Light drizzle"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/266.png"
    }
    else if(data.current.condition.text=="Freezing drizzle"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/281.png"
    }
    else if(data.current.condition.text=="Heavy freezing drizzle"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/284.png"
    }
    else if(data.current.condition.text=="Patchy light rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/293.png"
    }
    else if(data.current.condition.text=="Light rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/296.png"
    }
    else if(data.current.condition.text=="Moderate rain at times"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/299.png"
    }
    else if(data.current.condition.text=="Moderate rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/302.png"
    }
    else if(data.current.condition.text=="Heavy rain at times"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/305.png"
    }
    else if(data.current.condition.text=="Heavy rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/308.png"
    }
    else if(data.current.condition.text=="Light freezing rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/311.png"
    }
    else if(data.current.condition.text=="Moderate or heavy freezing rain"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/314.png"
    }
    else if(data.current.condition.text=="Light sleet"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/317.png"
    }
    else if(data.current.condition.text=="Moderate or heavy sleet"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/320.png"
    }
    else if(data.current.condition.text=="Patchy light snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/323.png"
    }
    else if(data.current.condition.text=="Light snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/326.png"
    }
    else if(data.current.condition.text=="Patchy moderate snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/317.png"
    }
    else if(data.current.condition.text=="Moderate snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/332.png"
    }
    else if(data.current.condition.text=="Patchy heavy snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/335.png"
    }
    else if(data.current.condition.text=="Heavy snow"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/338.png"
    }
    else if(data.current.condition.text=="Ice pellets"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/350.png"
    }
    else if(data.current.condition.text=="Light rain shower"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/353.png"
    }
    else if(data.current.condition.text=="Moderate or heavy rain shower"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/356.png"
    }
    else if(data.current.condition.text=="Torrential rain shower"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/359.png"
    }
    else if(data.current.condition.text=="Light sleet showers"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/362.png"
    }
    else if(data.current.condition.text=="Moderate or heavy sleet showers"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/365.png"
    }
    else if(data.current.condition.text=="Light snow showers"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/368.png"
    }
    else if(data.current.condition.text=="Moderate or heavy snow showers"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/371.png"
    }
    else if(data.current.condition.text=="Light showers of ice pellets"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/374.png"
    }
    else if(data.current.condition.text=="Moderate or heavy showers of ice pellets"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/377.png"
    }
    else if(data.current.condition.text=="Patchy light rain with thunder"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/386.png"
    }
    else if(data.current.condition.text=="Moderate or heavy rain with thunder"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/389.png"
    }
    else if(data.current.condition.text=="Patchy light snow with thunder"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/392.png"
    }
    else if(data.current.condition.text=="Moderate or heavy snow with thunder"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/395.png"
    }
    else if(data.current.condition.text=="Sunny" || data.current.condition.text=="Clear"){
        weatherIcon.src= "https://cdn.weatherapi.com/weather/64x64/day/113.png"
    }

    document.querySelector('.weather').style.display="block";
    document.querySelector('.error').style.display="none";

    }
    


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

