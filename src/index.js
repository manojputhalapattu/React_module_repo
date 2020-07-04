//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";
const num = 7;
const fname = "manoj";
const lname = "puthalapattu";
ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      Crack the unacademy my number is {num}
    </h1>
    <ul>
      <li> i love pongal </li>
      <li> i love chutny </li>
      <li> i want vada </li>
    </ul>
    <h2>
      Hey {fname} {lname + " "}!{" " + 6 + 7}
    </h2>
  </div>,
  document.getElementById("root")
);
