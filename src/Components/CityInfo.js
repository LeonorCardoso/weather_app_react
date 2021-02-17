import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "../CSS_Components/CityInfo.css";

export default function CityInfo(props) {
    return (
      <div>
        <span className="current-date"><FormattedDate date={props.data.date} /></span>
        <br />
        <br />
        <div className="city-info">
          <div className="row justify-content-center">
            <div className="col-5">
              <h4 className="city">{props.data.city}</h4>
              <h5 className="weather-temperature">
                <span className="todays-icon"><WeatherIcon  code={props.data.icon} /></span>
                <WeatherTemperature celsius={props.data.temperature} />
              </h5>
            </div>
            <div className="col-5">
              <h5>
                Humidity:{props.data.humidity}%
                <br />
                Wind:{Math.round(props.data.wind)}km/h
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  

  
}
