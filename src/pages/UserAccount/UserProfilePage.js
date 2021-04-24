//https://react.i18next.com/guides/quick-start
import React from 'react';
import UserProfilePageContent from './UserProfilePageContent';

import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import useStorage from "../../customHooks/useStorage";
import {useAuthContext} from "../../context/AuthContext";

const UserProfilePage = () =>{
    const {currentUser, uploadedFile} = useAuthContext;
    useStorage(uploadedFile, currentUser.uid);

    console.log("UserProfilePage worked.");

    const { t } = useTranslation();

    return(
    <section className="hero">
        <nav>

        </nav>
        <UserProfilePageContent />
        <div>
            <Link to="/DeleteProfilePage">
                <a>Delete Profile</a>
            </Link>
        </div>
    </section>
    );
};

export default UserProfilePage;