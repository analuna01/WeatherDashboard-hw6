$("#find-city").on("click", function (event) {
  event.preventDefault();
  var city = $("#search-city").val();
  var apiKey = "15e194eb7337b7a0b68384d6ffba65cc";
  var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid=" + city + apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#results-card").text(JSON.stringify(response));
  });
});




//Set date for weather forecast
// function setDate() {
//   var setDate = $("#currentDate");
//   var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
//   setDate.html(date);
//   console.log(setDate);

// }



