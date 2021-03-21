import React from 'react';
import {Link} from "react-router-dom";
import {useContextProvider} from "../../context/ContextProvider";

export default function Step2CompleteProfilePh2() {
    const {currentUser, handleLogout, auth} = useContextProvider();
    let currentUserFirstName = "";
    let currentUserLastName = "";

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
                <Link to="/Step3RadioGameQtPh2">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={
                            ()=>{
                                let name = (currentUserFirstName + " " + currentUserLastName);
                                currentUser.updateProfile({displayName: name});
                                console.log(name);}
                        }
                    >Next</button>
                </Link>
            </div>
        </section>
    );
}