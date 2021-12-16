import styled from "styled-components";
import microphone from "../../images/microphoneBG.jpg";

export const NewsHeroContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    background: url(${microphone});
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
`;

export const NewsHeroWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
`;

export const NewsHeroContent = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: 400px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;