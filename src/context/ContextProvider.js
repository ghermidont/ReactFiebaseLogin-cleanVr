//https://www.freecodecamp.org/news/how-to-identify-and-resolve-wasted-renders-in-react-cc4b1e910d10/
import React, { useContext, useState} from "react";
//auth is the auth function we created in the firebase.js file. All functions called after auth. are firebase functions.
import {auth, projectFirestore } from "../fireBase";

const CreateContext = React.createContext();

export function useContextProvider() {
  return useContext(CreateContext);
}

export function ContextProvider({ children }) {
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

  console.log("Context Provider worked!");

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
    console.log("clearErrors() worked!");
  };

  //const addExtraUserInfo = auth.functions().setUserData('addExtraUserInfo');
  //addExtraUserInfo({"firstName": firstName, "lastName": lastName });

  const updateTotalUsers = () => {
    //connect to database function here
    setUserPoints(userPoints + 1);
    //query to update the db value.
    console.log("updateTotalUsers() worked");
  };

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

    updateTotalUsers();
    setEmail(email);
    verifyEmail();
    console.log("handleSignup() worked!");
 };

 const verifyEmail = () => {
   currentUser.sendEmailVerification().then(function(){
     window.alert("Verification email sent!");
   }).catch(function(error){
     window.alert(error);
   });
   console.log("VerifyEmail function worked!");
 };

  const handleLogout = () => {
    auth.signOut();
    console.log("handleLogout() worked!");
  };
  
  const authListener = ()=> {
    console.log("authListener() worked!");
    auth.onAuthStateChanged((user) => {
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

  /* ######################## Functions for managing collections ########################*/

  const addArticle = (article, userId) => {
    projectFirestore.collection('users').doc(userId).collection('articles').add(article);
    console.log("addArticle() worked!");
    //Adds a new document to the articles collection.
  };

  const getAllArticles = () => {
    projectFirestore.collection('restaurants').orderBy('avgRating', 'desc').limit(50);
    //The query will retrieve up to 10 articles from the articles collection. After we declared this query, we pass it to the getDocumentsInQuery() method which is responsible for loading and rendering the data.
    console.log("getAllArticles() worked!");
  };

  const getAnArticle = (id, userId) => {
    projectFirestore.collection('users').doc(userId).collection('articles').doc(id).get().then(() => console.log('article retrieved'));
    //After you've implemented this method, you'll be able to view pages for each restaurant. Just click on a restaurant in the list and you should see the restaurant's details page.
    console.log("getAnArticle() worked!");
  };

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
    //Cloud Firestore provides transaction functionality that allows us to perform multiple reads and writes in a single atomic operation, ensuring that our data remains consistent.
    //In the block above, we trigger a transaction to update the numeric values of avgRating and numRatings in the restaurant document. At the same time, we add the new rating to the ratings sub collection.
  //};

  /* ######################## END Functions for managing collections ########################*/


  const value = {
    userPoints,
    setUserPoints,
    addArticle,
    getAllArticles,
    getAnArticle,
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
    <CreateContext.Provider value={value}>
      {children}
    </CreateContext.Provider>
  );
}


