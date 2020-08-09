// On-click function to search for the city
$("#find-city").on("click", function (event) {
  event.preventDefault();
  var city = $("#search-city").val();
  var apiKey = "15e194eb7337b7a0b68384d6ffba65cc";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + ",Burundi&appid=" + apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(response.main.temp);

    updateWeather(response.name, response.main.temp, response.main.humidity, response.wind.speed, "");
  });
});


//Set date for weather forecast
function setDate() {
  var setDate = $("#currentDate");
  var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
  setDate.html(date);
  console.log(setDate);
}

// Display weather categories:
function displayWeather() {
  var weatherDiv = $("#results-card");

  var currentDiv = $("<div " + "</div>");
  var searchedCity = $("<h1>" + "City:" + "<span id='cityTag'></span>  </h1>");
  var temperature = $("<p>" + "Temperature:" + "<span id='tempTag'></span> </p>");
  var humidity = $("<p>" + "Humidity:" + "<span id='humidityTag'></span> </p>");
  var wind = $("<p>" + "Wind:" + "<span id='windTag'></span> </p>");
  var uvIndex = $("<p>" + "UV Index:" + "<span id='uvTag'></span> </p>");


  currentDiv.append(searchedCity);
  currentDiv.append(temperature);
  currentDiv.append(humidity);
  currentDiv.append(wind);
  currentDiv.append(uvIndex);
  weatherDiv.append(currentDiv);
  console.log(displayWeather);

};

// Display weather results:
function updateWeather(city, temperature, humidity, windSpeed, uvIndex) {
  $("#cityTag").text(city);
  $("#tempTag").text(temperature - 273.15) * 1.80 + 32;
  $("#humidityTag").text(humidity);
  $("#windTag").text(windSpeed);

}

displayWeather();




















