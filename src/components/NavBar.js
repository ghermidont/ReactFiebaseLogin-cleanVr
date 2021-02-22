import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../context/AuthProvider';

export default function NavBar() {
    const {currentUser} = useAuthContext();
    console.log(currentUser);

    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">AkiDragon</a>
            <Link to="/Login">
                {!currentUser && <button type="button" className="btn btn-primary">Login/Signup</button>}
            </Link>
        </nav>
    );
}