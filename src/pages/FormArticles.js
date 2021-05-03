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