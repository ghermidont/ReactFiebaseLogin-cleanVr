import React from 'react';

export default function Footer (){
    console.log("Footer component worked.")
    return(
        <footer className="footer">
            <div className="container">
                <h2 className="social__title">Seguici sui social</h2>
                <ul className="social__list">
                    <li className="social__item"><a href="https://www.facebook.com/" className="social__link">F</a></li>
                    <li className="social__item"><a href="https://www.instagram.com/" className="social__link">I</a></li>
                    <li className="social__item"><a href="https://www.youtube.com/" className="social__link">Y</a></li>
                    <li className="social__item"><a href="https://www.twitch.tv/" className="social__link">T</a></li>
                </ul>
            </div>
        </footer>
    );
};