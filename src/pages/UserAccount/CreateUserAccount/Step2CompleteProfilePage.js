import React from 'react';
import {Link} from "react-router-dom";
import {useAuthContext} from "../../../context/AuthContext";
import {functions} from "../../../fireBase";

export default function Step2CompleteProfilePage() {
    const {currentUser, handleLogout} = useAuthContext();
    let currentUserFirstName = "";
    let currentUserLastName = "";

    const cloudFunctTrigger = () => {

            if (currentUser) {
                const addData = functions.httpsCallable('setUserData');

                addData({
                    firstName: currentUserFirstName,
                    lastName: currentUserLastName
                })
                    .then((result) => {
                            console.log(" Step2 Francesco cloud function worked. \n User profile info completed successfully!");

                        }
                    ).catch((error) => {
                    console.log(error.code + " " + error.message + "" + error.details);
                });
            }

    }
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
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
                <Link to="/Step3RadioGameQtPage">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={cloudFunctTrigger}
                    >Next</button>
                </Link>
            </div>
        </section>
    );
}