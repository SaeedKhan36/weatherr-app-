const searchButton = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput");

const resultBox = document.getElementById("result");

const API = "526e381205fb44ae77a81823ca46c5ab";

searchButton.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API}&units=metric`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.cod === "404") {
      resultBox.innerHTML = "City not found";
      return;
    }

    resultBox.innerHTML = `
      <div>
        <p><b>City:</b> ${data.name}</p>
        <p><b>Temperature:</b> ${data.main.temp} &#8451;</p>
        <p><b>Weather:</b> ${data.weather[0].main}</p>
        <p><b>Humidity:</b> ${data.main.humidity}%</p>
      </div>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    resultBox.innerHTML = "Error fetching weather data.";
  }
}


