let search = document.getElementById(".search");
let searchBtn = document.getElementById("searchBtn");
comsole.log(searchBtn)
let cityBtn;
let cities = document.getElementById(".cities");
let weatherContainer = document.getElementById("weather-container");
let forecastContainer = document.getElementById("forecast-Container");
let fiveDay = document.getElementById("five");


let apiKey = "98e0a91b4e1016cd6861c0d2bb694d0b";
let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${citysearch}&limit=5&appid=${apiKey}`;
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=` + citysearch + `&appid=` + `apiKey`;


document.getElementById(".searchBtn").addEventListener("click", fetchweather);

function fetchweather() 
    var userInputValue = cities.value.trim();
   console.log("userInputValue", userInputValue)
    if(userInputValue) 
      fetch(`https://api.openweathermap.org/geo/1.0/direct?appid=d24820a4b09e08d1bb27ae1a68013291&q=${userInputValue}&=&=`)
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
        console.log(data);
        press(data)
    })



    function press(data) {
        var latitude = data[0].lat
        var longitude = data[0].lon
        console.log(latitude)
        console.log(longitude);
          fetch(`https://api.openweathermap.org/data/2.5/onecall?appid=d24820a4b09e08d1bb27ae1a68013291&lat=${latitude}&lon=${longitude}&units=imperial`)
          .then(function(res) {
            return res.json()
          })
          .then(function(data) {
              console.log(data);
              currentWeather(data);
              appendSearch();
          })
        };