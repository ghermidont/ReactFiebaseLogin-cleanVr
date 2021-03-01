import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../context/AuthProvider';

const UserProfilePage = () =>{
    const {currentUser, handleLogout, auth} = useAuthContext();
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
                                    (e)=>currentUserFirstName=e.target.value}
                            />

                            <label>Last name</label>
                            <input
                                type="text"
                                required
                                onChange={
                                     (e)=>currentUserLastName = e.target.value}
                            />
                        </div>
                    </div>
                </div>
                <Link to="/UserProfilePage">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={
                            ()=>{
                                let name = (currentUserFirstName + " " + currentUserLastName);
                                auth.currentUser.updateProfile({displayName: name});
                                console.log(name);
                            }
                        }
                    >Save changes</button>
                </Link>

                </div>
        </section>
    );
};

export default UserProfilePage;
/*var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
    // Update successful.
}).catch(function(error) {
    // An error happened.
});*/

