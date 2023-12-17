
const weatherIcon =  document.querySelector(".weather-icon") ;
const input =  document.querySelector(".input");
const searchBtn = document.querySelector("button");

const apiKey = "795828bf89d8d14e6042c5d99cd5acb5"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// so we can change the city according to our input (city search) we remove the city frim the api and put it an argument
const checkWeather = async (city) => {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
  
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

     }
     else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

     }
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°c";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";

     if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
        document.querySelector(".condition").innerHTML = data.weather[0].main
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
        document.querySelector(".condition").innerHTML = data.weather[0].main

     }
     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
        document.querySelector(".condition").innerHTML = data.weather[0].main

     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
        document.querySelector(".condition").innerHTML = data.weather[0].main

     }
     else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
     }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
        document.querySelector(".condition").innerHTML = data.weather[0].main

     }

     document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(input.value);
});
