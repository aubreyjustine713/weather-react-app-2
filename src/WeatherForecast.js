import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "d8ae07eb683be1d16aad578147a0ceef";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Day</div>
          <div className="Icon">
            <img
              src="https://openweathermap.org/img/wn/04n@2x.png"
              alt="weather icon"
            />
          </div>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperaturesMax">19°</span> |
            <span className="WeatherForecastTemperaturesMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
