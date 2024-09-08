window.onload = function () {
  let ctime = new Date();
  let hour = ctime.getHours();
  let mins = ctime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[ctime.getDay()];

  let currenttime = document.querySelector("#time");
  currenttime.innerHTML = `${day} ${hour}:${mins} ,`;

  function displayTemp(response) {
    let temperature = Math.round(response.data.temperature.current);

    let city = response.data.city;
    console.log(response.city);

    let description = response.data.condition.description;

    let humidity = response.data.temperature.humidity;

    let wind = response.data.wind.speed;

    let iconUrl = response.data.condition.icon_url;

    let tempp = document.querySelector("#degree");
    tempp.innerHTML = `${temperature}`;

    let placee = document.querySelector("#cityy");
    placee.innerHTML = `${city}`;

    let feelss = document.querySelector("#feels");
    feelss.innerHTML = `${description}`;

    let humidd = document.querySelector("#humid");
    humidd.innerHTML = `${humidity}%`;

    let windd = document.querySelector("#wind");
    windd.innerHTML = `${wind} km/h`;

    let iconn = document.querySelector("#icon");
    iconn.innerHTML = `<img src="${iconUrl}" class="emoji" />`;
  }
  function cityinput(event) {
    event.preventDefault();
    let city = document.querySelector(".search-inp").value;
    let apiKey = "ba24ot429e5023e68078f3c73b9cdf5d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }
  document.querySelector("form").addEventListener("submit", cityinput);
};

function displayForecast() {
  let forecast = document.querySelector("#weatherForecast");
  let days = ["Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="forecast">
<div class="forecastDay">${day}</div>
        <div class="forecastIcon">☀️</div>
        <div class="forecastTemp">19° | <span class="night">15°</span></div>
      </div>`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();
