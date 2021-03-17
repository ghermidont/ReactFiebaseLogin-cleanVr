import React from 'react';
import './styles/App.css';
import LoginSignUpForm from "./components/LoginSignUpForm";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Step1EmailVerification from "./components/CreateAccount/Step1EmailVerification";
import Step2CompleteProfile from "./components/CreateAccount/Step2CompleteProfile";
import Step3RadioGameQt from './components/CreateAccount/Step3RadioGameQt';
import Step4InputGamesQt from "./components/CreateAccount/Step4InputGamesQt.js";
import Step5CheckboxGameQt from "./components/CreateAccount/Step5CheckboxGameQt";
import UpdateUserProfile from "./components/UserProfile/UpdateUserProfile";
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/LoginSignUpForm" component={LoginSignUpForm} />
        <Route path="/Step1EmailVerification" component={Step1EmailVerification} />
        <Route path="/Step2CompleteProfile" component={Step2CompleteProfile} />
        <Route path="/Step3RadioGameQt" component={Step3RadioGameQt} />
        <Route path="/Step4InputGamesQt" component={Step4InputGamesQt} />
        <Route path="/Step5CheckboxGameQt" component={Step5CheckboxGameQt} />
        <Route path="/UpdateUserProfile" component={UpdateUserProfile} />
      </Switch>
    </div>
  );
}

export default App;
