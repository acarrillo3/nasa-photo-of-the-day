import React, {useEffect, useState} from "react";
import axios from "axios";
//import NasaContainer from "./Components/NasaContainer";

export default  function NasaGetData () {
    const [getInfo, setInfo] = useState([]);
    const shouldUpdate = () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                setInfo(response.data);
                console.log(response);
                //const getImg = response.data;
                //setImg(getImg);
            })
            .catch(error => console.log(error));
    }
    console.log(getInfo);

    useEffect(shouldUpdate, []);

    return (
        <div>
            <div className="title">
                <h1>{getInfo.title}</h1>
                <h4>{getInfo.date}</h4>
                <img alt='img' src={getInfo.hdurl} />
                <h5>{getInfo.explanation}</h5>
                {/* {getInfo.map(item => {
                return <NasaContainer key={item} title={title} date={date} hdurl={hdurl} />;
                })} */}
            </div>
        </div>
    )
}