import React from 'react';
import {useAuthContext} from '../../context/ContextProvider';
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function Step1EmailVerificationPh2() {
    const {verifyEmail, email, currentUser } = useAuthContext;
    window.alert(email);
    return(
        <>
            <h1>We’ve just sent a link to {currentUser.emailVerified}. Confirm your email address to complete your registration.</h1>
            <button type="button" className="btn btn-link" onClick={verifyEmail}>Resend</button>
            <a href="/LoginSignUpForm" className="link-primary">Go back to login</a>
        </>
    );
}