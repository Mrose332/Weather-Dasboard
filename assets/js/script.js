// grab search button
const searchBtn = document.getElementById("searchBtn");
// Attach click listener to button
searchBtn.addEventListener("click", fetchweather)

// Get City Input
let cityInput = document.getElementById("citysearch");



function fetchweather()  {
	var userInputValue = cityInput.value.trim();
	console.log("userInputValue", userInputValue)
	if(userInputValue)
		fetch(`https://api.openweathermap.org/geo/1.0/direct?appid=d24820a4b09e08d1bb27ae1a68013291&q=${userInputValue}`)
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				console.log(data);
				press(data)
			})
}




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
			  const testElement = document.getElementById('test');
	          testElement.innerHTML = '123'
			  console.log('DATA', data, testElement)
          })
        };