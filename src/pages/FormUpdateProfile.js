import React from 'react';

export default function FormUpdateProfile() {
  return (
    <>
      <div className='form-update__body'>
        <form className="form-update">
          <div className="form-update__avatar-image">
            <img src="" alt=""/>
          </div>
          <label className='form-update__label btn-upload'> <span className='icon-upload2'></span> Upload
            <input className='form-update__btn visually-hidden' type="file" placeholder='file'/>
          </label>
          <label className='form-update__label'>
            Nick Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Date
            <input className='form-update__input date' type="date"
                   min="2021-05-03" max="2022-12-31"/>
          </label>
          <label className='form-update__label'>
            Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Last Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Address
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Password
            <input className='form-update__input' type="password" required/>
          </label>
          <label className='form-update__label'>
            Email
            <input className='form-update__input' type="email" required/>
          </label>
          <button className="form-article__btn">Submit</button>
        </form>
      </div>
    </>
  );
}