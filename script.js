const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "4869a7505c12e3613ef62aedf25a71c4";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      document.body.style.backgroundImage = "url('images/cloudy.jpg')";
      document.body.style.backgroundSize = 'cover';
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      document.body.style.backgroundImage = "url('images/clear-sky.jpg')";
      document.body.style.backgroundSize = 'cover';
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      document.body.style.backgroundImage = "url('images/rainy.jpg')";
      document.body.style.backgroundSize = 'cover';
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      document.body.style.backgroundImage = "url('images/drizzle.jpg')";
      document.body.style.backgroundSize = 'cover';
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      document.body.style.backgroundImage = "url('images/mist.jpg')";
      document.body.style.backgroundSize = 'cover';
    } else if( data.weather[0].main == "Haze"){
      weatherIcon.src = "images/haze.png";
      document.body.style.backgroundImage = "url('images/haze.jpg')";
      document.body.style.backgroundSize = 'cover';
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "error";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
//event listener function on keypress
searchBox.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    console.log(searchBox.value);
    checkWeather(searchBox.value);
  }
});