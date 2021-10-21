import styled from "styled-components";

export const LoginContainer = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`;

export const LoginForm = styled.form`
    width: 100%;
    height: 60px;
    max-width: 400px;
    border-radius: 5px;
    padding: 30px 10px;
    margin: 0 auto;
    margin-top: 50px;
    box-shadow: 0px 5px 10px 2px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginHeading = styled.h1`
    font-size: 1.6rem;
    color: #2f2f2f;
`;