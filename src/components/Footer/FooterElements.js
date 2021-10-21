import styled from "styled-components";
import { ImYoutube } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

export const FooterContainer = styled.div`
    width: 100%;
    height: 250px;
    background: #4b0002;
`;

export const FooterWrapper = styled.div`
     width: 100%;
     height: 100%;
     max-width: 1200px;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 15px;
`;

export const FooterLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
`;

export const SocMedIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const FbIcon = styled(FaFacebook)`
    cursor: pointer;
    font-size: 2rem;
    color: white;
`;

export const YtIcon = styled(ImYoutube)`
    cursor: pointer;
    font-size: 2rem;
    color: white;
`;

export const FooterP = styled.p`
    color: #fafafa;
    text-align: center;
`;