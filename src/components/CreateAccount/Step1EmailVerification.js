import React from 'react';
import useAuthContext from '../../context/ContextProvider';

export default function Step1EmailVerification() {
    const {currentUser} = useAuthContext;

    return(
        <>
            <h1>Email Verification Page</h1>
            <p>{currentUser.email}</p>
        </>
    );
}