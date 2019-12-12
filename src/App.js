import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaContainer from "./Component/NasaContainer"

function App() {

  const [getImg, setImg] = useState([]);

  useEffect(() => {
      axios
          .get('https://api.nasa.gov/planetary/apod?api_key=BqEDOxHAPDIiQ4XnIyJOPSYBAqE0j1wpbABEWnwu#')
          .then(response => {
              //console.log(response.data);
              setImg(response.data);
              //const getImg = response.data;
              //setImg(getImg);
          })
          .cath(error => {
              console.log(error);
          })
  }, [])
  
  return (
    <div className="App">
            {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <h1>Astronomy picture of the day</h1>
      <NasaContainer getImg={getImg} />
    </div>
  );
}

export default App;
