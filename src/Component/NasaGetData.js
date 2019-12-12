import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaContainer from "./NasaContainer";

export default function GetData() {
    const [getImg, setImg] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response.data);
                const getImg = response.data;
                setImg(getImg);
            })
            .cath(error => {
                console.log(error);
            });
    }, []);
    
    return (
        <div>
            <img className="image" src={getImg}></img>
    <div className="info">{getImg.explanation}</div> 
        </div>
    )
}