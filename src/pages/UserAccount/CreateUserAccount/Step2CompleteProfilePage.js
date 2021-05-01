import React from 'react';
import {useAuthContext} from "../../../context/AuthContext";
import {functions} from "../../../fireBase";
import {useHistory} from 'react-router-dom';

export default function Step2CompleteProfilePage() {
    console.log("Step2CompleteProfilePage");
    const history = useHistory;
    const {currentUser} = useAuthContext();
    let currentUserFirstName = "";
    let currentUserLastName = "";
    const {userUploadedPictureUrl} = useAuthContext;

    const cloudFunctTrigger = () => {
            if (currentUser) {
                const addData = functions.httpsCallable('setUserData');
                addData({
                    displayName: currentUser.displayName,
                    photoURL: userUploadedPictureUrl,
                    firstName: currentUserFirstName,
                    lastName: currentUserLastName
                })
                    .then((result) => {
                            console.log(" Step2 cloud function worked. \n User profile info completed successfully!");
                            history.push("/MessageSentPage", {from: "/ContactUsForm"});
                        }
                    ).catch((error) => {
                    console.log(error.code + " " + error.message + "" + error.details);
                });
            }

    }

    return(
        <section className="hero">
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="loginContainer">
                            <label>First name</label>
                            <input
                                type="text"
                                autoFocus
                                required
                                onChange={
                                    (e) => currentUserFirstName = e.target.value}
                            />

                            <label>Last name</label>
                            <input
                                type="text"
                                required
                                onChange={
                                    (e) => currentUserLastName = e.target.value}
                            />
                        </div>
                    </div>
                </div>

                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={cloudFunctTrigger}
                    >Next</button>

            </div>
        </section>
    );
}