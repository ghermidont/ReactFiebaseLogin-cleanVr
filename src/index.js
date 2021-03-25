import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider, ArticlesContextProvider, UserProfileContextProvider} from './context/ContextProvider';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider>
        <UserProfileContextProvider>
          <ArticlesContextProvider>
            <App />
          </ArticlesContextProvider>
        </UserProfileContextProvider>
      </AuthContextProvider>
        </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);