var apiKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Bujumbura,Burundi&appid=" + apiKey;
    
$("#search-Btn").on("click", search);
let searchCity;
    function search(e) {
        e.preventDefault();
        console.log(this);
        searchCity = $("#search-city").val();
    };


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(weatherURL);
    event.preventDefault;
    searchCity = $("#search-city").val();
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
});



