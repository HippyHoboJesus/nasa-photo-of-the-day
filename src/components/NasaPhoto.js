import React from 'react';
import styled from 'styled-components';

const StyledNP = styled.div`
background-color: ${pr => pr.theme.secondaryColor}
color: ${pr => pr.theme.primaryColor}
`

const dummyData = {
    date: "2023-05-23",
    explanation: "Big storms are different on Jupiter. On Earth, huge hurricanes and colossal cyclones are centered on regions of low pressure, but on Jupiter, it is the high-pressure, anti-cyclone storms that are the largest. On Earth, large storms can last weeks, but on Jupiter they can last years. On Earth, large storms can be as large as a country, but on Jupiter, large storms can be as large as planet Earth. Both types of storms are known to exhibit lightning. The featured image of Jupiter's clouds was composed from images and data captured by the robotic Juno spacecraft as it swooped close to the massive planet in August 2020.  A swirling white oval is visible nearby, while numerous smaller cloud swirls extend into the distance.  On Jupiter, light-colored clouds are usually higher up than dark clouds. Despite their differences, studying storm clouds on distant Jupiter provides insights into storms and other weather patterns on familiar Earth.     Surf the Universe: Random APOD Generator",
    hdurl: "https://apod.nasa.gov/apod/image/2305/JupiterSwirls_JunoGill_960.jpg",
    title: "Jupiter's Swirls from Juno"
    }

const NasaPhoto = (props) => {
    return  (
        <StyledNP className="nasa-photo wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </StyledNP>
    )
}

export default NasaPhoto;