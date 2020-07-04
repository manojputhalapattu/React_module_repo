//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1> Crack the unacademy</h1>
    <ul>
      <li> i love pongal </li>
      <li> i love chutny </li>
      <li> i want vada </li>
    </ul>
  </div>,
  document.getElementById("root")
);
