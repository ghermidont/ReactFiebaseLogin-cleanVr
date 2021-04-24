import React from 'react';
import {Link} from "react-router-dom";

export default function Step5CheckboxGameQtPage() {
    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        First checkbox
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""></input>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Second checkbox
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Third checkbox
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""></input>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Fourth checkbox
                </label>
            </div>
            <Link to="/UserProfilePage">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={
                        ()=>console.log("Hello from Step5CheckboxGameQtPage")
                    }
                >Finish</button>
            </Link>
        </>
    );
}