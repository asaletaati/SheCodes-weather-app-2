function search() {
  var apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  var cityName = document.getElementById("search-box").value;
  var tempUnit = document.querySelector('input[name="tempUnit"]:checked').value;

  if(cityName !== "") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${tempUnit}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      var weatherDetails = document.getElementById("weather-details");
      weatherDetails.innerHTML = `City: ${data.name}<br>Temperature: ${data.main.temp}°<span id="temp-unit">${tempUnit === "metric" ? "C" : "F"}</span><br>Wind Speed: ${data.wind.speed} km/h<br>Current time: ${new Date(data.dt * 1000).toLocaleString()}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert("Please enter city name!");
  }
}

function currentLocation() {
  var apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  var tempUnit = document.querySelector('input[name="tempUnit"]:checked').value;

  navigator.geolocation.getCurrentPosition(function(position) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${tempUnit}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      var weatherDetails = document.getElementById("weather-details");
      weatherDetails.innerHTML = `City: ${data.name}<br>Temperature: ${data.main.temp}°<span id="temp-unit">${tempUnit === "metric" ? "C" : "F"}</span><br>Wind Speed: ${data.wind.speed} km/h<br>Current time: ${new Date(data.dt * 1000).toLocaleString()}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
}
