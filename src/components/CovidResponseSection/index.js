import React, { useEffect } from "react";
import {CsContainer,
        CsWrapper,
        CsImage,
        CsContent,
        CsHeading,
        CsParagraph
        } from "./CovidSectionElements";
import fShields from "../../images/tempCheck.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const CovidResponseSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <CsContainer>
            <CsWrapper>
                <CsImage data-aos="fade-up" src={fShields} alt="Face Shields" />
                <CsContent data-aos="fade-up-left" >
                    <CsHeading>SCC takes action to COVID-19</CsHeading>
                    <CsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</CsParagraph>
                </CsContent>
            </CsWrapper>
        </CsContainer>
    )
}

export default CovidResponseSection;