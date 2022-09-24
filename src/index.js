import React from "react";
import ReactDOM from "react-dom";

var name1 = "Nafih";
var name2 = "Nafih";
ReactDOM.render(
  <div>
    <h1 className="head">My fav foods</h1>
    <ul>
      <li>
        you are {name1} {name2}
      </li>
      <li>bun</li>
      <li>bun</li>
    </ul>
  </div>,
  document.getElementById("root")
);
