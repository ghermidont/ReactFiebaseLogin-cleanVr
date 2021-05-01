import React from 'react';
import {Link} from "react-router-dom";
import EntertainmentSwiper from "./swipers/EntertainmentSwiper";
import MatchesTournamentsSwiper from "./swipers/MatchesTournamentsSwiper";

export default function ContentPage() {
    console.log("ContentPage component worked.");

     return(
        <main className="page">
            <section className="video-page">
                <div className="container">
                    <h1 className="video-page__title title"><span>Continue</span></h1>
                    <p className="video-page__subtitle">
                        Lorem ipsum dolor sit.
                    </p>
                </div>
            </section>

            <section className="video">
               <div className="container">
                   <EntertainmentSwiper />
                   <button className="video__btn btn">Guarda altri</button>
               </div>
            </section>

            <section className="video">
                <div className="container">
                    <h2 className="video__title">Math e tornei</h2>
                    <MatchesTournamentsSwiper />
                </div>
            </section>

        <div className="contact__btn">
            <Link to = "/ContactUsPage">
                <a className="contact__btn-link">Contattaci</a>
            </Link>
        </div>
    </main>
    );
}