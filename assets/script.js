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
    // console.log(response);
    // console.log(response.main.temp);
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".humidity").text("Humidity:" + response.main.humidity + "%");
    $(".wind").text("Wind:" + response.wind.speed);

    // Converts temp from Kelvin to Fahrenheit:
    var temp = (response.main.temp - 273.15) * 1.80 + 32;
    $(".temp").text("Temperature:" + temp.toFixed(2) + "F");
    // AJAX for UV Index:
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/uvi?q=" + encodeURIComponent(city) + ",Burundi&appid=" + apiKey + "&lat=" + lat + "&lon=" + lon,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      // console.log(response.value);
      $(".uvIndex").text("UV Index:" + response.value);

    });
  });


  // AJAX for 5 Day Forecast:
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(city) + ",Burundi&appid=" + apiKey,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.list.length; i += 8) {
      console.log(response.list[i].weather[0].icon);

      var temperature = (response.list[i].main.temp - 273.15) * 1.80 + 32;
      temperature = temperature.toFixed(2) + "F";
      var humidity = response.list[i].main.humidity;
      // var wind = response.list[i].wind.speed;
      var iconSource = "http://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@2x.png";
      var weatherIcon = $("<img>");
      weatherIcon.attr("src", iconSource)
      console.log(weatherIcon);


      var forecastDiv = $(".forecast-results");
      //forecastDiv.html("");
      //var newDiv = $("<div>");
      var weatherIconElement = $("<div class='weatherIcon'>");
      var temperatureElement = $("<div class='temperature'>");
      var humidityElement = $("<div class='humidity'>");
      var resultContainer = $("<div class='forecastResults'>");

      //forecastDiv.append(newDiv);
      weatherIconElement.html(weatherIcon);
      temperatureElement.html(temperature);
      humidityElement.html(humidity);
      resultContainer.append(weatherIconElement);
      resultContainer.append(temperature);
      resultContainer.append(humidityElement);
      forecastDiv.append(resultContainer);

    };

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



















