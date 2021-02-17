import React, {useState, useEffect} from 'react';
import LoginSignUpForm from './LoginSignUpForm';
import UserProfilePage from './UserProfilePage';
import fireBase from '../fireBase';

export default function LoginPage() {
  const [currentUser, setCurrentUser] = useState('');
  //const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  //Clears the input
const clearInput = () => {
  setEmail('');
  setPassword('');
}

//Clears the errors
const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}
  const handleLogin = () => {
    clearErrors();
    fireBase.auth().signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  }

  const handleSignup = () => {
    clearErrors();
    fireBase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
        break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  }
    
const handleLogout = () => {
  fireBase.auth().signOut();
};

//Function that checks if user exists when user signup and login. 
const authListener = ()=> {
  fireBase.auth().onAuthStateChanged((user) => {
  if(user) {
    //every time we have a user we clear the inputs
    clearInput();
    setCurrentUser(user);
    //setLoading(false);
  }else{
    setCurrentUser("");
  }
});
};

useEffect(() => {
  authListener();
},[]);

    return(
          <div>
            {currentUser ? (
                <UserProfilePage handleLogout={handleLogout} />  
            ) : (
                <LoginSignUpForm 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError} 
                />  
            )}
            
        </div>
    );
}