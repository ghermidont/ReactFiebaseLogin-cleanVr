//https://www.youtube.com/watch?v=NgWGllOjkbs
//https://www.geeksforgeeks.org/how-to-send-attachments-and-email-using-nodemailer-in-node-js/
//https://www.emailjs.com/docs/examples/reactjs/
import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import {useHistory} from 'react-router-dom';
init("user_CT1XM0LjSnypYte1fnGI7");

export default function ContactUsForm (){
    const [checkBoxState, setCheckBoxState] = useState(true);
    const history = useHistory();

    function sendEmail(e) {
        //This default function prevents the page from refreshing when we click the submit button;
        e.preventDefault();

        emailjs.sendForm('service_jhhv0ki', 'template_ev9ky2p', '#contact-form', 'user_CT1XM0LjSnypYte1fnGI7')
            .then((result) => {
                console.log("The result is: " + result.text);
                result.text&&history.push("/MessageSent", { from: "/ContactUsForm" });
            }, (error) => {
                console.log("An error intervened:" + error.text);
            });
        e.target.reset();
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
                            <form id="contact-form" onSubmit={sendEmail} method="POST">
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
                               {/* <form>*/}
                               {/*     <label>*/}
                               {/*         <input type="file" onChange={()=> ("ContactUsForm form file uploaded.")} />*/}
                               {/*     </label>*/}
                               {/*</form>*/}

                                <div className="input-group mb-3">
                                        <input
                                            className="form-check-input mt-0"
                                            type="checkbox"
                                            value={!checkBoxState?"The checkBox was checked!":''}
                                            name="checkbox"
                                            onChange={()=> {
                                                !checkBoxState?setCheckBoxState(true):setCheckBoxState(false);
                                                console.log(checkBoxState)}}
                                        />
                                        <div> process data</div>
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
