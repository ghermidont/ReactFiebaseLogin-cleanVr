import React from 'react';
import UserProfilePageContent from './UserProfilePageContent';
import FileLoadedMessage from "../FileLoadedMessage";
import {useContextProvider} from '../../context/ContextProvider';

const UserProfilePage = () =>{
    const {uploadedFile, uploadedFileSetter, handleLogout} = useContextProvider();

    console.log("UserProfilePage worked.");

    return(
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
           <button onClick={handleLogout}>Logout</button>
        </nav>
        { uploadedFile && <FileLoadedMessage file={uploadedFile} setFile={uploadedFileSetter} /> }
        <UserProfilePageContent />
        <div><a href={"/deleteProfile"}>Delete Profile</a></div>
    </section>
    );
};

export default UserProfilePage;