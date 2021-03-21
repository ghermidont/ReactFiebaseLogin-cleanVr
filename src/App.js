import React from 'react';
import './styles/App.css';
import LoginSignUpFormPh2 from "./components/LoginSignUpForm-Ph2";
import NavBarPh1 from './components/NavBar-Ph1';
import HomePagePh1 from './components/HomePage-Ph1';
import Step1EmailVerificationPh2 from "./components/CreateAccount/Step1EmailVerification-Ph2";
import Step2CompleteProfilePh2 from "./components/CreateAccount/Step2CompleteProfile-Ph2";
import Step3RadioGameQtPh2 from './components/CreateAccount/Step3RadioGameQt-Ph2';
import Step4InputGamesQtPh2 from "./components/CreateAccount/Step4InputGamesQt-Ph2.js";
import Step5CheckboxGameQtPh2 from "./components/CreateAccount/Step5CheckboxGameQt-Ph2";
import UpdateUserProfile from "./components/UserProfile/UpdateUserProfile-Ph2";
import UserProfilePage from "./components/UserProfile/UserProfilePage-Ph2";
import IndividualArticle from "./components/Articles/IndividualArticle-Ph1";
import {Route, Switch} from 'react-router';

function App() {

  return (
    <div className="App">
      <NavBarPh1 />
      <Switch>
        <Route path="/" exact component={HomePagePh1} />
        <Route path="/LoginSignUpFormPh2" component={LoginSignUpFormPh2} />
        <Route path="/Step1EmailVerificationPh2" component={Step1EmailVerificationPh2} />
        <Route path="/Step2CompleteProfilePh2" component={Step2CompleteProfilePh2} />
        <Route path="/Step3RadioGameQtPh2" component={Step3RadioGameQtPh2} />
        <Route path="/Step4InputGamesQtPh2" component={Step4InputGamesQtPh2} />
        <Route path="/Step5CheckboxGameQtPh2" component={Step5CheckboxGameQtPh2} />
        <Route path="/UpdateUserProfile" component={UpdateUserProfile} />
        <Route path="/UserProfilePage" component={UserProfilePage} />
        <Route path="/individualArticle" component={IndividualArticle} />
      </Switch>
    </div>
  );
}

export default App;
