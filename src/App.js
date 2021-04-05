import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUpForm from "./components/LoginSignUpForm";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import EmailVerification from "./components/CreateAccount/Step1EmailVerification-Ph2";
import CompleteProfile from "./components/CreateAccount/Step2CompleteProfile-Ph2";
import RadioGameQt from './components/CreateAccount/Step3RadioGameQt-Ph2';
import InputGamesQt from "./components/CreateAccount/Step4InputGamesQt-Ph2.js";
import CheckboxGameQt from "./components/CreateAccount/Step5CheckboxGameQt-Ph2";
import UpdateUserProfile from "./components/UserProfile/UpdateUserProfile-Ph2";
import UserProfilePage from "./components/UserProfile/UserProfilePage-Ph2";
import Article from "./components/Articles/IndividualArticle";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AboutUs from "./components/AboutUs";
import Tournaments from "./components/Tournaments";

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
            <Route path="/Contact" component={Contact} />
            <Route path="/article/:slug" component={Article} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Content" component={Content} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Tournaments" component={Tournaments} />
        </Switch>
        <Footer/>

    </div>
    );

}

export default App;


