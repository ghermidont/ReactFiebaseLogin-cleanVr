//https://react.i18next.com/guides/quick-start
import React from 'react';
import UserProfilePageContent from './UserProfilePageContent';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

const UserProfilePage = () =>{
    console.log("UserProfilePage worked.");
    const { t } = useTranslation();

    return(
    <section className="hero" style={{paddingTop: "10em"}}>
        <Link to="/AddArticlesPage">
            <button type="button" className="btn btn-light">Add articles</button>
        </Link>

        <UserProfilePageContent />

        <div>
            <Link to="/DeleteProfilePage">Delete Profile</Link>
        </div>

        <Link to="/AddArticlesPage">
            <button type="button" className="btn btn-light">Add articles</button>
        </Link>
    </section>
    );
};

export default UserProfilePage;