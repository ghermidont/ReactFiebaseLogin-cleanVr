import React from 'react';
import { Link } from 'react-router-dom';
import {useContextProvider} from '../context/ContextProvider';

export default function NavBar() {
    const {currentUser} = useContextProvider();
    console.log("NavBar worked!");
    console.log(currentUser);

    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">AkiDragon</a>
            <Link to="/LoginSignUpForm">
                {!currentUser && <button type="button" className="btn btn-primary">Login/Signup</button>}
            </Link>
        </nav>
    );
}