import React from 'react';
import ContactUsForm from "./ContactUsForm";

function ContactUsPage(props) {
    console.log("ContactUsPage worked");
    return (
        <>
            <main className="page">
                <section className="contact-intro">
                    <div className="container">
                        <h1 className="contact-intro__title title"><span>Contattaci</span></h1>
                        <p className="contact-intro__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius nesciunt, expedita
                            dignissimos ducimus laudantium obcaecati alias iste dolores repellendus libero fuga, earum
                            quisquam amet ea non unde, voluptate voluptatum suscipit esse facilis omnis! Nesciunt quia
                            iure necessitatibus in, nisi dicta, tempora optio dolorum qui facilis voluptatibus facere
                            porro. Ducimus consequuntur accusamus at eaque dicta a culpa sequi omnis id beatae officiis
                            perferendis, nobis placeat, fugiat ipsam voluptatibus natus autem.
                        </p>
                        <ContactUsForm/>
                    </div>
                </section>

                <section className="map">
                    <div className="container">
                        <div className="map__inner">
                            <div className="map__map-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.9691707551733!2d12.47449235131477!3d41.91050375245902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f8c38a6307%3A0x903a24d1a332ffdc!2sRegus%20-%20Rome%20Popolo!5e0!3m2!1sru!2s!4v1618107777411!5m2!1sru!2s"
                                    width="600" height="300" style={{border:0}} allowFullScreen=""
                                    loading="lazy"></iframe>
                            </div>
                            <ul className="map__list">
                                <li className="map__item map__address">
                                    Piazza del Popolo nr.18, Palazzo Valadier 00187 Roma, Lazio
                                </li>
                                <li className="map__item map__phone">
                                    +390636712213
                                </li>
                                <li className="map__item map__chat">
                                    Scrivici su Whatsapp
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ContactUsPage;