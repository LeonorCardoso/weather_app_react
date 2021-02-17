import React from "react";
import SearchWeather from "./Components/SearchWeather.js";
import Forecast from "./Components/Forecast";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <SearchWeather defaultCity="Lisbon"/>
      <br />
      <br />
      <Forecast />
    </div>
  );
}
