//https://react.i18next.com/guides/quick-start
import React from 'react';
import UserProfilePageContent from './UserProfilePageContent-Ph2';
import {useAuthContext} from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

const UserProfilePage = ({ file }) =>{
    const {currentUser, handleLogout} = useAuthContext();

    const { t } = useTranslation();

    console.log("UserProfilePage worked.");

    return(
    <section className="hero">
        <nav>
            <h2>{t('Welcome') + " " + currentUser.displayName}</h2>
           <button onClick={handleLogout}>Logout</button>
        </nav>
        <UserProfilePageContent />
        <div><a href={"/deleteProfile"}>Delete Profile</a></div>
    </section>
    );
};

export default UserProfilePage;