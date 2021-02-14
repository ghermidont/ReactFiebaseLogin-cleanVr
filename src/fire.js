 import firebase from 'firebase';
 
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
  const fire = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  export  {
    storage, fire as default
  }