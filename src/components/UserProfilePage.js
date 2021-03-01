import React from 'react';
import UserProfilePageContent from './UserProfilePageContent';
import FileLoadedMessage from "./FileLoadedMessage";
import {useAuthContext} from '../context/AuthProvider';

const UserProfilePage = () =>{
    const {uploadedFile, uploadedFileSetter, handleLogout} = useAuthContext();
    return(
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
           <button onClick={handleLogout}>Logout</button>
        </nav>
        { uploadedFile && <FileLoadedMessage file={uploadedFile} setFile={uploadedFileSetter} /> }
        <UserProfilePageContent />
    </section>
    );
};

export default UserProfilePage;