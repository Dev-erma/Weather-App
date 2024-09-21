const apiKey = "1f76d634228f080614737cb35df2ca59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(citty) {
    const responce = await fetch(apiUrl + citty + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data)
    
    // another way to do it

    // if(data.name == undefined){
    //     document.querySelector(".weather").style.display = "none";
    //     document.querySelector(".card").innerHTML += `<p style = "color: red";>Invalid city name</p>`;
    // }
    setTimeout(()=>{     
    
       

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/drizzlee.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

},170);
// document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";


if (responce.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".card").style.height = "30vh";
}
else document.querySelector(".card").style.height = "93vh";




}
searchBtn.addEventListener("click", () => {
  
    checkWeather(searchBox.value);
})







//lengthy way to do that

// document.querySelector(".card").innerHTML += ` <div class="weather">
//         <img src="images/rain.png" class="weather-icon">
//         <h1 class="temp">27°c</h1>
//         <h2 class="city">Banglore</h2>
//         <div class="details flex">
//             <div class="col flex">
//                 <img src="images/humidity.png" alt="">
//                 <div><p class="humidity">50%</p>
//                 <p>Humidity</p></div>
//             </div>
//             <div class="col flex">
//                 <img src="images/wind.png" alt="">
//                 <div><p class="wind">50Km/h</p>
//                 <p>Wind</p></div>
//             </div>
//         </div>

//     </div> `;
//     const weatherIcon = document.querySelector(".weather-icon");
