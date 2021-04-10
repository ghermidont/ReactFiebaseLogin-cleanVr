/*import React, {useEffect} from 'react';
import LoginSignUpFormPh2 from './LoginSignUpFormPh2';
import UserProfilePagePh2 from './UserProfile/UserProfilePagePh2';
import {useAuthContextProvider} from '../context/AuthContext';

export default function LoginPage() {
  const {authListener, handleLogout, user} = useContextProvider();
  
 //Hook that checks if user exists when user signup and login. 
useEffect(() => {
  authListener();
});

    return(
          <div>
            {user ? (
                <UserProfilePagePh2 handleLogout={handleLogout} />
            ) : (
                <LoginSignUpFormPh2 />
            )}
          </div>
    );
}*/