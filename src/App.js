import React from 'react';
//import {storage} from "./fire";
import LoginPage from './components/LoginPage';
import './styles/App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GameCategory from "./components/CreateAccount/GameCategory";
import UpdateUserProfile from "./components/UserProfile/UpdateUserProfile";
import Step2CompleteProfile from "./components/CreateAccount/Step2CompleteProfile";
import Step4InputGamesQt from "./components/CreateAccount/Step4InputGamesQt.js";
import Step5CheckboxGameQt from "./components/CreateAccount/Step5CheckboxGameQt";
import Step3RadioGameQt from './components/CreateAccount/Step3RadioGameQt';
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/GameCategory" component={GameCategory} />
        <Route path="/MultipleChoiceQtAboutGame" component={Step5CheckboxGameQt} />
        <Route path="/Step4InputGamesQt" component={Step4InputGamesQt} />
        <Route path="/Step2CompleteProfile" component={Step2CompleteProfile} />
        <Route path="/UpdateUserProfile" component={UpdateUserProfile} />
        <Route path="/Step3RadioGameQt" component={Step3RadioGameQt} />
      </Switch>
    </div>
  );
}

export default App;
