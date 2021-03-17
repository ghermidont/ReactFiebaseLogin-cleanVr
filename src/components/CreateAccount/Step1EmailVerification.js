import React from 'react';
import {useContextProvider} from '../../context/ContextProvider';
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function Step1EmailVerification() {
    const {verifyEmail, email, auth } = useContextProvider;
    window.alert(email);
    return(
        <>
            <h1>We’ve just sent a link to {auth.currentUser.emailVerified}. Confirm your email address to complete your registration.</h1>
            <button type="button" className="btn btn-link" onClick={verifyEmail}>Resend</button>
            <a href="/LoginSignUpForm" className="link-primary">Go back to login</a>
        </>
    );
}