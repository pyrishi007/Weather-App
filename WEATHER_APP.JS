
const apiKey = "4ac4c11c4ce3ffdcbacb9f8b4aaf51e4";
const apiURl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let Weather_status = document.querySelector(".weather_class");
let imput = document.querySelector(".search input");
let search = document.querySelector(".search button");


//Search_BOX
search.addEventListener("click", () => {
  weatherReport(imput.value);
});


//async Weather_Report function
async function weatherReport(city) {

  //apikey Request
  const Report = await fetch(apiURl + city + `&appid=${apiKey}`);
  let updateReport = await Report.json();

  //logging report
  console.log(updateReport);


  update_weather_app(updateReport);
  weather_status_upated(updateReport);
}


//update DOM
function update_weather_app(updateReport) {
  //city_name
  document.querySelector(".city").innerHTML = updateReport.name;

  //city_temp
  document.querySelector(".temp").innerHTML = `${Math.round(
    updateReport.main.temp
  )}°c`;

  //city_humidity
  document.querySelector(".humidity").innerHTML = `${Math.round(
    updateReport.main.humidity
  )}%`;

  //city_wind_speed
  document.querySelector(".wind").innerHTML = `${Math.round(
    updateReport.wind.speed
  )} km/hr`;
}


//updating weather condition logo
function weather_status_upated(updateReport) {
  let condition = updateReport.weather[0].main;

  if (condition == "Clear") {
    Weather_status.src = "/IMAGE/clear.png";

  } else if (condition == "Clouds") {
    Weather_status.src = "/IMAGE/clouds.png";

  } else if (condition == "Dizzle") {
    Weather_status.src = "/IMAGE/dizzle.png";

  } else if (condition == "Mist") {
    Weather_status.src = "/IMAGE/mist.png";

  } else if (condition == "Rain") {
    Weather_status.src = "/IMAGE/rain.png";

  } else if (condition == "Snow") {
    Weather_status.src = "/IMAGE/snow.png";
  };

}
