import React, { useContext, useState} from "react";
//auth is the auth function we created in the firebase.js file. All functions called after auth. are firebase functions.
import {auth} from "../fireBase";

const CreateContext = React.createContext();

export function useAuthContext() {
  return useContext(CreateContext);
}

function AuthProvider({ children }) {
  const [uploadedFile, uploadedFileSetter] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');
  const [userPoints, setUserPoints] = useState(0);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();


  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  //const addExtraUserInfo = auth.functions().setUserData('addExtraUserInfo');
  //addExtraUserInfo({"firstName": firstName, "lastName": lastName });

  const handleSignup = () => {
    clearErrors();
    auth
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
    auth.signOut();
  };
  
  const authListener = ()=> {
    auth.onAuthStateChanged((user) => {
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

  const handleLogin = () => {
    clearErrors();
    auth.signInWithEmailAndPassword(email, password)
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

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const setUserPictureUrl = (url) => {
    const user = auth.currentUser;

    user.updateProfile({
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log('update successful');
    }).catch(function(error) {
      console.log(error);
    });

    console.log(user.photoURL);
  }

  /*   ###To implement###
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  */

  const value = {
    userPoints,
    setUserPoints,
    auth,
    hasAccount,
    setHasAccount,
    currentUser,
    setCurrentUser,
    email, 
    setEmail,
    emailError, 
    setEmailError,
    authListener,
    handleSignup,
    handleLogin,
    //resetPassword,
    //updateEmail,
    //updatePassword,
    handleLogout,
    password, 
    setPassword,
    passwordError,
    //addExtraUserInfo,
    setPasswordError,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setUserPictureUrl,
    uploadedFile,
    uploadedFileSetter
}

  return (
    <CreateContext.Provider value={value}>
      {children}
    </CreateContext.Provider>
  )
}

export default AuthProvider;
