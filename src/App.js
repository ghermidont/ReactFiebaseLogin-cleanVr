import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import {ArticlesContextProvider} from  './context/ArticlesContext';
import {StreamsContextProvider} from './context/StreamsContext';
import {NewsContextProvider} from './context/NewsContext';
import {NavBarContextProvider} from "./context/NavBarContext";

//pages import
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from "./pages/IndividualArticlePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import NewsPage from "./pages/NewsPage";
import IndividualNewsPage from "./pages/IndividualNewsPage/IndividualNewsPage";
import ContentPage from "./pages/ContentPage";
import AboutUsPage from "./pages/AboutUsPage";
import TournamentsPage from "./pages/TournamentsPage";
import SponsorshipPage from "./pages/SponsorshipPage/SponsoshipPage";
import LoginPage from './pages/LoginPage/LoginPage';
import DeleteProfilePage from './pages/UserAccount/DeleteProfilePage';
import EmailVerification from './pages/UserAccount/CreateUserAccount/Step1EmailVerificationPage';
import MessageSentPage from './pages/MessageSentPage';

//components import
import NavBar from "./persistantPageParts/NavBar";
import Footer from "./persistantPageParts/Footer";
import UserProfilePage from "./pages/UserAccount/UpdateUserProfile";

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
                                    <NavBarContextProvider>
                                        <NavBar />
                                    </NavBarContextProvider>
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
                                        <Route path="/MessageSentPage" component={MessageSentPage} />
                                        <Route path="/UserProfilePage" component={UserProfilePage} />


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


