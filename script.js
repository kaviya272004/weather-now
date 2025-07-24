async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '187fc42ce8aaec66d8abe543bbfa863e'; // <-- Replace this with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌥️ Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById('weatherResult').innerHTML = weatherHTML;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
  }
}
