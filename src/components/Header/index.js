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
                        <NavLogo to='/' >
                            <LogoImg src={LogoImage} alt="SCC Logo" />
                        </NavLogo>

                        <NavMenu>
                            <NavItems to='/' activeStyle={{background: '#ddd'}} exact >Home</NavItems>
                            <NavItems to='/news' >News</NavItems>
                            <NavItems to='/onesharedworld' activeStyle={{background: '#ddd'}} >One Shared World</NavItems>
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