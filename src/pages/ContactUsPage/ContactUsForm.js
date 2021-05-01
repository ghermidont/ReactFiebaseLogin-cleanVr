//https://www.youtube.com/watch?v=NgWGllOjkbs
//https://www.geeksforgeeks.org/how-to-send-attachments-and-email-using-nodemailer-in-node-js/
//https://www.emailjs.com/docs/examples/reactjs/
import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import {useHistory} from 'react-router-dom';
init("user_ryi2yglqohFlHpuZyAqiJ");

export default function ContactUsForm (){
    console.log("contactUsForm worked");

    const [checkBoxState, setCheckBoxState] = useState(true);
    const [sizeExceededError, setSizeExceededError] = useState();
    const [fileSize, setFileSize] = useState(0);
    const history = useHistory();

    useEffect(()=>{
            if(fileSize>512000){
                setSizeExceededError(true);
            }else{
                setSizeExceededError(false)
            }
        },[fileSize]
    );

    function sendEmail(e) {
        //This default function prevents the page from refreshing when we click the submit button;
        e.preventDefault();

        if(sizeExceededError===false) {
            e.preventDefault();

            emailjs.sendForm('service_neq4dxf', 'template_sij1vgl', '#contactus-form', 'user_ryi2yglqohFlHpuZyAqiJ')
                .then((result) => {
                    console.log("The result is: " + result.text);
                    result.text && history.push("/MessageSentPage", {from: "/ContactUsForm"});
                }, (error) => {
                    console.log("An error intervened:" + error.text);
                    alert("Your message was not sent because " + error.text);
                });
            e.target.reset();
        }
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Us</h2>
                            <p>Let us know what you think! In order to provide better service,
                                please do not hesitate to give us your feedback. Thank you.
                            </p>
                            <hr/>
                            <form id="contactus-form" onSubmit={sendEmail} method="POST">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input placeholder="Name"
                                                   id="name"
                                                   type="text"
                                                   className="form-control"
                                                   required
                                                   name="name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input placeholder="Email"
                                                   id="email"
                                                   type="email"
                                                   className="form-control"
                                                   aria-describedby="emailHelp"
                                                   required
                                                   name="email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder = "Subject"
                                        id="subject"
                                        type="text"
                                        className="form-control"
                                        required
                                        name="subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message"
                                              className="form-control" rows="1"
                                              required
                                              name="message"
                                    />
                                </div>

                                <div className="input-group mb-3">
                                        <input
                                            className="form-check-input mt-0"
                                            type="checkbox"
                                            value={!checkBoxState?"I consent to the processing of my personal data":''}
                                            name="checkbox"
                                            onChange={()=> {
                                                !checkBoxState?setCheckBoxState(true):setCheckBoxState(false);
                                                console.log(checkBoxState)}}
                                        />
                                        <div>I consent to the processing of my personal data</div>
                                </div>
                                <div className="form-group">
                                    {sizeExceededError&&<error>Max file size exceeded</error>}
                                    <label>Attach file:</label>
                                    <input type="file" name="attachment" id="fileInput" onChange={e=>setFileSize(e.target.files[0].size)}/>
                                    <input type="submit" value="Submit" />
                                </div>

                                <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//Save to local storage logics:
