import React, { useState } from "react";
import ForecastePreview from "./ForecastPreview.js";
import axios from "axios";
import "../CSS_Components/Forecast.css";

export default function Forecast(props) {
  const [loaded , setLoaded] = useState(false);
  const [forecast , setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if(loaded && props.city === forecast.city.name) {
    return (
      <div className="row justify-content-center">
        <ForecastePreview data={forecast.list[0]}/>
        <ForecastePreview data={forecast.list[1]}/>
        <ForecastePreview data={forecast.list[2]}/>
        <ForecastePreview data={forecast.list[3]}/>
        <ForecastePreview data={forecast.list[4]}/>
      </div>
    );
  } else {
    let apiKey="58ce3f6986fa88fa9731f046fe82bae3";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return props.city;
  }
  
}
