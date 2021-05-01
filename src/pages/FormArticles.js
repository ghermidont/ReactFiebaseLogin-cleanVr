import React from 'react';

export default function FormArticles() {
  return (
    <>
      <div className='form-article__body'>
        <form className="form-article">
          <label className='form-article__label'>
            Title
            <input className='form-article__input' type="text"/>
          </label>
          <label className='form-article__label'>
            Description
            <textarea className='form-article__input' rows='1' name="text"></textarea>
          </label>

          <div className="form-article__checkbox-title form-article__label">
            Category
          </div>
          <label className="form-article__label-check">
            <input type="checkbox"/> Video game
          </label>
          <label className="form-article__label-check">
            <input type="checkbox"/> Music
          </label>
          <label className="form-article__label-check">
            <input type="checkbox"/> Movie
          </label>

          <label className='form-article__label'>
            Description
            <textarea className='form-article__input' rows='2' name="countent"></textarea>
          </label>
          <div className="form-article__box-btn">
            <div className="form-article__input-wrapper">
              <label className='form-article__label'>
                <input className='btn form-article__btn' type="file" placeholder='file'/>
              </label>
            </div>

            <input className='btn form-article__btn form-article__btn-send ' type="button" value='Submit'/>
          </div>
        </form>
      </div>
    </>
  );
}