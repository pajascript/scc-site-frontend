import styled from "styled-components";

export const EnrollmentContainer = styled.section`
    width: 100%;
    margin-top: 70px;
    background: #fafafa;
    overflow-x: hidden;
    padding-top: 25px;
    padding-bottom: 100px;
`;

export const EnrollmentWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    overflow-x: hidden;
`;

export const EnrollmentHeading = styled.h1`
    font-weight: 600;
    font-size: 2rem;
    color: #4b0002;
    text-align: center;
`;

export const EnrollmentForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

export const ErrorMessage = styled.p`
    color: #d10833;
    text-align: center;
    margin-top: 10px;
    font-size: 1.3rem;
`;