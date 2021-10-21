
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

export const ConfirmationContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    height: auto;
`;

export const ConfirmationWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px;
    text-align: center;
    margin: 0 auto;
    gap: 15px;
`;

export const ConfirmationHeading = styled.h1`
    color: #1f1f1f;
    font-size: 3rem;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 2rem;
    }
`;

export const CheckIcon = styled(ImCheckmark)`
    color: #4cff4c;
    font-size: 4rem;
`;

export const ConfirmationSubheading = styled.p`
    color: #484848;
    font-size: 1.5rem;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 1.2rem;
    }
`;

export const ConfirmationNote = styled.p`
    color: #d10833;
    font-size: 1rem;
    margin: 0 auto;
    text-align: center;
    line-height: 1.2rem;
`;

export const NotFoundH1 = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-top: 80px;
`;