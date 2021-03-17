 //In order to communicate with the Firebase we need to use the FireBase SDK.

  //In order to keep the FireBase logic separate form the components we create a separate folder (customHooks) that contains the logic for interaction with the database.

 import firebase from 'firebase';
 import 'firebase/storage';
 import 'firebase/firestore';
 import 'firebase/auth';

 //Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBC-2iuFdcWQME2_0P5c35MiJa9aXi2pVU",
    authDomain: "simplelogin-405ec.firebaseapp.com",
    projectId: "simplelogin-405ec",
    storageBucket: "simplelogin-405ec.appspot.com",
    messagingSenderId: "1043614064825",
    appId: "1:1043614064825:web:dacd90cbd848872559bb68"
  };

  // Initialize Firebase
  const fireBase = firebase.initializeApp(firebaseConfig);
  const functions = firebase.functions();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export {functions, projectStorage, projectFirestore, fireBase as default};
  export const auth = fireBase.auth();

 