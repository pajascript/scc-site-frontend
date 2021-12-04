
import styled from "styled-components";
import { FiArrowRightCircle } from "react-icons/fi";
import Earth from "../../images/Earth.jpg";

export const OSWContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    margin-top: 70px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-image: url(${Earth});
    background-color: #666;
    background-blend-mode: multiply;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (max-height: 550px) {
        padding: 100px 25px;
    }
`;

export const OSWLogo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

export const OSWTagline = styled.p`
    color: #f2f2f2;
    font-size: 2.5rem;
    font-style: italic;
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.3rem;
    line-height: 2.6rem;

    @media screen and (max-width: 615px) {
        font-size: 2rem;
        line-height: 2.1rem;
        letter-spacing: 0.2rem;
    }

    @media screen and (max-width: 465px) {
        font-size: 1.5rem;
        line-height: 1.6rem;
        letter-spacing: 0.1rem;
    }
`;

export const OSWButton = styled.a`
    font-size: 1.5rem;
    font-weight: 400;
    color: #022234;
    background: hsla(32, 84%, 62%, 1);
    background: linear-gradient(45deg, hsla(32, 84%, 62%, 1) 0%, hsla(201,62%, 59%, 1) 100%);
    background: -webkit-linear-gradient(45deg, hsla(32, 84%, 62%, 1) 0%, hsla(201,62%, 59%, 1) 100%);
    background: -moz-linear-gradient(45deg, hsla(32, 84%, 62%, 1) 0%, hsla(201,62%, 59%, 1) 100%);
    border-radius: 5px;
    padding: 0.5rem 1.2rem;
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: -10px;
    cursor: pointer;
    z-index: 1;
    transition: all 300ms ease;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;

    &:hover {
        background: linear-gradient(45deg, hsla(201,62%, 59%, 1) 0%, hsla(32, 84%, 62%, 1) 100%);
        background: -webkit-linear-gradient(45deg, hsla(201,62%, 59%, 1) 0%, hsla(32, 84%, 62%, 1) 100%);
        background: -moz-linear-gradient(45deg, hsla(201,62%, 59%, 1) 0%, hsla(32, 84%, 62%, 1) 100%);
        transform: scale(1.08);
    }
`;

export const OSWHeading = styled.h1`
    font-size: 2.6rem;
    color: #0d0d0d;
    margin-top: 60px;
`;

export const OSWSubheading = styled.p`
    font-size: 1.2rem;
    color: #0d0d0d;
    font-weight: 600;
    line-height: 2rem;
    margin-top: 1rem;
`;

export const OSWP = styled.p`
    font-size: 1.2rem;
    color: #0d0d0d;
    line-height: 2rem;
`;

export const OSWContact = styled.p`
    font-size: 1.2rem;
    color: blue;
    line-height: 2rem;
`;

export const OSWArticleImg = styled.img`
    height: auto;
    width: 100%;
    margin-top: 2rem;
`;

export const Article = styled.p`
    color: #111;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 2rem;
    max-width: 1000px;
    margin-inline: auto;
`;

export const ArrowRight = styled(FiArrowRightCircle)`
    font-size: 1.6rem;
    color: #022234;
    font-weight: 600;

    @media screen and (max-width: 835px) {
        font-size: 1.1rem;
    }
`;

export const OSWContent = styled.div`
    width: 100%;
    background: #fafafa;
`;

export const OSWContentWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    padding-bottom: 50px;
`;
