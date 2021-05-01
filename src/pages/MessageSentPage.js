import React from 'react';
import {Link} from "react-router-dom";

function MessageSentPage() {

    return (
        <center>
            <div style={{paddingTop: "200px"}}>Your message was successfully sent. We will contact you as soon as possible.</div>
            <Link to="/">Home page</Link>
        </center>
    );
}

export default MessageSentPage;