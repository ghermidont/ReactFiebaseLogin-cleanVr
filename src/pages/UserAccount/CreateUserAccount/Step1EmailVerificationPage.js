import React, {useEffect} from 'react';
import {useAuthContext} from '../../../context/AuthContext';
import useStorage from "../../../customHooks/useStorage";
import {Link} from "react-router-dom";

//Email verification tutorial
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function EmailVerification() {
    console.log("Step1EmailVerification worked!");

    const {sendVerifyEmail, currentUser, signUpFormUserUploadedFile, setUserUploadedPictureUrl} = useAuthContext;

    const {userUploadedPictureUrl} = useStorage(signUpFormUserUploadedFile, currentUser.uid, "profile_pictures");
    setUserUploadedPictureUrl(userUploadedPictureUrl);
    console.log(currentUser.emailVerified);
    useEffect(() => {sendVerifyEmail()},[]);

    return(
        <>
            <h1>We’ve just sent a link to {currentUser.email}. Confirm your email address to continue your registration.</h1>
            <button type="button" className="btn btn-link" onClick={()=>sendVerifyEmail()}>Resend</button>
            <Link to="/UserProfilePage">
                <a className="link-primary">Go back User Profile</a>
            </Link>
            <Link to="/LoginPage">
                <a className="link-primary">Go back to login</a>
            </Link>
        </>
    );
}