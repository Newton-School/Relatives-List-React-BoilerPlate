import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  
  render() {
    let relatives = ["a", "b", "c", "d"];
    return (
      <>
        <ol key="relativeList">
          {this.relatives.map((relative, index) => (
            <li key={`relativeListItems${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
