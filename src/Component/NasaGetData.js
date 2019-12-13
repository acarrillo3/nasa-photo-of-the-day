import React, {useEffect, useState} from "react";
import axios from "axios";
//import NasaContainer from "./Components/NasaContainer";
import styled from "styled-components";

const StyledHeading = styled.h1`
    color: blue;
`;

const SitesBack = styled.div`
    background: #f8f9fa;
    width: 80%;
    margin: auto;
    border: 3px solid green;
    padding: 10px;
`;

const ReImg = styled.img`
    width: 50%;
    border: 1px dotted white;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    padding: 10px;
`;

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
        <SitesBack>
                <StyledHeading>
                    {getInfo.title}
                </StyledHeading>
                
                <h4>{getInfo.date}</h4>
                <ReImg alt='img' src={getInfo.hdurl} />
                <Paragraph>
                {getInfo.explanation}
                </Paragraph>
                {/* {getInfo.map(item => {
                return <NasaContainer key={item} title={title} date={date} hdurl={hdurl} />;
                })} */}
        </SitesBack>

    )
}