import React, {useEffect} from 'react';
import {useAuthContext} from '../../../context/AuthContext';
import useStorage from "../../../customHooks/useStorage";
import {Link} from "react-router-dom";
import {functions} from '../../../fireBase';

//use here the cloud Francesco function and pass the arguments here.

//Email verification tutorial
//https://www.youtube.com/watch?v=Vj96piq6WGk

export default function EmailVerification() {
    console.log("EmailVerification worked!");

    const {verifyEmail, currentUser, signUpFormUserUploadedFile} = useAuthContext;
    const {userUploadedPictureUrl} = useStorage(signUpFormUserUploadedFile, currentUser.uid);

    //Call Francesco cloud function
    useEffect(()=>{
        if(currentUser){
            const addMessage = functions.httpsCallable('onUserCreate');

            addMessage({
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: userUploadedPictureUrl||'',
            })
                .then((result) => {
                    console.log(" Step1 Francesco cloud function worked. \n User profile added successfully!");

                }
            ).catch((error) => {
                console.log(error.code + " " + error.message + "" + error.details);
            });
        }
    },[currentUser, userUploadedPictureUrl]);

    console.log("The value of userUploadedPictureUrl worked!");
    console.log(userUploadedPictureUrl);

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