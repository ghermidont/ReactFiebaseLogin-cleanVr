import React from 'react';
import {Link} from "react-router-dom";

const ArticlesPage = () => {

  /*====Tab====*/

  const tabsBtn = document.querySelectorAll('.articles-page__tab-btn');
  const tabsItems = document.querySelectorAll('.articles-page__tab-list');

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

  /*====End Tab====*/

  return (
    <>
      <section className='articles-page'>
        <div className="container">
          <h1 className="articles-page__title title">Article</h1>
          <div className="articles-page__tab tab">

            <div className="articles-page__tab-body">
              <div className="articles-page__tab-btn-inner">
                <button className="articles-page__tab-btn active" type="button" data-tab="#tab_1">All Article</button>
                <button className="articles-page__tab-btn" type="button" data-tab="#tab_2">Personal Article</button>
              </div>

              <ul className="articles-page__tab-list active" id="tab_1">
                <li className="articles-page__tab-item">
                  <article className='articles-page__post'>
                    <div className="articles-page__image">
                      <img src="" alt="" className="articles-page__img"/>
                    </div>
                    <div className="articles-page__content">
                      <Link to='/'>
                        <h3 className="articles-page__content-title">New blog article</h3>
                      </Link>

                      <div className="articles-page__content-info">
                        <div className="articles-page__content-author">Autore</div>
                        <time className="articles-page__content-date">30.04.2021</time>
                      </div>
                        <p className="articles-page__content-text">
                          1 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex
                        </p>
                    </div>
                  </article>
                </li>
              </ul>

              <ul className="articles-page__tab-list" id="tab_2">
                <li className="articles-page__tab-item">
                  <article className='articles-page__post'>
                    <div className="articles-page__image">
                      <img src="" alt="" className="articles-page__img"/>
                    </div>
                    <div className="articles-page__content">

                        <h3 className="articles-page__content-title">New blog article</h3>

                      <div className="articles-page__content-info">
                        <div className="articles-page__content-author">Autore</div>
                        <time className="articles-page__content-date">30.04.2021</time>
                      </div>
                        <p className="articles-page__content-text">
                          2 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex
                        </p>
                    </div>
                  </article>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default ArticlesPage;