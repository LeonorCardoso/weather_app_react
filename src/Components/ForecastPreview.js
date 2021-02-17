import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "../CSS_Components/ForecastPreview.css";

export default function ForecastePreview(props) {
    function hours(){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`
    }
    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}ºC`;
    }
    return(
        <div className="WeatherForecast col-2">
          {hours()}
          <span><WeatherIcon code={props.data.weather[0].icon}/></span>
          {temperature()}
        </div>
    );
}