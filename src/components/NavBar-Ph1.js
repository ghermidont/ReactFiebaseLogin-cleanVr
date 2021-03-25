import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../context/ContextProvider';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const {currentUser} = useAuthContext();
    const {t, i18n} = useTranslation();
    console.log("NavBar() worked!");

    const changeLanguage = (lng) => {
         i18n.changeLanguage(lng);
    };

    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">AkiDragon</a>
            <Link to="/LoginSignUpForm">
                {!currentUser && <button type="button" className="btn btn-primary">Login/Signup</button>}
            </Link>

            <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">icon</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/LoginSignUpForm">
                                    <a className="nav-link">{t("NavBar.Links.Link1")}</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/LoginSignUpForm">
                                <a className="nav-link">{t("NavBar.Links.Link2")}</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/LoginSignUpForm">
                                    <a className="nav-link">{t("NavBar.Links.Link3")}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={() => changeLanguage("en")}>en</button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => changeLanguage("it")}>de</button>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">{t("NavBar.SearchButton")}Button</button>
                        </form>
                    </div>
                </div>
        </nav>
    );
}