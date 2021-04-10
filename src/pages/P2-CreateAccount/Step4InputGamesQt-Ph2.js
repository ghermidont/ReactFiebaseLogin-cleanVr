import React from 'react';
import {Link} from "react-router-dom";

export default function Step4InputGamesQtPh2() {
    return(
        <div>
            <label>Some question about games:</label>
            <input
                type="text"
                autoFocus
                required
                onChange={
                    (e)=>console.log(e.target.value)}
            />
            <Link to="/MultipleQtAboutGames">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={
                        ()=>console.log("Hello from Step4InputGamesQtPh2")
                    }
                >Save changes</button>
            </Link>

        </div>
    );
}