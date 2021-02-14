import React from 'react';
//import {storage} from "./fire";
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/LoginPage" component={LoginPage} />
          </Switch>
       
      </div>
      </Router>
  );
}

export default App;
