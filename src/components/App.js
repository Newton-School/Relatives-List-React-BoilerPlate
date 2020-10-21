import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relatives = ["rahul", "hahul", "pahul"];
  render() {
    return (
      <ol key="relativeList">
        {this.relatives.map((relative, index) => (
          <li key={"relativeListItem" + (index + 1)}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
