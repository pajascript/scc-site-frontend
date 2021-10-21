import styled from "styled-components";

export const CsContainer = styled.section`
    width: 100%;
    height: auto;
    background: #e7cece;
    padding: 90px 0;
`;

export const CsWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`;

export const CsImage = styled.img`
    width: 600px;
    height: 500px;
    margin-left: 40px;
`;

export const CsContent = styled.div`
    width: 600px;
    height: auto;
    padding: 2rem;
    background: #e3c3c3;
    margin-left: -80px;
    z-index: 1;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
`;

export const CsHeading = styled.h1`
    font-size: 1.8rem;
    color: #4b0002;
    font-weight: 600;
`;

export const CsParagraph = styled.p`
    font-size: 1.2rem;
    color: #000;
    margin-top: 10px;
`;
