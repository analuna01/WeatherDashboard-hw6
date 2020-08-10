// On-click function to search for the city
$("#find-city").on("click", function (event) {
  event.preventDefault();
  var city = $("#search-city").val();
  var apiKey = "15e194eb7337b7a0b68384d6ffba65cc";

  // AJAX for Weather Info:
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + ",Burundi&appid=" + apiKey,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(response.main.temp);
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".humidity").text("Humidity:" + response.main.humidity + "%");
    $(".wind").text("Wind:" + response.wind.speed);

  // Converts temp from Kelvin to Fahrenheit:
    var temp = (response.main.temp - 273.15) * 1.80 + 32;
    $(".temp").text("Temperature:" + temp.toFixed(2) + "F");

    // AJAX for UV Index:
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/uvi?" + encodeURIComponent(city) + apiKey,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $(".uvIndex").text("UV Index:" + response)
    })

    // AJAX for 5 Day Forecast:
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(city) + ",Burundi&appid=" + apiKey,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        $(".forecast").html("<h3>" + response.list.main.temp + " Weather Details</h3>");

      })
    // updateWeather(response.name, response.main.temp, response.main.humidity, response.wind.speed, "");
  });
});


//Set date for weather forecast
function setDate() {
  var setDate = $("#currentDate");
  var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
  setDate.html(date);
  console.log(setDate);
}

setDate();


// Display weather categories:
// function displayWeather() {
//   var weatherDiv = $("#results-card");

//   var currentDiv = $("<div> " + "</div>");
  // var searchedCity = $("<h1>" + "City:" + "<span id='cityTag'></span>  </h1>");
//   var temperature = $("<p>" + "Temperature:" + "<span id='tempTag'></span> </p>");
//   var humidity = $("<p>" + "Humidity:" + "<span id='humidityTag'></span> </p>");
//   var wind = $("<p>" + "Wind:" + "<span id='windTag'></span> </p>");
//   var uvIndex = $("<p>" + "UV Index:" + "<span id='uvTag'></span> </p>");


//   currentDiv.append(searchedCity);
//   currentDiv.append(temperature);
//   currentDiv.append(humidity);
//   currentDiv.append(wind);
//   currentDiv.append(uvIndex);
//   weatherDiv.append(currentDiv);
//   console.log(displayWeather);

// };

// Display weather results:
// function updateWeather(city, temperature, humidity, windSpeed, uvIndex) {
//   $("#cityTag").text(city);
//   $("#tempTag").text(temperature - 273.15) * 1.80 + 32;
//   $("#humidityTag").text(humidity);
//   $("#windTag").text(windSpeed);

//   $("#uvTag").text(uvIndex);
// }




// displayWeather();




















