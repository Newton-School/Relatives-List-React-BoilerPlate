import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relatives = ["Hitesh", "Sanya", "Nilu", "Snehil", "Nisha"];
  render() {
    return (
      <>
        <ol key="realtiveList">
          {this.relatives.map((rel, index) => (
            <li key={`relativeListItem${index + 1}`}>{rel}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
