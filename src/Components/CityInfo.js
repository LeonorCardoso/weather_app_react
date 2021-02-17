import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
              <h4 id="city">{props.data.city}</h4>
              <h5 className="weather-temperature">
                <WeatherIcon code={props.data.icon} />

                <span className="temperature">
                  <span id="temperature" className="temperature-number">
                    {Math.round(props.data.temperature)}
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
