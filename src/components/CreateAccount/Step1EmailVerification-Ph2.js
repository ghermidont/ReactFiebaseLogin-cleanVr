import React from 'react';
import {useAuthContext} from '../../context/ContextProvider';
import useStorage from "../../customHooks/useStorage";
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function EmailVerification() {
    const {verifyEmail, email, currentUser, uploadedFile} = useAuthContext;
    const {url} = useStorage(uploadedFile, currentUser.uid);

    console.log(url)
    console.log("EmailVerification worked!");

    return(
        <>
            <h1>We’ve just sent a link to {currentUser.email}. Confirm your email address to complete your registration.</h1>
            <button type="button" className="btn btn-link" onClick={verifyEmail}>Resend</button>
            <a href="/LoginSignUpForm" className="link-primary">Go back to login</a>
        </>
    );
}