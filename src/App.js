import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import {ArticlesContextProvider} from  './context/ArticlesContext';
import {StreamsContextProvider} from './context/StreamsContext';
import {NavBarContextProvider} from "./context/NavBarContext";

//pages import
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from "./pages/IndividualArticlePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import ArticlesPage from "./pages/ArticlesPage";

import ContentPage from "./pages/ContentsPage/ContentPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import TournamentsPage from "./pages/TournamentsPage";
import SponsorshipPage from "./pages/SponsorshipPage/SponsoshipPage";
import LoginPage from './pages/LoginPage/LoginPage';
import DeleteProfilePage from './pages/UserAccount/DeleteProfilePage';
import EmailVerification from './pages/UserAccount/CreateUserAccount/Step1EmailVerificationPage';
import MessageSentPage from './pages/MessageSentPage';
import UserProfilePage from "./pages/UserAccount/UserProfilePage";
import AddArticlesPage from "./pages/UserAccount/AddArticlesPage/AddArticlesPage";
import SponsorshipForm from "./pages/SponsorshipPage/SponsorshipForm";
import ResumeForm from "./pages/AboutUsPage/ResumeFor";
import MainSurveyPage from "./pages/UserAccount/CreateUserAccount/SurveySteps/MainSurveyPage";
import UserProfileArticlesPage from "./pages/UserAccount/UserProfileArticlesPage";

//components import
import NavBar from "./persistantPageParts/NavBar";
import Footer from "./persistantPageParts/Footer";

function App() {
    console.log("App.js worked.");

    return(
        <div className="App">
            <AuthContextProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <BrowserRouter>
                        <NavBar />
                        <StreamsContextProvider>
                            <ArticlesContextProvider>

                                    <NavBarContextProvider>
                                        <NavBar />
                                    </NavBarContextProvider>
                                    <Switch>
                                        <Route path="/LoginPage" exact component={LoginPage} />
                                        <Route path="/" exact component={HomePage} />
                                        <Route path="/DeleteProfilePage" exact component={DeleteProfilePage} />
                                        <Route path="/ContactUsPage" component={ContactUsPage} />
                                        <Route path="/article/:slug" component={ArticlePage} />
                                        <Route path="/NewsPage" component={ArticlesPage} />
                                        <Route path="/ContentPage" component={ContentPage} />
                                        <Route path="/AboutUsPage" component={AboutUsPage} />
                                        <Route path="/TournamentsPage" component={TournamentsPage} />
                                        <Route path="/SponsorshipPage" component={SponsorshipPage} />
                                        <Route path="/EmailVerification" component={EmailVerification} />
                                        <Route path="/MessageSentPage" component={MessageSentPage} />
                                        <Route path="/UserProfilePage" component={UserProfilePage} />
                                        <Route path="/AddArticlesPage" component={AddArticlesPage} />
                                        <Route path="/SponsorshipForm" component={SponsorshipForm} />
                                        <Route path="/ResumeForm" component={ResumeForm} />
                                        <Route path="/MainSurveyPage" component={MainSurveyPage} />
                                        <Route path="/UserProfileArticlesPage" component={UserProfileArticlesPage} />
                                    </Switch>
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


