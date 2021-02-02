import React from "react";
import "../CSS_Components/CurrentDate.css";

export default function CurrentDate() {
  let dayTime = {
    day: "Saturday",
    time: "17:01"
  };
  return (
    <div className="current-date">
      {dayTime.day} {dayTime.time}
    </div>
  );
}
