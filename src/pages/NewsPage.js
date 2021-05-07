//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
import React from 'react';
import {useDataFromFirestore} from '../customHooks/useFirestore';
import {Link} from "react-router-dom";
import {useNewsContext} from "../context/NewsContext";
import logoSection from '../assets/images/dest/logo-section.png';


export default function ArticlesList() {

  /*====Tab====*/

  const tabsBtn = document.querySelectorAll('.tab__body-btn');
  const tabsItems = document.querySelectorAll('.tab__list');

  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
  });

  /*====EndTab====*/

  const {setNewsContent} = useNewsContext();

  //We pass the name of the collection we want to work with to the useDataFromFirestore hook
  const {docsFromHook} = useDataFromFirestore('articles');
  //Put out the articles objects array to the context.
  setNewsContent(docsFromHook);

  docsFromHook.map(doc => console.log(doc));

  //Filter news by category:
  const moviesNews = docsFromHook.filter(function (doc) {
    return doc.category === "movies";
  });

  const musicNews = docsFromHook.filter(function (doc) {
    return doc.category === "music";
  });

  const videogamesNews = docsFromHook.filter(function (doc) {
    return doc.category === "videogames";
  });

  return (
    <>
      <section className="news-banner">
        <div className="container">
          <div className="info__logo logo-section">
            <img src={logoSection} alt="" className="info__img"/>
          </div>
          <h1 className="news-banner__title title"><span>News</span></h1>
          <p className="news-banner__subtitle">Le ultime della community</p>
          <div className="tab__body">
            <ul className="tab__btn-list">
              <li className="tab__btn-item">
                <button className="tab__btn active" type="button" data-tab="#tab_1">Categorie</button>
              </li>
              <li className="tab__btn-item">
                <button className="tab__btn" type="button" data-tab="#tab_2">Tutte</button>
              </li>
              <li className="tab__btn-item">
                <button className="tab__btn" type="button" data-tab="#tab_3">Videogiochi</button>
              </li>
              <li className="tab__btn-item">
                <button className="tab__btn" type="button" data-tab="#tab_4">Cinema</button>
              </li>
              <li className="tab__btn-item">
                <button className="tab__btn" type="button" data-tab="#tab_5">Musica</button>
              </li>
            </ul>

            <div className="news__inner">

              <div className="tab__list" id="tab_2">
                {docsFromHook && docsFromHook.slice(0, 8).map(doc =>
                  <article className="article">
                    <a className="article__link">
                      <img src="" alt="" className="article__image"/>
                      <div className="article__content">
                        <img className="article__logo" src="" alt=""/>
                        <div className="article__box-text">
                          <p className="article__text">
                            {doc.titile}
                          </p>
                        </div>
                      </div>
                      <div className="article__footer">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </article>
                )};
              </div>

              <div className="tab__list" id="tab_3">
                {videogamesNews && videogamesNews.slice(0, 8).map(doc =>
                  <article className="article">
                    <a className="article__link">
                      <img src="" alt="" className="article__image"/>
                      <div className="article__content">
                        <img className="article__logo" src="" alt=""/>
                        <div className="article__box-text">
                          <p className="article__text">
                            {doc.titile}
                          </p>
                        </div>
                      </div>
                      <div className="article__footer">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </article>
                )};
              </div>

              <div className="tab__list" id="tab_4">
                {moviesNews && moviesNews.slice(0, 8).map(doc =>
                  <article className="article">
                    <a className="article__link">
                      <img src="" alt="" className="article__image"/>
                      <div className="article__content">
                        <img className="article__logo" src="" alt=""/>
                        <div className="article__box-text">
                          <p className="article__text">
                            {doc.titile}
                          </p>
                        </div>
                      </div>
                      <div className="article__footer">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </article>
                )};
              </div>

              <div className="tab__list" id="tab_5">
                {musicNews && musicNews.slice(0, 8).map(doc =>
                  <article className="article">
                    <a className="article__link">
                      <img src="" alt="" className="article__image"/>
                      <div className="article__content">
                        <img className="article__logo" src="" alt=""/>
                        <div className="article__box-text">
                          <p className="article__text">
                            {doc.titile}
                          </p>
                        </div>
                      </div>
                      <div className="article__footer">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </article>
                )};
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2 className="contact__title title">Inviaci i toui articoli, la nostra redazione li leggera</h2>
          <div className="contact__btn">
            <Link to="/ContacUsPage">
              <a className="contact__btn-link">Contattaci</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );

}


