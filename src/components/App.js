import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = [
      "Mrigank Bhaiya",
      "Utkarsh",
      "Nikhil",
      "Shivang",
      "Atul",
      "Harsh"
    ];
    return (
      <ol key="ralativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItems${index + 1}`}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
