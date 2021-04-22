import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDataFromFirestore} from "../customHooks/useFirestore";

function TournamentsPage() {
    console.log("TournamentsPage component worked!");

    const[showTab1, setShowTab1] = useState('active');
    const[showTab2, setShowTab2] = useState('');

    //Custom hook call
    const {docsFromHook} = useDataFromFirestore('match-tournaments');

    const passedEvents =  docsFromHook.filter(function(doc) {
        return doc.EventStatus === "passed";
    });

    const futureEvents = docsFromHook.filter(function(doc) {
        return doc.EventStatus === "future";
    });

//Templates
    const PassedMatchTemp = (doc) => {
        return (
            <li key={doc.id} className={`tab__item ${showTab1}`}>
                <div className="tab__image"
                     style={{background: "blue", url: "#", position: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                >
                    Passed Match Template
                </div>
                <div className="tab__content">
                    <a className="tab__title">{doc.EventCategory}</a>
                    <div className="tab__name">Rambow Six Siege</div>
                    <div className="tab__date">22/03/2021</div>
                    <div className="tab__set">6 p.m CET</div>
                </div>
                <ul className="tab__icon">
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                </ul>
                <div className="tab__btn">
                    <button className="tab__link-strim"><a rel="noopener noreferrer" href={doc.videoURL} target="_blank">Guarda</a></button>
                    <Link to="/BlogPage">
                        <button className="tab__link-info">Info</button>
                    </Link>
                </div>
            </li>
        );
    }

    const PassedTournTemp = (doc) => {
        return  (
            <li key={doc.id} className={`tab__item ${showTab1}`}>
                <div className="tab__image"
                     style={{background: "blue", url: "#", position: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                >
                    Passed Tournament Template
                </div>
                <div className="tab__content">
                    <a className="tab__title">{doc.EventCategory}</a>
                    <div className="tab__name">Rambow Six Siege</div>
                    <div className="tab__date">22/03/2021</div>
                    <div className="tab__set">6 p.m CET</div>
                </div>
                <ul className="tab__icon">
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                </ul>
                <div className="tab__btn">
                    <button className="tab__link-strim"><a rel="noopener noreferrer" href={doc.videoURL} target="_blank" >Guarda</a></button>
                    <Link to="/BlogPage">
                        <button className="tab__link-info">Info</button>
                    </Link>
                </div>
            </li>
        );
    }

    const FutureMatchTemp = (doc) => {
        return  (
            <li key={doc.id} className={`tab__item ${showTab2}`}>
                <div className="tab__image"
                     style={{background: "blue", url: "#", position: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                >
                    Future Match Template
                </div>
                <div className="tab__content">
                    <a className="tab__title">{doc.EventCategory}</a>
                    <div className="tab__name">Rambow Six Siege</div>
                    <div className="tab__date">22/03/2021</div>
                    <div className="tab__set">6 p.m CET</div>
                </div>
                <ul className="tab__icon">
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                </ul>
                <div className="tab__btn">
                    <button className="tab__link-strim"><a rel="noopener noreferrer" href={doc.videoURL} target="_blank" >Guarda</a></button>
                    <Link to="/BlogPage">
                        <button className="tab__link-info">Info</button>
                    </Link>
                </div>
            </li>
        );
    }

    const FutureTournTemp = (doc) => {
        return  (
            <li key={doc.id} className={`tab__item ${showTab2}`}>
                <div className="tab__image"
                     style={{background: "blue", url: "#", position: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                >
                    Future Tournament Template
                </div>
                <div className="tab__content">
                    <a className="tab__title">{doc.EventCategory}</a>
                    <div className="tab__name">Rambow Six Siege</div>
                    <div className="tab__date">22/03/2021</div>
                    <div className="tab__set">6 p.m CET</div>
                </div>
                <ul className="tab__icon">
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                    <li className="tab__item-icon">
                        <a className="tab__link-icon">
                            <img className="tab__img" src="" alt=""/>
                        </a>
                    </li>
                </ul>
                <div className="tab__btn">
                    <button className="tab__link-strim">
                        <a rel="noopener noreferrer" href={doc.videoURL} target="_blank" >Guarda</a>
                    </button>
                    <Link to="/BlogPage">
                        <button className="tab__link-info">Info</button>
                    </Link>
                </div>
            </li>
        );
    }

    return (
        <>
            <main className="page">
               <section className="tournament">
                    <div className="container">
                        <h1 className="tournament__title title">
                            <span>I tornei aki</span>dragon
                        </h1>
                        <img src="" alt="" className="tournament__image"/>
                            <p className="tournament__text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur odio ipsum explicabo
                                repudiandae eius, quos corrupti dolorem sint voluptatum rem nihil sequi fugit quis amet
                                iusto numquam recusandae dolores quasi repellat fuga, nam suscipit illum labore. Iste
                                uasi animi necessitatibus temporibus et earum assumenda.
                                Earum neque quasi vel laudantium nemo?
                            </p>

                            <div className="tournament__tab tab">
                                <div className="tab__body">
                                    <ul className="tab__body-list">
                                        <li className="tab__body-item">
                                            <button
                                                className="tab__body-btn active"
                                                type="button"
                                                data-tab="#tab_1"
                                                onClick={
                                                    ()=> {
                                                        showTab1 === 'active' ? setShowTab1('') : setShowTab1('active');
                                                        console.log("ShowTab1 " + showTab1);
                                                    }
                                                }
                                            >
                                                Eventi passati
                                            </button>
                                        </li>
                                        <li className="tab__body-item">
                                            <button
                                                className="tab__body-btn"
                                                type="button"
                                                data-tab="#tab_2"
                                                onClick={
                                                    ()=>{
                                                        showTab2===''?setShowTab2('active'):setShowTab2('');
                                                        console.log("ShowTab2 " + showTab2);
                                                    }
                                                }
                                            >
                                                Prossimi eventi
                                            </button>
                                        </li>
                                    </ul>

                                    <ul
                                        className={`tab__list ${showTab1}`}
                                        id="tab_1">
                                        {passedEvents && passedEvents.slice(0, 4).map(doc=>
                                            doc.EventCategory==="match" ? PassedMatchTemp(doc) : PassedTournTemp(doc)
                                        )}
                                    </ul>

                                    <ul
                                        className={`tab__list ${showTab2}`}
                                        id="tab_2"
                                    >
                                        {futureEvents && futureEvents.slice(0, 4).map(doc=>
                                            doc.EventCategory==="match" ? FutureMatchTemp(doc) : FutureTournTemp(doc)
                                        )}
                                    </ul>

                                </div>
                            </div>
                    </div>
                </section>

               <section className="contact">
                    <div className="container">
                        <h2 className="contact__title">Hai un team? partecipa anche tu!</h2>
                        <div className="contact__btn">
                            <Link to="/ContactUsPage">
                                <a className="contact__btn-link">Contattaci</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default TournamentsPage;
