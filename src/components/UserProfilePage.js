import React from 'react';
import UserProfilePageContent from './UserProfilePageContent';

const UserProfilePage = ({handleLogout}, {currentUser}) =>{
    
    return(
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
           <button onClick={handleLogout}>Logout</button>
        </nav> 
        <UserProfilePageContent />
    </section>
    );
};

export default UserProfilePage;