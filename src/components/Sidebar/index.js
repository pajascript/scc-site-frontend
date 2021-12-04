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
                <SidebarItems to='/' activeStyle={{background: '#ddd'}} exact >Home</SidebarItems>
                <SidebarItems to='/' >News</SidebarItems>
                <SidebarItems to='/onesharedworld' activeStyle={{background: '#ddd'}} >One Shared World</SidebarItems>
            </SidebarMenu>

            <SidebarBtns onClick={toggle} >
                <ContactBtn to='/login' >< AiOutlineUser />Login</ContactBtn>
                <EnrollBtn to='/enrollment' >Enroll Now</EnrollBtn>
            </SidebarBtns>
        </SidebarContainer>
    )
}

export default Sidebar;