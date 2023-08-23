import React from "react";

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
        <img
          src="https://openweathermap.org/img/wn/04n@2x.png"
          alt="weather icon"
        />
      </div>
      {/* iconUrl: `https://openweathermap.org/img/wn/$
            {response.data.weather[0].icon}@2x.png`; */}
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
