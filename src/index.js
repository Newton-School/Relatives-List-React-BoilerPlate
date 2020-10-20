import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function generateCodeFromObject(obj) {
  //return a code generated string
  const relatives = ["Hitesh", "Sanya", "Nilu", "Snehil", "Nisha"];

  return (
    <>
      <ol key="realtiveList">
        {this.relatives.map((relative, index) => (
          <li key={"relativeListItem" + (index + 1)}>{relative}</li>
        ))}
      </ol>
    </>
  );
}

module.exports = generateCodeFromObject;

// ReactDOM.render(<App />, document.getElementById("root"));
