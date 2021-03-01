import React, {useEffect} from 'react';
import LoginSignUpForm from './LoginSignUpForm';
import UserProfilePage from './UserProfilePage';
import {useAuthContext} from '../context/AuthProvider';

export default function LoginPage() {
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