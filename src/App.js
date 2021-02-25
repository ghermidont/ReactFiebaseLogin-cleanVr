import React from 'react';
//import {storage} from "./fire";
import LoginPage from './components/LoginPage';
import './styles/App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
