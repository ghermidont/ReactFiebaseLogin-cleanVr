import React from 'react';
import ArticlesList from "../components/ArticlesList";
import {Link} from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="profile__inner">
            <div className="profile__box">
              <div className="profile__image">
                <img className="profile__img" src="" alt=""/>
              </div>
              <ul className="profile__list">
                <li className="profile__item">Name</li>
                <li className="profile__item">Lastname</li>
                <li className="profile__item">mail@gmail.com</li>
              </ul>
            </div>
            <ul className="profile__settings">
              <li>
                <div className="profile__settings-title">
                   <span className="icon-cog"></span> Settings
                </div>
                <ul className="profile__settings-list">
                  <li className="profile__settings-item">
                    <Link className='profile__settings-link' to='/FormArticles'>Added Article</Link>
                  </li>
                  <li className="profile__settings-item">
                    <Link className='profile__settings-link' to='/FormUpdateProfile'>Added Stream</Link>
                  </li>
                  <li className="profile__settings-item">
                    <Link className='profile__settings-link'>Added Tournament</Link>
                  </li>
                  <li className="profile__settings-item">
                    <Link className='profile__settings-link'>Approve Article</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="article-profile">
        <div className="container">
          <h2 className='article-profile__title title'>Article</h2>
          <div className="article-profile__inner">
            <Link className='article-profile__btn' to="/ArticlesPage">See All</Link>
            <ArticlesList/>
          </div>
        </div>
      </section>
    </>
  );
}