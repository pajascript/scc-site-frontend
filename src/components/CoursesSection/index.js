import React from "react";
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

const Courses = () => {
    return (
        <CoursesContainer>
            <CoursesWrapper>
                <CoursesHeading>Programs and Courses</CoursesHeading>
                <CardContainer>
                    {
                        CoursesData.map((card) => {
                            return(
                                <Card key={card.id} >
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