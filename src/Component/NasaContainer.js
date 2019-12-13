import React from "react";

const NasaContainer = props => {
    //console.log(props)
  /*  if (!props.getImg){
        return <h3>Getting data...</h3>
    }else{*/
        return (
            <div className="container">
                <h1>{props.data.title}</h1>
                <h2>{props.data.date}</h2>
                <p>{props.data.hdurl}</p>
                <p>{props.data.explanation}</p>
            </div>
        )
    }

export default NasaContainer;