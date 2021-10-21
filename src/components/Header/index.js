import React, { useState, useEffect } from "react";
import {HeaderContainer,
        NavWrapper,
        NavLogo,
        LogoImg,
        NavMenu,
        NavItems,
        NavBtns,
        EnrollBtn,
        LoginBtn,
        MobileMenu
        } from "./HeaderElements";
import LogoImage from "../../images/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const Header = ({ toggle }) => {
    //States
    const [navShadow, setNavShadow] = useState(false);

    //Functions
    const checkAxisY = () => {
        if (window.scrollY >= 20) {
            setNavShadow(true);
        }else {
        setNavShadow(false);
        }
    }
    
    //Event
    useEffect(() => {
        window.addEventListener('scroll', checkAxisY);
    }, [])

    return (
            <HeaderContainer navShadow={navShadow} >
                    <NavWrapper>
                        <NavLogo>
                            <LogoImg src={LogoImage} alt="SCC Logo" />
                        </NavLogo>

                        <NavMenu>
                            <NavItems to='/' >Home</NavItems>
                            <NavItems>About Us</NavItems>
                            <NavItems>News</NavItems>
                            <NavItems>Management Systems<MdArrowDropDown /></NavItems>
                        </NavMenu>

                        <NavBtns>
                            <LoginBtn to='/login'>< AiOutlineUser /> Login</LoginBtn>
                            <EnrollBtn to='/enrollment' >Enroll Now</EnrollBtn>
                        </NavBtns>

                        <MobileMenu onClick={toggle} >
                            <CgMenuRight />
                        </MobileMenu>
                    </NavWrapper>
            </HeaderContainer>
    )
};

export default Header;