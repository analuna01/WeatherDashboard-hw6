$("#find-city").on("click", function (event) {
  event.preventDefault();
  var city = $("#search-city").val();
  var apiKey = "15e194eb7337b7a0b68384d6ffba65cc";
  var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(city) + "&appid=" + apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#results-card").text(JSON.stringify(response));
  });
});

function displayWeather(){
  var weatherDiv = $("#results-card");

  var currentDiv = $("<div " + "</div>");
  var searchedCity = $("<h1>" + "City" + "</h1>");
  var temperature = $("<p>" + "Temperature:" +"</p>");
  var humidity = $("<p>" + "Humidity:" + "</p>");
  var wind = $("<p>" + "Wind" + "</p>");
  var uvIndex = $("<p>" + "UV Index" + "</p>");

  currentDiv.append(searchedCity);
  currentDiv.append(temperature);
  currentDiv.append(humidity);
  currentDiv.append(wind);
  currentDiv.append(uvIndex);
  weatherDiv.append(currentDiv);
};

displayWeather();














// //Set date for weather forecast
// function setDate() {
//   var setDate = $("#currentDate");
//   var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
//   setDate.html(date);
//   console.log(setDate);

// }



