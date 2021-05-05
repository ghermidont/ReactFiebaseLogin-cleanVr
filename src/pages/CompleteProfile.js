import React from 'react';

export default function CompleteProfile() {
  return (
    <>
      <div className='form-article__body form-login__body'>
        <h1 className="title form-title">Complete Profile</h1>
        <form className="form-article">
          <label className='form-article__label'>
            First Name
            <input className='form-article__input' type="text"/>
          </label>
          <label className='form-article__label'>
            Last Name
            <input className='form-article__input' type="text"/>
          </label>
          <label className='form-article__label'>
            User Name
            <input className='form-article__input' type="text"/>
          </label>
          <button className="form-article__btn">Save</button>
        </form>
      </div>
    </>
  );
}