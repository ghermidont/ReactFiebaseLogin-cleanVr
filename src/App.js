import React from 'react';
import './styles/App.css';
import LoginSignUpForm from "./components/LoginSignUpForm-Ph2";
import NavBar from './components/NavBar-Ph1';
import HomePage from './components/HomePage-Ph1';
import EmailVerification from "./components/CreateAccount/Step1EmailVerification-Ph2";
import CompleteProfile from "./components/CreateAccount/Step2CompleteProfile-Ph2";
import RadioGameQt from './components/CreateAccount/Step3RadioGameQt-Ph2';
import InputGamesQt from "./components/CreateAccount/Step4InputGamesQt-Ph2.js";
import CheckboxGameQt from "./components/CreateAccount/Step5CheckboxGameQt-Ph2";
import UpdateUserProfile from "./components/UserProfile/UpdateUserProfile-Ph2";
import UserProfilePage from "./components/UserProfile/UserProfilePage-Ph2";
import IndividualArticle from "./components/Articles/IndividualArticle-Ph1";
import Contact from "./components/Contact";
import {Route, Switch} from 'react-router';
//import { Trans, useTranslation } from "react-i18next";

function App() {
    return(
<div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/LoginSignUpForm" component={LoginSignUpForm} />
            <Route path="/EmailVerification" component={EmailVerification} />
            <Route path="/CompleteProfile" component={CompleteProfile} />
            <Route path="/RadioGameQt" component={RadioGameQt} />
            <Route path="/InputGamesQt" component={InputGamesQt} />
            <Route path="/CheckboxGameQt" component={CheckboxGameQt} />
            <Route path="/UpdateUserProfile" component={UpdateUserProfile} />
            <Route path="/UserProfilePage" component={UserProfilePage} />
            <Route path="/IndividualArticle" component={IndividualArticle} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </div>
    );
  // const { t, i18n } = useTranslation();
  //
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };
  //
  // return (
  //     <div className="App">
  //       <button onClick={() => changeLanguage("en")}>EN</button>
  //       <button onClick={() => changeLanguage("it")}>DE</button>
  //       <hr/>
  //       <Trans i18nKey="description.part1">
  //         To get started, edit and save to reload.
  //       </Trans>
  //       <div>{t("description.part2")}</div>
  //     </div>
  //
  // );
}

export default App;


