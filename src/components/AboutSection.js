import React from "react";
import home1 from '../img/home1.png';
// Styled
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "../styles";

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography idea that you have. We have professionals that can make it happen</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with a camera" />
            </StyledImage>
        </StyledAbout>
    )
}

// Styled Componenets


export default AboutSection