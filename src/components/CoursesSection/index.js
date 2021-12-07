import React, { useEffect } from "react";
import {CoursesContainer,
        CoursesWrapper,
        CoursesHeading,
        CardContainer,
        Card,
        CardImg,
        CardTopLine,
        CardDescription
        } from "./CoursesElements";
import { CoursesData } from "./CoursesData";
import Aos from "aos";
import "aos/dist/aos.css";

const Courses = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <CoursesContainer>
            <CoursesWrapper>
                <CoursesHeading>Programs and Courses</CoursesHeading>
                <CardContainer>
                    {
                        CoursesData.map((card) => {
                            return(
                                <Card key={card.id} data-aos="fade-left" >
                                    <CardImg src={ card.img } alt={ card.alt } />
                                    <CardTopLine>{ card.topLine }</CardTopLine>
                                    <CardDescription>{ card.description }</CardDescription>
                                </Card>
                            )}
                        )
                    }
                </CardContainer>
            </CoursesWrapper>
        </CoursesContainer>
    )
};

export default Courses;