import React, {useEffect} from 'react';
import PictureUploadForm from './PictureUploadForm';
import {useContextProvider} from '../context/ContextProvider';
import {Link} from "react-router-dom";
import UserProfilePage from "./UserProfile/UserProfilePage";

const LoginSignUpForm = ()=>{

    useEffect(() => {
        console.log("LoginSignUpForm useEffect worked.");
        authListener();
    });

    const {authListener, handleLogout, currentUser, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = useContextProvider();

    console.log("LoginSignUpForm worked.");

    return(
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
                                    <PictureUploadForm />
                                    <Link to="/Step1EmailVerification">
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
    );
};

export default LoginSignUpForm;