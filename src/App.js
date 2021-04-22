import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import {ArticlesContextProvider} from  './context/ArticlesContext'
import {StreamsContextProvider} from './context/StreamsContext';
import {NewsContextProvider} from './context/NewsContext';

//pages import
import HomePage from './pages/HomePage';
import ArticlePage from "./pages/IndividualArticlePage";
import ContactUsPage from "./pages/ContactUsPage";
import NewsPage from "./pages/NewsPage";
import IndividualNewsPage from "./pages/IndividualNewsPage";
import ContentPage from "./pages/ContentPage";
import AboutUsPage from "./pages/AboutUsPage";
import TournamentsPage from "./pages/TournamentsPage";
import SponsorshipPage from "./pages/SponsoshipPage";
import LoginPage from './pages/LoginPage';
import DeleteProfilePage from './pages/UserProfile/DeleteProfilePage';
import EmailVerification from './pages/CreateAccount/Step1EmailVerification';
import MessageSent from './pages/MessageSent';

//components import
import NavBar from "./parts/NavBar";
import Footer from "./parts/Footer";

function App() {
    return(
        <div className="App">
            <AuthContextProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <BrowserRouter>
                        <NavBar />
                        <StreamsContextProvider>
                            <ArticlesContextProvider>
                                <NewsContextProvider>
                                    <NavBar />
                                    <Switch>
                                        <Route path="/LoginPage" exact component={LoginPage} />
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/DeleteProfilePage" exact component={DeleteProfilePage} />
                                        <Route path="/ContactUsPage" component={ContactUsPage} />
                                        <Route path="/article/:slug" component={ArticlePage} />
                                        <Route path="/NewsPage" component={NewsPage} />
                                        <Route path="/news/:slug" component={IndividualNewsPage} />
                                        <Route path="/ContentPage" component={ContentPage} />
                                        <Route path="/AboutUsPage" component={AboutUsPage} />
                                        <Route path="/TournamentsPage" component={TournamentsPage} />
                                        <Route path="/SponsorshipPage" component={SponsorshipPage} />
                                        <Route path="/EmailVerification" component={EmailVerification} />
                                        <Route path="/MessageSent" component={MessageSent} />
                                    </Switch>
                                </NewsContextProvider>
                            </ArticlesContextProvider>
                        </StreamsContextProvider>
                        <Footer/>
                    </BrowserRouter>
                </Suspense>
            </AuthContextProvider>
        </div>
    );
}

export default App;


