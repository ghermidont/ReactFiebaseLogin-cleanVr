import React from 'react';
import {useAuthContext} from '../../context/AuthContext';
import useStorage from "../../customHooks/useStorage";
import {Link} from "react-router-dom";

//Email verification tutorial
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function EmailVerification() {
    const {verifyEmail, currentUser, uploadedFile} = useAuthContext;
    const {url} = useStorage(uploadedFile, currentUser.uid);

    console.log(url)
    console.log("EmailVerification worked!");

    return(
        <>
            <h1>We’ve just sent a link to {currentUser.email}. Confirm your email address to complete your registration.</h1>

            <button type="button" className="btn btn-link" onClick={verifyEmail}>Resend</button>
            <Link to="/UserProfilePage">
                <a className="link-primary">Go back User Profile</a>
            </Link>
            <Link to="/LoginPage">
                <a className="link-primary">Go back to login</a>
            </Link>
        </>
    );
}