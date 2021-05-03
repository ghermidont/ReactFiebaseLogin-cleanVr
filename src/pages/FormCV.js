import React from 'react';

export default function FormCV() {
  return (
    <>
      <div className='form-update__body'>
        <form className="form-update">
          <label className='form-update__label'>
            Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Last Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Email
            <input className='form-update__input' type="email" required/>
          </label>
          <label className="form-article__label-check form-cv">
            <input type="checkbox"/> Text
          </label>
          <div className="form-article__box-btn">
            <label className='form-article__label btn-upload'> <span className='icon-upload2'></span> Upload
              <input className='form-article__btn visually-hidden' type="file" placeholder='file'/>
            </label>
            <button className="form-article__btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}