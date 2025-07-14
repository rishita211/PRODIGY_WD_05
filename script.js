const apiKey = "YOUR_API_KEY"; // Replace with your real OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherBox = document.getElementById("weatherInfo");
      if (data.cod === 200) {
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;

        weatherBox.innerHTML = `
          <p><strong>🌍 Location:</strong> ${data.name}</p>
          <p><strong>🌡 Temperature:</strong> ${temp} °C</p>
          <p><strong>🌤 Condition:</strong> ${condition}</p>
          <p><strong>💧 Humidity:</strong> ${humidity}%</p>
          <p><strong>🌬 Wind Speed:</strong> ${wind} m/s</p>
        `;
      } else {
        weatherBox.innerHTML = `<p>⚠️ City not found.</p>`;
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherInfo").innerHTML = "<p>❌ Error fetching weather.</p>";
    });
}
