import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    height: 45rem;
    position: relative;

    @media screen and (max-width: 1000px) {
        height: auto;
    }
`;

export const HeroWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    position: relative;
    padding: 0 10px;
    margin-inline: auto;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: center;
    }
`;

export const Content = styled.div`
    max-width: 600px;
    margin-left: 10px;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    @media screen and (max-width: 1000px) {
        text-align: center;
        align-items: center;
    }

    @media screen and (max-width: 750px) {
        padding-top: 50px;
    }

    @media screen and (max-width: 340px) {
        gap: 20px;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeroH1 = styled.h1`
    color: #4b0002;
    font-size: clamp(2rem, 5vw, 3.5rem);
    text-transform: uppercase;
    font-weight: 900;
`;

export const HeroSubheading = styled.h3`
    color: #484848;
    font-size: clamp(1rem, 3vw, 1.8rem);
    font-weight: 600;
    margin-top: 10px;
    max-width: 500px;
`;

export const HeroBtns = styled.div`
    display: flex;
    gap: 10px;
    font-size: 1.4rem;
    font-weight: 600;

    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 340px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const EnrollBtn = styled(Link)`
    color: #fff;
    padding: 0.8rem 1.8rem;
    cursor: pointer;
    border-radius: 5px;
    background: #770103;
    transition: all 300ms ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #380001;
    }

    @media screen and (max-width: 600px) {
        padding: 0.5rem 1.5rem;
    }
`;

export const ExploreBtn = styled(Link)`
    color: #770103;
    padding: 0.8rem 1.8rem;
    cursor: pointer;
    border-radius: 5px;
    background: #efefef;
    transition: all 300ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #eedcdc;
    }

    @media screen and (max-width: 600px) {
        padding: 0.5rem 1.5rem;
    }
`;

export const HeroImage = styled.img`
    width: 50%;
    height: auto;
    border-radius: 20%;
    position: absolute;
    bottom: 0;
    right: 20px;
    min-width: 250px;
    z-index: 1;

    @media screen and (max-width: 1100px) {
        bottom: 5%;
    }

    @media screen and (max-width: 1000px) {
        position: static;
    }

    @media screen and (max-width: 700px) {
        width: 70%;
    }

    @media screen and (max-width: 340px) {
        margin-top: -10px;
    }
`;

export const Wave = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;
    right: 0;
    left: 0;
`;