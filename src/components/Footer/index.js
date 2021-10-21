import React from "react";
import {FooterContainer,
        FooterWrapper,
        FooterLogo,
        SocMedIcons,
        FbIcon,
        YtIcon,
        FooterP
        } from "./FooterElements";
import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo src={logo} alt="SCC Logo" />
                <SocMedIcons>
                    <FbIcon />
                    <YtIcon />
                </SocMedIcons>
                <div>
                    <FooterP>© 2020 St. Clare College</FooterP>
                    <FooterP>All Rights Reserved</FooterP>
                </div>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;