//https://react.i18next.com/guides/quick-start
import React from 'react';
import UserProfilePageContentPh2 from './UserProfilePageContent-Ph2';
import FileLoadedMessage from "../FileLoadedMessage";
import {useContextProvider} from '../../context/ContextProvider';
import { useTranslation } from 'react-i18next';

const UserProfilePagePh2 = () =>{
    const {uploadedFile, uploadedFileSetter, handleLogout} = useContextProvider();
    const { t, i18n } = useTranslation();

    console.log("UserProfilePagePh2 worked.");

    return(
    <section className="hero">
        <nav>
            <h2>{t('Welcome')}</h2>
           <button onClick={handleLogout}>Logout</button>
        </nav>
        { uploadedFile && <FileLoadedMessage file={uploadedFile} setFile={uploadedFileSetter} /> }
        <UserProfilePageContentPh2 />
        <div><a href={"/deleteProfile"}>Delete Profile</a></div>
    </section>
    );
};

export default UserProfilePagePh2;