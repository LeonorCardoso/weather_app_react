import React, { useState }  from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios";
import "../CSS_Components/CityInfo.css";

export default function CityInfo() {
  const [weatherData, setWeatherData] = useState({ ready: false}); 
  

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="#fbd46d"
                  size={64}
                  animate={true}
                />, 
    });
  }

  if(weatherData.ready){
    return (
      <div className="city-info">
        <div className="row justify-content-center">
          <div className="col-5">
            <h4 id="city">{weatherData.city}</h4>
            <h5 className="weather-temperature">
              <span>{weatherData.icon}</span>
              <span className="temperature">
                <span id="temperature" className="temperature-number">
                  {Math.round(weatherData.temperature)}
                </span>
                  <span className="units">
                  <a href="/">°C</a>
                  <span>|</span>
                  <a href="/">°F</a>
                </span>
              </span>
            </h5>
          </div>
          <div class="col-5">
            <h5>
              Humidity:{weatherData.humidity}%
              <br />
              Wind:{Math.round(weatherData.wind)}km/h
            </h5>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "58ce3f6986fa88fa9731f046fe82bae3";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  
}
