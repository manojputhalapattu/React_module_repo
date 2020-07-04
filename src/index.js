//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";
const num = 7;
const fname = "manoj";
const lname = "puthalapattu";
const img = "https://picsum.photos/200";
ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      Crack the unacademy my number is {num}
    </h1>
    <div>
      <img className="imh" src={img } />
    </div>
  </div>,
  document.getElementById("root")
);
