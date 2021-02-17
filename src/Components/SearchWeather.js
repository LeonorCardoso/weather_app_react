import React, { useState }  from "react";
import CityInfo from "./CityInfo.js";
import axios from "axios";
import "../CSS_Components/SearchWeather.css";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "58ce3f6986fa88fa9731f046fe82bae3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  } 

  if(weatherData.ready){
  return (
    <div className="Header">
      <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Enter a city"
                  autocomplete="off"
                  className="enter-city"
                  onChange={updateCity}
              />
              <input type="submit" value="Search" className="other-city" />
              <button type="button">
              <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
      <CityInfo data={weatherData} />
    </div> 
  );} else {
    search();
    return "Loading...";
  }
}
