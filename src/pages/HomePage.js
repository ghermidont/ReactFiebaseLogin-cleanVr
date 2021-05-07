import React from 'react';
import ArticlesList from "../components/ArticlesList";
import LatestStreamsSwiper from "../components/swipers/LatestStreamsSwiper";
import {Link} from 'react-router-dom';
import logoSection from '../assets/images/dest/logo-section.png';

export default function HomePage() {
  console.log("HomePage component worked.");

  return (
    <>
      <main className="page">
        <section className="banner">
          <div className="container">
            <div className="banner__image">
              <img className="banner__img" src="https://static.dw.com/image/36055632_303.jpg" alt=""/>
            </div>
          </div>
        </section>

        <section className="info">
          <div className="container">
            <h2 className="title info__title title-logo">
              Esplora l'unniverso <span>aki</span>drago
            </h2>
            <ul className="info__list">
              <li className="info__item">
                <Link to="/TournamentsPage">
                  <a className="info__link">
                    <div className="info__image">
                      <img className="info__img"
                           src="https://www.wipo.int/export/sites/www/wipo_magazine/images/2018_01_art_4_1_845.jpg"
                           alt=""/>
                    </div>
                    <h3 className="info__item-title">Tornei</h3>
                  </a>
                </Link>
              </li>
              <li className="info__item">
                <Link to="/AboutUsPage">
                  <a className="info__link">
                    <div className="info__image">
                      <img className="info__img"
                           src="https://static.republika.co.id/uploads/images/inpicture_slide/peluncuran-dewa-united-esports-kamis_210219083051-758.jpg"
                           alt=""/>
                    </div>
                    <h3 className="info__item-title">Team e giochi</h3>
                  </a>
                </Link>
              </li>
              <li className="info__item">
                <Link to="/">
                  <a className="info__link">
                    <div className="info__image">
                      <img className="info__img"
                           src="https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/joueurs-d'esport-%7C-630x405-%7C-%C2%A9-dr/19307954-1-fre-FR/Joueurs-d'Esport-%7C-630x405-%7C-%C2%A9-DR.jpg"
                           alt=""/>
                    </div>
                    <h3 className="info__item-title">Sale Gaming</h3>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>


        <section className="news">
          <div className="container">
            <div className="info__logo logo-section">
              <img src={logoSection} alt="" className="info__img"/>
            </div>
            <h2 className="news__title title">
              <span>Ultimi</span> articole
            </h2>
            <div className="news__inner">
              <ArticlesList/>
            </div>
            <Link className='btn-more' to="/BlogPage">
              <button className="news__btn btn"><span>Altri</span> articoli</button>
            </Link>
          </div>

        </section>

        <section className="slider">
          <div className="container">
            <h2 className="slider__title title">
              <span>Ultimi</span> contenuti dei nostri streamer
            </h2>
            <LatestStreamsSwiper/>
            <Link className='btn-more btn-more__home-slider' to="/ContentPage">
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
                <Link className="feed__link" to="/">
                  <a className="feed__link">Sponsorship</a>
                </Link>
              </div>
              <div className="feed__item">
                <div className="feed__image">
                  <img src="" alt="" className="feed__img"/>
                </div>
                <Link className="feed__link" to="ContactUsPage">
                  <a className="feed__link">Contatti</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="contact__btn">
          <Link to="/ContactUsPage">
            <a className="contact__btn-link">Contattaci</a>
          </Link>
        </div>
      </main>
    </>
  );
}

// <LatestStreamsSwiper />