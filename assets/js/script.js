// grab search button
const searchBtn = document.getElementById("searchBtn");
// Attach click listener to button
searchBtn.addEventListener("click", fetchweather)

// Get City Input
let cityInput = document.getElementById("citysearch");


//function for API to retrieve data
function fetchweather()  {
	var userInputValue = cityInput.value.trim();
	document.getElementById('cardTitle').innerHTML = userInputValue;
	if(userInputValue)
		fetch(`https://api.openweathermap.org/geo/1.0/direct?appid=d24820a4b09e08d1bb27ae1a68013291&q=${userInputValue}`)
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				console.log(data);
				latlon(data)
			})
}

    function latlon(data) {
        var latitude = data[0].lat
        var longitude = data[0].lon
          fetch(`https://api.openweathermap.org/data/2.5/onecall?appid=d24820a4b09e08d1bb27ae1a68013291&lat=${latitude}&lon=${longitude}&units=imperial`)
          .then(function(res) {
            return res.json()
          })
          .then(function(data) {
	         
	          const dayOne = new Date(data.daily[0].dt * 1000);
	          const dayTwo = new Date(data.daily[1].dt * 1000);
              const dayThree = new Date(data.daily[2].dt * 1000);
              const dayFour = new Date(data.daily[3].dt * 1000);
              const dayFive = new Date(data.daily[4].dt * 1000);
	         
              document.getElementById('dayOneDate').innerHTML = `${dayOne.toLocaleString()}`
	          document.getElementById('dayTwoDate').innerHTML = `${dayTwo.toLocaleString()}`
              document.getElementById('dayThreeDate').innerHTML = `${dayThree.toLocaleString()}`
              document.getElementById('dayFourDate').innerHTML = `${dayFour.toLocaleString()}`
              document.getElementById('dayFiveDate').innerHTML = `${dayFive.toLocaleString()}`
	          
              document.getElementById('dayOneTemp').innerHTML = `Temp: ${data.daily[0].temp.day}`
              document.getElementById('dayTwoTemp').innerHTML = `Temp: ${data.daily[1].temp.day}`
              document.getElementById('dayThreeTemp').innerHTML = `Temp: ${data.daily[2].temp.day}`
              document.getElementById('dayFourTemp').innerHTML = `Temp: ${data.daily[3].temp.day}`
              document.getElementById('dayFiveTemp').innerHTML = `Temp: ${data.daily[4].temp.day}`

              document.getElementById('dayOneWind').innerHTML = `Wind Speed: ${data.daily[0].wind_speed}`
              document.getElementById('dayTwoWind').innerHTML = `Wind Speed: ${data.daily[1].wind_speed}`
              document.getElementById('dayThreeWind').innerHTML =`Wind Speed: ${data.daily[2].wind_speed}`
              document.getElementById('dayFourWind').innerHTML = `Wind Speed: ${data.daily[3].wind_speed}`
              document.getElementById('dayFiveWind').innerHTML = `Wind Speed: ${data.daily[4].wind_speed}`

              
              document.getElementById('dayOneHumidity').innerHTML = `Humidity: ${data.daily[0].humidity}`
              document.getElementById('dayTwoHumidity').innerHTML = `Humidity: ${data.daily[1].humidity}`
              document.getElementById('dayThreeHumidity').innerHTML = `Humidity: ${data.daily[2].humidity}`
              document.getElementById('dayFourHumidity').innerHTML = `Humidity: ${data.daily[3].humidity}`
              document.getElementById('dayFiveHumidity').innerHTML = `Humidity: ${data.daily[4].humidity}`


              document.getElementById('dayOneUvIndex').innerHTML = `UV Index: ${data.daily[0].uvi}`
              document.getElementById('dayTwoUvIndex').innerHTML = `UV Index: ${data.daily[1].uvi}`
              document.getElementById('dayThreeUvIndex').innerHTML = `UV Index: ${data.daily[2].uvi}`
              document.getElementById('dayFourUvIndex').innerHTML = `UV Index: ${data.daily[3].uvi}`
              document.getElementById('dayFiveUvIndex').innerHTML = `UV Index: ${data.daily[4].uvi}`
              
           
	          document.getElementById('temp').innerHTML =  `Temp: ${data.current.temp}°F`;
			  document.getElementById('wind').innerHTML = `Wind Speed: ${data.current.wind_speed} MPH`;
			  document.getElementById('humidity').innerHTML = `Humidity: ${data.current.humidity}%`;
			  document.getElementById('uvIndex').innerHTML = `UV Index: ${data.current.uvi}`;
          })
        };