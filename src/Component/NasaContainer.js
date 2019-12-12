import React from "react";

const NasaContainer = props => {
    //console.log(props)
    if (!props.getImg){
        return <h3>Getting data...</h3>
    }else{
        return (
            <div className="container">
    <h1>{props.getImg.title}</h1>
    <h3>{props.getImg.data}</h3>
    <div className="ImgContainer">
        <img className="nasa-img" alt={props.getImg} src={props.getImg.hdurl} />
    </div>
            </div>

        )
    }
}

export default NasaContainer