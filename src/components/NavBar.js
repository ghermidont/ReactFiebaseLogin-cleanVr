import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/">AkiDragon</a>
            <Link to="/LoginPage">
                <button type="button" class="btn btn-primary">Login/Signup</button>
            </Link>
        </nav>
    );
}