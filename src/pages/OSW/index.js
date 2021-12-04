import React from "react";
import {OSWContainer,
        OSWLogo,
        OSWTagline,
        OSWButton,
        ArrowRight,
        OSWHeading,
        OSWSubheading,
        OSWP,
        OSWContact,
        OSWArticleImg,
        Article,
        OSWContent,
        OSWContentWrapper
        } from "./OSWElements";
import worldpalm from "../../images/worldpalm.jpg";
import logoImg from "../../images/osw.png";

const OSW = () => {
    return (
        <>
        <OSWContainer>
            <OSWLogo src={logoImg} alt="OSW Logo" />
            <OSWTagline>One united humanity. <br/>One shared ecosystem. <br/>Stronger together.</OSWTagline>
            <OSWButton>Find out more! <ArrowRight/></OSWButton>
        </OSWContainer>
        <OSWContent>
            <OSWContentWrapper>
                <OSWHeading>SCC-OSW Philippine Chapter (St. Clare College – OneShared.World Philippine Chapter)</OSWHeading>
                <OSWSubheading>Leader</OSWSubheading>
                <OSWP>Dean Henry Tenedero</OSWP>
                <OSWContact>tenederohenry@gmail.com</OSWContact>
                <OSWArticleImg src={worldpalm} alt="No description" />
                <Article>Anchored on St Clare College’s Vision and Mission and One Shared World’s Principles and Core Values, the SCC-OSW Philippine Chapter was established on December 10, 2020, symbolically coinciding with the United Nations’ Human Rights Day celebration. The Chapter has two-fold aims, namely: To embrace and integrate in tangible terms OSW’s Social Advocacies into the school’s Curriculum and Professional Development Programs, and to bring this OSW Advocacy to other schools and multi sectoral organizations, both public and private, throughout the Philippines and other ASEAN partner networks for greater inclusivity and sustainability</Article>
            </OSWContentWrapper>
        </OSWContent>
        </>
    )
}

export default OSW;