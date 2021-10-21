import React from "react";
import {LoginContainer,
        LoginWrapper,
        Logo,
        LoginForm,
        LoginHeading
        } from "./LoginElements";
import logo from "../../images/logo.png";

const LoginPage = () => {

    return (
        <LoginContainer>
            <LoginWrapper>
                <Logo src={logo} alt="Logo" />
                <LoginForm>
                    <LoginHeading>Log in to SCC Portal</LoginHeading>
                </LoginForm>
            </LoginWrapper>
        </LoginContainer>
    )
};

export default LoginPage;