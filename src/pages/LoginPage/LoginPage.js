import React, {useEffect} from 'react';
import LoginSignUpForm from './LoginSignUpForm';
import UserProfilePage from '../UserAccount/UserProfilePage';
import {useAuthContext} from '../../context/AuthContext';

export default function LoginPage() {
    console.log("LoginPage component worked.");

    const {authListener, handleLogout, currentUser} = useAuthContext();

 //Hook that checks if user exists when user signup and login.
useEffect(() => {
  authListener();
});

    return(
          <div>
            {currentUser ? (
                <UserProfilePage handleLogout={handleLogout} />
            ) : (
                <LoginSignUpForm />
            )}
          </div>
    );
}