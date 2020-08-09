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
    // $("#results-card").text(JSON.stringify(response));
    console.log(response);
    console.log(response.main.temp);

    updateWeather(response.main.temp, response.main.humidity, response.wind.speed, "");
  });
});

//Set date for weather forecast
function setDate() {
  var setDate = $("#currentDate");
  var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
  setDate.html(date);
  console.log(setDate);
}

// Display results from search
function displayWeather(){
  var weatherDiv = $("#results-card");

  var currentDiv = $("<div " + "</div>");
  var searchedCity = $("<h1>" +  "City" +  "</h1>");
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

function updateWeather(temperature, humidity, windSpeed, uvIndex){
  $("#tempTag").text(temperature); 
  $("#humidityTag").text(humidity);
  $("#windTag").text(windSpeed);
  
}
displayWeather();



















