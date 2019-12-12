import React from "react";

const NasaContainer = props => {
    //console.log(props)
  /*  if (!props.getImg){
        return <h3>Getting data...</h3>
    }else{*/
        return (
            <div className="container">
                <h1>{props.title}</h1>
                <h2>{props.date}</h2>
                <p>{props.hdurl}</p>
                <p>{props.explanation}</p>
            </div>
        )
    }

export default NasaContainer;