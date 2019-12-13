import React from "react";
import "./App.css";
import NasaGetData from "./Component/NasaGetData"

function App() {
  return (
    <div className="App">
            {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      {/* <h1>Astronomy picture of the day</h1> */}
      <NasaGetData />
    </div>
  );
}

export default App;
