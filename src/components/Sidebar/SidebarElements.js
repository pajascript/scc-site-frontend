import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
    width: 300px;
    position: fixed;
    top: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    bottom: 0;
    background: #fcfcfc;
    z-index: 1000;
    display: none;
    flex-direction: column;
    box-shadow: 0 0 4px;
    padding: 10px 0;
    transition: all 400ms ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};

    @media screen and (max-width: 840px) {
        display: flex;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        min-height: 100vh;
    }
`;

export const CloseBtn = styled.div`
    color: #000;
    font-size: 2.4rem;
    cursor: pointer;
    align-self: flex-end;
`;

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SidebarItems = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    transition: all 300ms ease;
    width: 100%;
    padding: 0.7rem 0.5rem;
    border-radius: 5px;
    text-align: center;

    &:hover {
        background: #eedcdc;
    }
`;

export const SidebarBtns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
    margin-inline: auto;
    width: 260px;
`;

export const ContactBtn = styled(Link)`
    padding: 0.7rem 1.2rem;
    background: inherit;
    color: #770103;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 400;
    transition: all 300ms ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #eedcdc;
    }
`;

export const EnrollBtn = styled(Link)`
    padding: 0.7rem 1.2rem;
    background: #770103;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 400;
    transition: all 300ms ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #380001;
    }
`;