import React from 'react';
import EntertainmentSwiper from "../components/swipers/EntertainmentSwiper";
import MatchesTournamentsSwiper from "../components/swipers/MatchesTournamentsSwiper";
import {Link} from "react-router-dom";

export default function Contents() {

  console.log("Contents component worked.");

  return (
    <main className="page">

      <section className="video-page">
        <div className="container">
          <h1 className="video-page__title title"><span>Continu</span></h1>
          <p className="video-page__subtitle">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </section>

      <section className="video">
        <div className="container">

          <EntertainmentSwiper/>
          <button className="video__btn btn">Guarda altri</button>
        </div>

      </section>

      <section className="video">
        <div className="container">
          <h2 className="video__title">Math e tornei</h2>
          <MatchesTournamentsSwiper/>
          <button className="video__btn btn">Guarda altri</button>
        </div>
      </section>

      <div className="contact__btn">
        <Link to="/ContactUsPage">
          <a className="contact__btn-link">Contattaci</a>
        </Link>
      </div>

    </main>

  );
}