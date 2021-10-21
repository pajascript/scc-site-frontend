import React from "react";
import HeroSection from "../../components/HeroSection";
import CovidResponseSection from "../../components/CovidResponseSection";
import Courses from "../../components/CoursesSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <CovidResponseSection />
            <Courses />
        </>
    )
};

export default Home;