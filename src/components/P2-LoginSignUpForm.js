//https://firebase.google.com/docs/firestore/solutions/role-based-access
//https://react.i18next.com/guides/quick-start
//https://www.youtube.com/watch?v=5VxqV8FhlVg
import React, {useEffect} from 'react';
import P2PictureUploadForm from './P2-PictureUploadForm';
import {useAuthContext} from '../context/ContextProvider';
import {Link} from "react-router-dom";
import UserProfilePage from "../pages/UserProfile/UserProfilePage-Ph2";
import { Trans } from 'react-i18next';

const P2LoginSignUpForm = ()=>{

    useEffect(() => {
        console.log("LoginSignUpFormPh2 useEffect worked.");
        authListener();
    });

    const {authListener, handleLogout, currentUser, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = useAuthContext();

    console.log("LoginSignUpFormPh2 worked.");

    return(
        <Trans>
        <div>
            {currentUser ? (
                <UserProfilePage handleLogout={handleLogout} />
            ) : (
                <section className="login">
                    <div className="loginContainer">
                        <label>Email Address</label>
                        <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <p className="errorMsg">{emailError}</p>

                       <label>Password</label>
                       <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                       <p className={(e)=>setPassword(e.target.value)}>{passwordError}</p>
                       <div className="btnContainer">
                            {hasAccount ? (
                                <>
                                    <button onClick={handleLogin}>Sign in</button>
                                    <p>
                                        Don't have an account?
                                        <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                    </p>
                                </>
                            ):(
                                <>
                                    <P2PictureUploadForm />
                                    <Link to="/UserProfilePage">
                                        <button onClick={handleSignup}>Sign up</button>
                                    </Link>
                                    <p>
                                        Have an account?
                                        <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                    </p>
                                </>
                            )}
                       </div>
                    </div>
                </section>
            )}
        </div>
        </Trans>
    );
};

export default P2LoginSignUpForm;