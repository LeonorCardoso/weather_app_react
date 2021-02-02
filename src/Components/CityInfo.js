import React from "react";
import "../CSS_Components/CityInfo.css";

export default function CityInfo() {
  let weatherData = {
    city: "Lisbon",
    temperature: 13,
    description: "Clear sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 2,
    wind: 8
  };

  return (
    <div className="city-info">
      <div className="row justify-content-center">
        <div className="col-5">
          <h4 id="city">{weatherData.city}</h4>
          <h5 className="weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="todays-icon"
            />
            <span id="temperature" className="temperature-number">
              {weatherData.temperature}
            </span>
            <a href="/">°C</a>
            <span>|</span>
            <a href="/">°F</a>
          </h5>
        </div>
        <div class="col-5">
          <h5>
            Humidity:{weatherData.humidity}%
            <br />
            Wind:{weatherData.wind}km/h
          </h5>
        </div>
      </div>
    </div>
  );
}
