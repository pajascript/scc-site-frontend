import React from "react";
import {ConfirmationContainer,
        ConfirmationWrapper,
        ConfirmationHeading,
        ConfirmationSubheading,
        ConfirmationNote,
        CheckIcon,
        NotFoundH1
        } from "./ConfirmationElements";

const ConfirmationPage = ({isVerified}) => {


    return (
        <>
            {isVerified ? (
                <ConfirmationContainer>
                    <ConfirmationWrapper>
                        <ConfirmationHeading>Your registration is complete</ConfirmationHeading>
                        <CheckIcon />
                        <ConfirmationSubheading>You are now enlisted for enrollment</ConfirmationSubheading>
                        <ConfirmationNote>Note: St. Clare College is accepting payments through walk-in processes only. Please pay your enrollment fee and get your Registration form at our campus to be officially enrolled</ConfirmationNote>
                    </ConfirmationWrapper>
                </ConfirmationContainer>
            ) : (
                <NotFoundH1>404 Not Found</NotFoundH1>
            )}
        </>
    )
};

export default ConfirmationPage;
