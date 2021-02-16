import React from 'react';
//import UserProfilePage from './components/UserProfilePage';

const UserProfilePage = ({handleLogout}) =>{
    return(
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        
    </section>
    );
};

export default UserProfilePage;