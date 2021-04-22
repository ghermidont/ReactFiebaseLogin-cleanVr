import React from 'react';
import {Link} from "react-router-dom";

function MessageSent() {
    return (
        <center>
            <div style={{paddingTop: "200px"}}>Your message was successfully sent.</div>
            <Link to="/">
                <a>Home page</a>
            </Link>
        </center>
    );
}

export default MessageSent;