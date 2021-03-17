/*import React, {useEffect} from 'react';
import LoginSignUpForm from './LoginSignUpForm';
import UserProfilePage from './UserProfile/UserProfilePage';
import {useContextProvider} from '../context/ContextProvider';

export default function LoginPage() {
  const {authListener, handleLogout, user} = useContextProvider();
  
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
}*/