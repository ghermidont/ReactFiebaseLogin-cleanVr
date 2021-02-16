import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">AkiDragon</a>
            <Link to="/Login">
                <button type="button" className="btn btn-primary">Login/Signup</button>
            </Link>
        </nav>
    );
}