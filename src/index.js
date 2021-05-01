import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/style.scss';
import App from './App';
import './i18n';

console.log("index.js worked");

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);