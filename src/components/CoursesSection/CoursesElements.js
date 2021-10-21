import styled from "styled-components";

export const CoursesContainer = styled.section`
    width: 100%;
    min-height: 45rem;
    padding-bottom: 70px;
`;

export const CoursesWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 25px;
`;

export const CoursesHeading = styled.h1`
    font-size: 2.5rem;
    color: #4b0002;
    margin-top: 70px;
    font-weight: 900;
    text-align: center;

    @media screen and (max-width: 654px) {
        font-size: 1.9rem;
        line-height: 2rem;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-gap: 45px;
    justify-content: center;
    margin-top: 35px;

    @media screen and (max-width: 979px) {
        grid-template-columns: 280px 280px;
    }

    @media screen and (max-width: 654px) {
        grid-template-columns: 100%;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;

    @media screen and (max-width: 654px) {
        width: 100%;
    }
`;

export const CardImg = styled.img`
    width: 100%;
    height: 180px;

    @media screen and (max-width: 654px) {
        height: 50vw;
    }
`;

export const CardTopLine = styled.p`
    text-transform: uppercase;
    color: #4b0002;
    font-size: 1rem;
    margin-top: 25px;
`;

export const CardDescription = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: #4b0002;
    line-height: 1.4rem;
    margin-top: 8px;
`;