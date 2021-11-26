import React from "react";
import { render } from "react-dom";

myglobal = 4;

function Hi() {
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));