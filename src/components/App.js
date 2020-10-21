import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let relatives=["Sham","Raju","Babu"];
        return(
           <>
           <ol key="relativeList">
           {relatives.map((rela,index)=>
            <li ke={`relativeListItem ${index+1}`}>{rela}</li>
            )}
           </ol>
           </>
        )
    }
}


export default App;
