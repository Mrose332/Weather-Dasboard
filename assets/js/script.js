// grab search button
const searchBtn = document.getElementById("searchBtn");
// Attach click listener to button
searchBtn.addEventListener("click", fetchweather)

// Get City Input
let cityInput = document.getElementById("citysearch");



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

              document.getElementById('dayOneHumidity').innerHTML = `Humidity: ${data.daily[0].humidity.day}`

	          document.getElementById('temp').innerHTML =  `Temp: ${data.current.temp}°F`;
			  document.getElementById('wind').innerHTML = `Wind Speed: ${data.current.wind_speed} MPH`;
			  document.getElementById('humidity').innerHTML = `Humidity: ${data.current.humidity}%`;
			  document.getElementById('uvIndex').innerHTML = `UV Index: ${data.current.uvi}`;
          })
        };