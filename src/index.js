import React from "react";
import ReactDOM from "react-dom";

const name = "Shivam Soni";

const d = new Date();
const year = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
