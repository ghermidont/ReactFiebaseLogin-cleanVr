import React from 'react';
//import {storage} from "./fire";
import LoginPage from './components/LoginPage';
import './styles/App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GameCategory from "./components/signupSteps/GameCategory";
import UpdateUserProfile from "./components/UpdateUserProfile";
import NameInput from "./components/signupSteps/NameInput";
import SomeQtAboutGames from "./components/signupSteps/SomeQtAboutGames";
import MultipleChoiceQtAboutGames from "./components/signupSteps/MultipleChoiceQtAboutGames";
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/GameCategory" component={GameCategory} />
        <Route path="/MultipleChoiceQtAboutGame" component={MultipleChoiceQtAboutGames} />
        <Route path="/SomeQtAboutGames" component={SomeQtAboutGames} />
        <Route path="/NameInput" component={NameInput} />
        <Route path="/UpdateUserProfile" component={UpdateUserProfile} />
      </Switch>
    </div>
  );
}

export default App;
