import React from 'react';
import {Link} from "react-router-dom";


export default function FormLogin() {
  return (
    <>
      <div className='form-article__body form-login__body'>
        <h1 className="title form-title">
          Login
        </h1>
        <form className='form-article'>
          <label className='form-article__label'>
            Name
            <input className='form-article__input' type="text"/>
            <p className="errorMsg"></p>
          </label>
          <label className='form-article__label'>
            Password
            <input className='form-article__input' type="password"/>
            <p className="passwordError"></p>
          </label>
          <div className='form-article__box-btn'>
            <>
              <button>Sign in</button>
              <p>
                Don't have an account?
                <span>Sign up</span>
              </p>
            </>
            <>
              {/*<P2PictureUploadForm/>*/}
              <Link to="/UserProfilePage">
                <button>Sign up</button>
              </Link>
              <p>
                Have an account?
                <span>Sign in</span>
              </p>
            </>
          </div>
        </form>
      </div>
    </>
  );
}
