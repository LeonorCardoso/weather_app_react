import React from "react";
import "../CSS_Components/Header.css";

export default function Header() {
  function handleSubmit(event){
    event.preventDefault();
    alert ("hello");
  }
  return (
    <div className="Header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          autocomplete="off"
          className="enter-city"
        />
        <input type="submit" value="Search" className="other-city" />
        <button type="button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
