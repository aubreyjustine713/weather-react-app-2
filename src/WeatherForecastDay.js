import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <div className="Icon">
        <img src={props.icon} alt="weather icon" className="Icon" />
      </div>
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperaturesMax">
          {maxTemperature()}
        </span>{" "}
        |
        <span className="WeatherForecastTemperaturesMin">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
