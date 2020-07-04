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
const styles={
  color:"red",
  border: "1px solid blue"
};
ReactDom.render(
  <div>
    <h1 style={styles}>
      
      Crack the unacademy my number is {num}
    </h1>
    <div>
      <img className="imh" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
