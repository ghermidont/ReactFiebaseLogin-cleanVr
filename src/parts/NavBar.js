import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import {useAuthContext} from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import SearchFomr from "../components/SearchForm";

export default function NavBar() {
    //const {currentUser} = useAuthContext();
    const {t, i18n} = useTranslation();
    console.log("NavBar() worked!");
    const [showSearch, setShowSearch] = useState(false);

    const changeLanguage = (lng) => {
         i18n.changeLanguage(lng);
    };

    //const searchForm = document.querySelector('.search__form');

    return(
        <header className="header">
            <div className="header__inner">
                <div className="header-burger">
                    <span></span>
                </div>
                <Link to="/">
                    <img className="header__img" src="" alt=""/>
                        Akidragon
                </Link>

                <nav className="menu header__menu">
                    <div className="menu-close">
                        <span></span>
                    </div>
                    <ul className="menu__list">
                        <li className="menu__item">
                             <a className="menu__link">Il nostro universo</a>

                            <span className="arrow menu__arrow"></span>
                            <ul className="sub-menu__list">
                                <li className="sub-menu__item">
                                    <Link to="/TournamentsPage">
                                        <a className="sub-menu__link">Blog</a>
                                    </Link>
                                </li>
                                {/*Phase 2*/}
                                {/*<li className="sub-menu__item">*/}
                                {/*    <Link to="/ContactUsPage">*/}
                                {/*        <a className="sub-menu__link">Team e giochi</a>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li className="sub-menu__item">*/}
                                {/*    <Link to="/ContactUsPage">*/}
                                {/*        <a className="sub-menu__link">Sale Gaming</a>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </li>

                        <li className="menu__item">
                            <a className="menu__link">Community</a>
                            <span className="arrow menu__arrow"></span>
                            <ul className="sub-menu__list">
                                <li className="sub-menu__item">
                                    <Link to="/NewsPage">
                                        <a className="sub-menu__link">News</a>
                                    </Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to="/ContentPage">
                                        <a className="sub-menu__link">Contenuti</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <a className="menu__link">Il Brand</a>
                            <span className="arrow menu__arrow"></span>
                            <ul className="sub-menu__list">
                                <li className="sub-menu__item">
                                    <Link to="/AboutUsPage">
                                        <a className="sub-menu__link">About Us</a>
                                    </Link>
                                </li>
                                {/*<li className="sub-menu__item">*/}
                                {/*    <Link to="/SponsorshipPage">*/}
                                {/*        <a className="sub-menu__link">Sponsorship</a>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </li>

                        {/*<li className="menu__item">*/}
                        {/*    <Link to="/ContactUsPage">*/}
                        {/*        <a className="menu__link menu__link--contact">Contatti</a>*/}
                        {/*    </Link>*/}
                        {/*    <ul className="sub-menu__list">*/}
                        {/*        <li className="sub-menu__item">*/}
                        {/*            <Link to="/ContactUsPage">*/}
                        {/*                <a className="sub-menu__link">Form</a>*/}
                        {/*             </Link>*/}
                        {/*        </li>*/}
                        {/*        <li className="sub-menu__item">*/}
                        {/*            <Link to="/ContactUsPage">*/}
                        {/*                <a className="sub-menu__link">Info di contatto</a>*/}
                        {/*            </Link>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
                <ul className="lang header__lang">
                    <li className="lang__item">
                        <button className="lang__link" onClick={() => changeLanguage("it")}>ITA</button>
                    </li>
                    <li className="lang__item">
                        <button className="lang__link" onClick={() => changeLanguage("en")}>ENG</button>
                    </li>
                </ul>

                <div className="search header__search">
                    <button className="search__show" onClick={()=> {
                        showSearch?setShowSearch(false):setShowSearch(true);
                        console.log(showSearch);}
                    }>
                        <span className="icon-search"></span>
                    </button>
                    { showSearch ? <SearchFomr  /> : null }
                </div>
            </div>
        </header>
    );
}

    // <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    //     <a className="navbar-brand" href="/">AkiDragon</a>
    //     <Link to="/P2LoginSignUpForm">
    //         {!currentUser && <button type="button" className="btn btn-primary">Login/Signup</button>}
    //     </Link>
    //
    //     <div className="container-fluid">
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
    //                 data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
    //                 aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon">icon</span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarCollapse">
    //             <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //                 <li className="nav-item">
    //                     <Link to="/ContactUsPage">
    //                         <a className="nav-link">{t("NavBar.Links.ContactUs")}</a>
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/Content">
    //                         <a className="nav-link">Content</a>
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/BlogPage">
    //                         <a className="nav-link">{t("NavBar.Links.Blog")}</a>
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/SponsorshipPage">
    //                         <a className="nav-link">{t("NavBar.Links.Link3")}</a>
    //                     </Link>
    //                 </li>
    //             </ul>
    //             <div className="btn-group" role="group" aria-label="Basic outlined example">
    //                 <button type="button" className="btn btn-outline-primary" onClick={() => changeLanguage("en")}>en</button>
    //                 <button type="button" className="btn btn-outline-primary" onClick={() => changeLanguage("it")}>de</button>
    //             </div>
    //             <form className="d-flex">
    //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //                 <button className="btn btn-outline-success" type="submit">{t("NavBar.SearchButton")}Button</button>
    //             </form>
    //         </div>
    //     </div>
    // </nav>