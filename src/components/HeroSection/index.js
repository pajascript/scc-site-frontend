import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <HeroContainer>
            <HeroWrapper>
                <Content data-aos="fade-right" data-aos-once="true" >
                    <TextContent >
                        <HeroH1>The Leading Edge in Online Education System</HeroH1>
                        <HeroSubheading>Quality Education that Ensures Brighter Future</HeroSubheading>
                    </TextContent>
                    <HeroBtns>
                        <EnrollBtn to='/enrollment' >Enroll Now</EnrollBtn>
                        <ExploreBtn>Explore  <BsArrowRight className="arrow" /></ExploreBtn>
                    </HeroBtns>
                </Content>
                <HeroImage src={HeroImg} alt="St. Clare College Cover" data-aos="fade-down" data-aos-offset="-120" data-aos-once="true" />
            </HeroWrapper>
            <Wave src={wave} />
        </HeroContainer>
    )
};

export default HeroSection;