import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background: #fafafa;
    z-index: 999;
    position: fixed;
    top: 0;
    transition: all 300ms ease-in-out;
    box-shadow: ${({navShadow}) => (navShadow ? "0 0 4px #6b6b6b" : "0 0 2px #6b6b6b" )};
`;

export const NavWrapper = styled.nav`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const NavLogo = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const NavMenu = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 840px) {
        display: none;
    }
`;

export const NavItems = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 300;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 300ms ease;

    &:hover {
        background: #eedcdc;
    }
`;

export const NavBtns = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 840px) {
        display: none;
    }
`;

export const EnrollBtn = styled(Link)`
    padding: 0.7rem 1.2rem;
    background: #770103;
    color: #fff;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 300;
    transition: all 300ms ease;

    &:hover {
        background: #380001;
    }
`;

export const LoginBtn = styled(Link)`
    padding: 0.7rem 1.2rem;
    background: inherit;
    color: #770103;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 400;
    transition: all 300ms ease;

    &:hover {
        background: #eedcdc;
    }
`;

export const MobileMenu = styled.div`
    cursor: pointer;
    color: #000;
    font-size: 2.4rem;
    display: none;

    @media screen and (max-width: 840px) {
        display: flex;
    }
`;