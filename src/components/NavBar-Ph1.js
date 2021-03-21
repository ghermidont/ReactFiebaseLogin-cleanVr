import React from 'react';
import { Link } from 'react-router-dom';
import {useContextProvider} from '../context/ContextProvider';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const {currentUser} = useContextProvider();
    const { i18n } = useTranslation();
    console.log("NavBarPh1 worked!");
    console.log(currentUser);

    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">AkiDragon</a>
            <Link to="/LoginSignUpFormPh2">
                {!currentUser && <button type="button" className="btn btn-primary">Login/Signup</button>}
            </Link>

            <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={console.log("English")}>Eng</button>
                            <button type="button" className="btn btn-outline-primary" onClick={console.log("Italian")}>It</button>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
        </nav>
    );
}