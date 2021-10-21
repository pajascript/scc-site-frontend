import React from "react";
import {SidebarContainer,
        SidebarMenu,
        SidebarItems,
        CloseBtn,
        SidebarBtns,
        ContactBtn,
        EnrollBtn
        } from "./SidebarElements";
import { AiOutlineUser } from "react-icons/ai";
import { MdClose, MdArrowDropDown } from "react-icons/md";

const Sidebar = ({ toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <CloseBtn onClick={toggle} >
                <MdClose />
            </CloseBtn>

            <SidebarMenu onClick={toggle} >
                <SidebarItems to='/' >Home</SidebarItems>
                <SidebarItems>About Us</SidebarItems>
                <SidebarItems>News</SidebarItems>
                <SidebarItems>Management Systems <MdArrowDropDown /></SidebarItems>
            </SidebarMenu>

            <SidebarBtns onClick={toggle} >
                <ContactBtn to='/login' >< AiOutlineUser />Login</ContactBtn>
                <EnrollBtn to='/enrollment' >Enroll Now</EnrollBtn>
            </SidebarBtns>
        </SidebarContainer>
    )
}

export default Sidebar;