import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  //Clears the input
const clearInput = () => {
  setEMail('');
  setPassword('');
}

//Clears the errors
const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}
  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
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
    fire
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
  fire.auth().signOut();
};

//Function that checks if user exists when user signup and login. 
const authListener = ()=> {
  fire.auth().onAuthStateChanged((user) => {
  if(user) {
    //every time we have a user we clear the inputs
    clearInput();
    setUser(user);
  }else{
    setUser("");
  }
});
};

useEffect(() => {
  authListener();
},[]);

  return (
    <div className="App">
      <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />       
    </div>
  );
}

export default App;
