import React from "react";

function Heading() {
  var currentHour = new Date();

  var timeOfTheDay;
  const stateOfh1 = {
    color: "red"
  };
  if (currentHour.getHours() >= 0 && currentHour.getHours() < 12) {
    stateOfh1.color = "red";
    timeOfTheDay = "Good Morning!";
  } else if (currentHour.getHours() >= 12 && currentHour.getHours() < 18) {
    stateOfh1.color = "green";
    timeOfTheDay = "Good Afternoon";
  } else {
    stateOfh1.color = "blue";
    timeOfTheDay = "Good Evening!";
  }
  return (
    <h1 style={stateOfh1} className="heading">
      {timeOfTheDay}
    </h1>
  );
}

export default Heading;
