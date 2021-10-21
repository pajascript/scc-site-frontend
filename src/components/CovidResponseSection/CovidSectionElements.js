import styled from "styled-components";

export const CsContainer = styled.section`
    width: 100%;
    height: auto;
    background: #e7cece;
    padding: 90px 0;

    
    @media screen and (max-width: 670px) {
        padding: 180px 0 90px 0;
    }
`;

export const CsWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    @media screen and (max-width: 670px) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 400px) {
        padding: 15px;
    }
`;

export const CsImage = styled.img`
    width: 600px;
    height: 500px;
    margin-left: 40px;

    @media screen and (max-width: 980px) {
        width: 500px;
        height: 400px;
        margin-left: 0;
    }

    @media screen and (max-width: 802px) {
        width: 400px;
        height: 300px;
    }

    @media screen and (max-width: 670px) {
        width: 100%;
        height: 50vw;
    }
`;

export const CsContent = styled.div`
    max-width: 600px;
    height: auto;
    padding: 2rem;
    background: #e3c3c3;
    margin-left: -80px;
    z-index: 1;
    opacity: 0.9;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 670px) {
        margin-left: 0;
    }

    @media screen and (max-width: 400px) {
        padding: 2rem 1rem;
    }
`;

export const CsHeading = styled.h1`
    font-size: 1.8rem;
    color: #4b0002;
    font-weight: 600;

    @media screen and (max-width: 400px) {
        font-size: 1.6rem;
    }
`;

export const CsParagraph = styled.p`
    font-size: 1.2rem;
    color: #000;
    margin-top: 10px;

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }
`;
