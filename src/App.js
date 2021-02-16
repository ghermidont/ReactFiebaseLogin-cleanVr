import React from 'react';
//import {storage} from "./fire";
import Login from './Login';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {Route, Switch} from 'react-router';

function App() {
  
  return (
    <Router>
      {/*<AuthProvider>*/}
        <div className="App">
          <NavBar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/Login" component={Login} />
            </Switch>
        </div>
      {/*</AuthProvider>*/}
    </Router>
  );
}

export default App;
