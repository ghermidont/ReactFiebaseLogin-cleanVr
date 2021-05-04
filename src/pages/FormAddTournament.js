import React from 'react';

export default function FormAddTournament() {
  return (
    <>
      <div className='form-update__body form-add-tournament'>
        <form className="form-update">
          <div className="form-dropdown">
            <div className="form-dropdown__title">Event Type</div>
            <div className="form-dropdown__item">Match</div>
            <div className="form-dropdown__item">Tournament</div>
          </div>
          <label className='form-update__label'>
            Event Name
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label btn-upload btn-upload--tournament'> <span className='icon-upload2'></span> Upload
            <input className='form-update__btn visually-hidden' type="file" placeholder='file'/>
          </label>
          <label className='form-update__label btn-upload btn-upload--tournament'> <span className='icon-upload2'></span> Upload
            <input className='form-update__btn visually-hidden' type="file" placeholder='file'/>
          </label>
          <label className='form-update__label btn-upload btn-upload--tournament'> <span className='icon-upload2'></span> Upload
            <input className='form-update__btn visually-hidden' type="file" placeholder='file'/>
          </label>
          <label className='form-update__label btn-upload btn-upload--tournament'> <span className='icon-upload2'></span> Upload
            <input className='form-update__btn visually-hidden' type="file" placeholder='file'/>
          </label>

          <label className='form-update__label'>
            Video Link
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Info Page
            <input className='form-update__input' type="text" required/>
          </label>
          <label className='form-update__label'>
            Date/Hour
            <input className='form-update__input date' type="date"
                   min="2021-05-03" max="2022-12-31"/>
          </label>
          <div className="form-dropdown">
            <div className="form-dropdown__title">Event Type</div>
            <div className="form-dropdown__item">Match</div>
            <div className="form-dropdown__item">Tournament</div>
          </div>
          <button className="form-article__btn">Submit</button>
        </form>
      </div>
    </>
  );
}