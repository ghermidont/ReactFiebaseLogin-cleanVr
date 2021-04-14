import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../../context/AuthContext';

const UserProfilePage = () =>{
    const {currentUser, handleLogout} = useAuthContext();
    let currentUserDisplayName = "";
    let currentUserEmail = "";
    let currentUserPassword = "";

    console.log("UserProfilePage worked.");
    console.log("The current user:" + currentUser);
    return(
        <section className="hero">
            <nav>
                <h2>Update profile:</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
                <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="updateProfileContainer">
                            <label>Display name</label>
                            <input type="text" autoFocus onChange={(e)=>currentUserDisplayName = e.target.value}/>

                            {/*<label>Email address</label>
                            <input type="text" onChange={(e)=>currentUserEmail = e.target.value}/>

                            <label>Password</label>
                            <input type="text" onChange={(e)=>currentUserPassword = e.target.value}/>*/}
                        </div>
                    </div>
                </div>
                <Link to="/UserProfilePage">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={
                            ()=>{
                                if(currentUserDisplayName !== "") {
                                    currentUser.updateProfile({displayName: currentUserDisplayName})
                                        .then(function() {
                                        // Update successful.
                                        }).catch(function(error) {
                                            // An error happened.
                                        });
                                }
                                // if(currentUserEmail !== "") {
                                //     currentUser.updateEmail(currentUserEmail)
                                //         .then(function() {
                                //             // Update successful.
                                //         }).catch(function(error) {
                                //         // An error happened.
                                //     });
                                // }
                                // if(currentUserPassword !== "") {
                                //     currentUser.updatePassword(currentUserPassword)
                                //         .then(function() {
                                //             // Update successful.
                                //         }).catch(function(error) {
                                //         // An error happened.
                                //     });
                                // }
                            }
                        }
                    >Save changes</button>
                </Link>

                </div>
        </section>
    );
};

export default UserProfilePagePh2;