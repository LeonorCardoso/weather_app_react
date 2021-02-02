import React from "react";
import Header from "./Components/Header.js";
import CurrentDate from "./Components/CurrentDate.js";
import CityInfo from "./Components/CityInfo.js";
import Forecast from "./Components/Forecast";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <Header />
      <CurrentDate />
      <br />
      <br />
      <CityInfo />
      <br />
      <br />
      <Forecast />
    </div>
  );
}
