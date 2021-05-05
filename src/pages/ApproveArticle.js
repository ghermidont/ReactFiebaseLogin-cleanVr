import React from 'react';

export default function ApproveArticle() {
  return (
    <>
      <section className="approve">
        <div className="container">
          <h1 className="approve__title title">Approve Article</h1>
          <ul className="approve__list">
            <li className="approve__item">
              <div className="approve__image">
                <img src="" alt="" className="approve__img"/>
              </div>
              <div className="approve__content">
                <h3 className="approve__item-title">Title</h3>
                <p className="approve__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis dicta earum eos excepturi, facere ipsum laborum maxime praesentium quaerat quis, quisquam ullam unde velit. Facilis odit quaerat suscipit.</p>
              </div>
              <div className="approve__box-btn">
                <button className="approve__btn approve__btn--green">Approve</button>
                <button className="approve__btn approve__btn--red">Delete</button>
              </div>
            </li>
            <li className="approve__item">
              <div className="approve__image">
                <img src="" alt="" className="approve__img"/>
              </div>
              <div className="approve__content">
                <h3 className="approve__item-title">Title</h3>
                <p className="approve__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis dicta earum eos excepturi, facere ipsum laborum maxime praesentium quaerat quis, quisquam ullam unde velit. Facilis odit quaerat suscipit.</p>
              </div>
              <div className="approve__box-btn">
                <button className="approve__btn approve__btn--green">Approve</button>
                <button className="approve__btn approve__btn--red">Delete</button>
              </div>
            </li>
            <li className="approve__item">
              <div className="approve__image">
                <img src="" alt="" className="approve__img"/>
              </div>
              <div className="approve__content">
                <h3 className="approve__item-title">Title</h3>
                <p className="approve__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis dicta earum eos excepturi, facere ipsum laborum maxime praesentium quaerat quis, quisquam ullam unde velit. Facilis odit quaerat suscipit.</p>
              </div>
              <div className="approve__box-btn">
                <button className="approve__btn approve__btn--green">Approve</button>
                <button className="approve__btn approve__btn--red">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

