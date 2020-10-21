import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
let relative=["Sham","Raju","Babu"];

        return(<>
        <ol key="relativeList">
            {relative.map((rel,index)=>
                <li key={`relativeListItem${index+1}`}>{rel}</li>
                )}
            </ol>
        </>
        )
    }
}


export default App;
