import React from "react";
import {HeroContainer,
        HeroWrapper,
        Content,
        TextContent,
        HeroH1,
        HeroSubheading,
        HeroBtns,
        EnrollBtn,
        ExploreBtn,
        HeroImage,
        Wave
        } from "./HeroElements";
import HeroImg from "../../images/HeroImg.jpg";
import wave from "../../images/wave.svg";
import{ BsArrowRight }  from "react-icons/bs";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <Content>
                    <TextContent>
                        <HeroH1>The Leading Edge in Online Education System</HeroH1>
                        <HeroSubheading>Quality Education that Ensures Brighter Future</HeroSubheading>
                    </TextContent>
                    <HeroBtns>
                        <EnrollBtn to='/enrollment' >Enroll Now</EnrollBtn>
                        <ExploreBtn>Explore  <BsArrowRight className="arrow" /></ExploreBtn>
                    </HeroBtns>
                </Content>
                <HeroImage src={HeroImg} alt="St. Clare College Cover" />
            </HeroWrapper>
            <Wave src={wave} />
        </HeroContainer>
    )
};

export default HeroSection;