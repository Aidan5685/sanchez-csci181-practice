let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.querySelector("#weather-output");

function renderWeather() {
  if (is_loading) {
    output_element.className = "weather-loading";
    output_element.textContent = "Loading...";
    return;
  }

  if (error_message) {
    output_element.className = "weather-error";
    output_element.textContent = error_message;
    return;
  }

  if (weather_data) {
    const current_period = weather_data.properties.periods[0];

    output_element.className = "weather-success";
    output_element.innerHTML = `
      <p class="weather-temp">${current_period.temperature}&deg;</p>
      <p class="weather-forecast">${current_period.shortForecast}</p>
    `;
    return;
  }

  output_element.className = "weather-fallback";
  output_element.textContent = "Weather data not available.";
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );

    if (!response.ok) {
      throw new Error(
        `Unable to load weather data. Status: ${response.status}`,
      );
    }

    weather_data = await response.json();
  } catch (error) {
    error_message = error.message;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
