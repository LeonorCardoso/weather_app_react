import React from "react";
import ReactDOM from "react-dom";
import SearchWeather from "./Components/SearchWeather.js";
import Footer from "./Components/Footer";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <SearchWeather defaultCity="Lisbon"/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
