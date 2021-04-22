import React, {useState, useContext} from "react";
//auth is the auth function we created in the firebase.js file. All functions called after auth. are firebase functions.
import {auth} from "../fireBase";

const authContext = React.createContext();

export function useAuthContext(){
    return useContext(authContext);
}

/*########################## Authentication Context Provider ##########################*/
export function AuthContextProvider({ children }) {

    const [uploadedFile, uploadedFileSetter] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('false');
    const [userPoints, setUserPoints] = useState(0);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    console.log("AuthContextProvider() worked!");

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
        console.log("clearErrors() worked!");
    };

    //const addExtraUserInfo = auth.functions().setUserData('addExtraUserInfo');
    //addExtraUserInfo({"firstName": firstName, "lastName": lastName });

    // const updateTotalUsersNumber = () => {
    //connect to database function here
    //......
    //setUserPoints(userPoints + 1);
    //query to update the db value.
    //.....
    // console.log("updateTotalUsersNumber() worked");
    //};

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
//FB functions example:
        // function callAddMessage() {
        //   const messageText = "Hello, World!";
        //
        //   // [START fb_functions_call_add_message]
        //   var addMessage = firebase.functions().httpsCallable('addMessage');
        //   addMessage({ text: messageText })
        //       .then((result) => {
        //         // Read result of the Cloud Function.
        //         var sanitizedMessage = result.data.text;
        //       });
        //   // [END fb_functions_call_add_message]
        // }
        // After you uploaded and got the url of the file you have to call a cloud function I made, named "setUserData" with these parameters:
        // {
        //   "displayName": displayName,
        //     "photoURL": photoURL,
        //     "firstName": firstName,
        //     "lastName": lastName
        // }
        //updateTotalUsersNumber();
        //setEmail(email);
        //verifyEmail();
        console.log("handleSignup() worked!");
    };

    const handleLogout = () => {
        auth.signOut();
        console.log("handleLogout() worked!");
    };

    const verifyEmail = () => {
        currentUser.sendEmailVerification().then(function(){
            window.alert("Verification email sent!");
        }).catch(function(error){
            window.alert(error);
        });
        console.log("VerifyEmail function worked!");
    };


    const authListener = ()=> {
        console.log("authListener() worked!");
        auth.onAuthStateChanged((user) => {

            console.log("this is the user object from the onAuthStateChanged()" + user);

            console.log("auth.onAuthStateChanged() listener from authListener() worked!");
            if(user) {
                //every time we have a user we clear the inputs
                clearInput();
                setCurrentUser(user);
                //setLoading(false);
                console.log("if(user) condition from authListener()/auth.onAuthStateChanged() worked!");
            }else{
                setCurrentUser("");
                console.log("else of if(user) condition from authListener()/auth.onAuthStateChanged() worked!");
            }
            console.log("user value  authListener:" + currentUser);
        });
    };

    const handleLogin = () => {
        console.log("handleLogin() worked!");
        clearErrors();
        auth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log("catch(err) from handleLogin() worked!");
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
        console.log("clearInput() worked!");
    }

    const setUserPictureUrl = (url) => {
        console.log("setUserPicture() worked!");
        currentUser.updateProfile({
            photoURL: url
        }).then(function() {
            console.log('photoURL updated successfully');
        }).catch(function(error) {
            console.log(error);
        });

        console.log(currentUser.photoURL + " console.log from setUserPictureUrl()");
    };

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

    /*const addRating = function(restaurantID, rating) {
      const collection = projectFirestore.collection('restaurants');
      const document = collection.doc(restaurantID);
      const newRatingDocument = document.collection('ratings').doc();

      return projectFirestore.runTransaction(function(transaction) {
        return transaction.get(document).then(function(doc) {
          const data = doc.data();

          const newAverage =
              (data.numRatings * data.avgRating + rating.rating) /
              (data.numRatings + 1);

          transaction.update(document, {
            numRatings: data.numRatings + 1,
            avgRating: newAverage
          });
          return transaction.set(newRatingDocument, rating);
        });
      });*/
    //Cloud Firestore provides transaction functionality that allows us to perform multiple reads and writes in a single atomic operation,
    // ensuring that our data remains consistent.
    //In the block above, we trigger a transaction to update the numeric values of avgRating and numRatings in the restaurant document.
    // At the same time, we add the new rating to the ratings sub collection.
    //};

    /* ######################## END Functions for managing collections ########################*/


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
        uploadedFileSetter,
        verifyEmail
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

