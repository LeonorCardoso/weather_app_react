import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import Footer from "./Components/Footer";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
        <WeatherApp />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
