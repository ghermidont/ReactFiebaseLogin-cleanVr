import React, {useEffect} from 'react';
import LoginSignUpForm from '../components/LoginSignUpForm';
import UserProfilePage from './UserProfile/UserProfilePage';
import {useAuthContext} from '../context/AuthContext';

export default function LoginPage() {
  const {authListener, handleLogout, user} = useAuthContext();

 //Hook that checks if user exists when user signup and login.
useEffect(() => {
  authListener();
});

    return(
          <div>
            {user ? (
                <UserProfilePage handleLogout={handleLogout} />
            ) : (
                <LoginSignUpForm />
            )}
          </div>
    );
}