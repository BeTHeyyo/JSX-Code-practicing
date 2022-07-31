//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// const fName = "Siera";
// const lName = "Bet";
// const num = 7;
// const date = new Date();

ReactDOM.render(
  // <div>
  //   <h1 class="heading" contentEditable="true" spellCheck="false">
  //     Hello {fName + " " + lName}!
  //   </h1>
  //   <p>Your lucky number is {num}</p>
  //   <ul>
  //     <li>first element</li>
  //     <li>second elevent</li>
  //     <li>forth element</li>
  //   </ul>
  //   <p>Copyright {date.getHours()}</p>
  // </div>,
  <App />,
  document.getElementById("root")
);
