import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Sham", "Raju", "Babu"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relat, index) => (
            <li key={`relativeListItem ${index + 1}`}>{relat}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
