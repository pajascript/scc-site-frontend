import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { BiMailSend } from "react-icons/bi";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Styled Components
export const Background = styled.section`
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
    width: 100%;
    padding: 10px;
    z-index: 10;
`;

const Modal = styled.div`
    background: #fafafa;
    max-width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.5);
    padding: 40px 15px;
    gap: 15px;

    @media screen and (max-width: 378px) {
        height: 420px;
    }
`;

const ModalIcon = styled(BiMailSend)`
    color: #fada5e;
    font-size: 4rem;
`;

const ModalHeading = styled.h1`
    color: #0d0d0d;
    font-size: 2.2rem;
`;

const ModalSubheading = styled.p`
    color: #444;
`;

const ModalButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    color: #fff;
    background: #770103; 
    cursor: pointer;
    text-transform: uppercase;
    transition: all 300ms ease-in-out;

    &:hover {
        background: #380001;
    }
`;

const ErrorMessage = styled.p`
    color: #d10833;
    text-align: center;
    margin-top: 10px;
`;

//Component
const VerifyModal = ({ showVerifyModal, setShowVerifyModal, setIsVerified }) => {
    
    const history = useHistory();

    const [code, setCode] = useState({code: ""});
    const [error, setError] = useState(null);

    const onValueChange = (e) => {
        setCode({code: e.target.value});
;    };

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('https://stclarecollege.herokuapp.com/enrollment/verify', code)
            .then((res) => {
                console.log(res.data);
                setError(null);
                setIsVerified(true);
                history.push('/enrollment/confirmation');
            })
            .catch(err => {
                setError(err.response.data.message);
            })
    }

    return (
        <Background>
                <Modal>
                    <ModalIcon />
                    <ModalHeading>Verify it's you</ModalHeading>
                    <ModalSubheading>For security purpose, please type the 8-digit code we sent to your email.</ModalSubheading>
                    <TextField name="code" value={code.code} onChange={onValueChange} label="8-digit code" variant="outlined" required />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <ModalButton onClick={handleClick} >Continue</ModalButton>
                </Modal>
        </Background>
    )
}

export default VerifyModal;