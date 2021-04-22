//https://firebase.google.com/docs/firestore/solutions/role-based-access
//https://react.i18next.com/guides/quick-start
//https://www.youtube.com/watch?v=5VxqV8FhlVg
import React, {useEffect} from 'react';
import PictureUploadForm from './PictureUploadForm';
import {useAuthContext} from '../context/AuthContext';
import UserProfilePage from "../pages/UserProfile/UserProfilePage";
import { Trans } from 'react-i18next';

const LoginSignUpForm = ()=>{

    useEffect(() => {
        console.log("LoginSignUpForm useEffect worked.");
        authListener();
    });

    const {authListener, currentUser, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = useAuthContext();

    console.log("LoginSignUpForm worked.");

    return(
        <Trans>
        <div>
            {currentUser ? (
                <UserProfilePage />
            ) : (
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src="" alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required autoFocus value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <p className="errorMsg">{emailError}</p>
                                <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p className={(e)=>setPassword(e.target.value)}>{passwordError}</p>
                                    <div className="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me"/> Remember me
                                        </label>
                                    </div>
                        {hasAccount ? (
                            <>
                                <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin}>Sign in</button>
                                <p>
                                    Don't have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        ):(
                            <>
                                <PictureUploadForm />
                                <button className="w-100 btn btn-lg btn-primary" onClick={handleSignup}>Sign up</button>
                                <p>
                                    Have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        )}
                    </form>
                </main>
            )}
        </div>
        </Trans>
    );
};

export default LoginSignUpForm;

// <section className="login">
//     <div className="loginContainer">
//         <label>Email Address</label>
//         <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
//         <p className="errorMsg">{emailError}</p>
//
//         <label>Password</label>
//         <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <p className={(e)=>setPassword(e.target.value)}>{passwordError}</p>
//         <div className="btnContainer">
//
//             {hasAccount ? (
//                 <>
//                     <button onClick={handleLogin}>Sign in</button>
//                     <p>
//                         Don't have an account?
//                         <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
//                     </p>
//                 </>
//             ):(
//                 <>
//                     <PictureUploadForm />
//                     <button onClick={handleSignup}>Sign up</button>
//                     <p>
//                         Have an account?
//                         <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
//                     </p>
//                 </>
//             )}
//         </div>
//     </div>
// </section>