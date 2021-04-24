import React from 'react';
import ArticlesList from "./ArticlesList";
import LatestStreamsSwiper from "./LatestStreamsSwiper";
import { Link } from 'react-router-dom';

export default function HomePage() {
    console.log("HomePage component worked.");

    return(
       <>
           <main className="page">
                     <section className="banner">
                        <div className="container">
                            <div className="banner__image">
                                <img className="banner__img" src="" alt=""/>
                            </div>
                            <div className="banner__icon-down">
                                <img src="https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9" alt=""/>
                            </div>
                        </div>
                    </section>

                    <section className="info">
                        <div className="container">
                            <h2 className="title info__title">
                                Esplora l'unniverso <span>aki</span>dragon
                            </h2>
                            <ul className="info__list">
                                <li className="info__item">
                                    <Link to="/TournamentsPage">
                                        <a className="info__link">
                                            <div className="info__image">
                                                <img className="info__img" src="https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9" alt=""/>
                                            </div>
                                            <h3 className="info__item-title">Tornei</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className="info__item">
                                    <Link to="/AboutUsPage">
                                        <a className="info__link">
                                            <div className="info__image">
                                                <img className="info__img" src="https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9" alt=""/>
                                            </div>
                                            <h3 className="info__item-title">Team e giochi</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className="info__item">
                                    <Link to="/">
                                        <a className="info__link">
                                            <div className="info__image">
                                                <img className="info__img" src="https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9" alt=""/>
                                            </div>
                                            <h3 className="info__item-title">Sale Gaming</h3>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>

           <section className="news">
                    <div className="container">
                        <h2 className="news__title title">
                            <span>Ultimi</span> articole
                        </h2>
                        <div className="news__inner">
                            <ArticlesList />
                        </div>
                        <Link to="/BlogPage">
                            <button className="news__btn btn"><span>Altri</span> articoli</button>
                        </Link>
                    </div>

                </section>

           <section className="slider">
                <div className="container">
                    <h2 className="slider__title title">
                        <span>Ultimi</span> contenuti dei nostri streamer
                    </h2>
                    <LatestStreamsSwiper />
                    <Link to="/ContentPage">
                        <button className="slider__btn btn"><span>Altri</span> video</button>
                    </Link>
                    </div>
            </section>

           <section className="feed">
                <div className="container">
                    <div className="feed__inner">
                        <div className="feed__item">
                            <div className="feed__image">
                                <img src="" alt="" className="feed__img"/>
                            </div>
                            <Link to="/">
                                <a className="feed__link">Sponsorship</a>
                            </Link>
                        </div>
                        <div className="feed__item">
                            <div className="feed__image">
                                <img src="" alt="" className="feed__img"/>
                            </div>
                            <Link to="ContactUsPage">
                                <a className="feed__link">Contatti</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

           <div className="contact__btn">
               <Link to = "/ContactUsPage">
                    <a className="contact__btn-link">Contattaci</a>
               </Link>
           </div>

       </>
    );
}

// <LatestStreamsSwiper />