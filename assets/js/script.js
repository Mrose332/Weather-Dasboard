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
fetch(`https://api.openweathermap.org/geo/1.0/direct?appid=98e0a91b4e1016cd6861c0d2bb694d0b&q=${userInputValue}&=&=`)
.then(function(res) {
return res.json()
			})
.then(function(data) {
console.log(data);
lonlat(data)
			})
}


function lonlat(data) {
var latitude = data[0].lat
var longitude = data[0].lon
console.log(latitude)
console.log(longitude);
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=98e0a91b4e1016cd6861c0d2bb694d0b`)
.then(function(res) {
 return res.json()
      })
.then(function(data) {
const testElement = document.getElementById('test');

console.log('DATA', data, testElement)
      })
    };

    