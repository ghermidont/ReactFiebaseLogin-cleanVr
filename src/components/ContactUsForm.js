//https://www.youtube.com/watch?v=NgWGllOjkbs
//https://www.geeksforgeeks.org/how-to-send-attachments-and-email-using-nodemailer-in-node-js/
//https://www.emailjs.com/docs/examples/reactjs/

import React from 'react';
import emailjs from 'emailjs-com';
import {init} from 'emailjs-com';

init("user_CT1XM0LjSnypYte1fnGI7");

export default function ContactUsForm() {
  function sendEmail(e) {
    //This default function prevents the page from refreshing when we click the submit button;
    e.preventDefault();

    emailjs.sendForm('service_jhhv0ki', 'template_ev9ky2p', '#contact-form', 'user_CT1XM0LjSnypYte1fnGI7')
      .then((result) => {
        console.log("The result is: " + result.text);
      }, (error) => {
        console.log("An error intervened:" + error.text);
      });
    e.target.reset();
  }

  return (

        <form className="form contact-intro__form" id="contact-form" onSubmit={sendEmail} method="POST">

          <div className="form__box">
            <input className="form__name" type="text" id="name" name="name" placeholder="Nome" required/>
            <input className="form__lastname" type="text" id="lastname" placeholder="Cognome" required/>
          </div>

          <input className="form__mail" id="email" type="email" aria-describedby="emailHelp" name="email"
                 placeholder="Indirizzo mail" required/>

          <textarea className="form__text" cols="30" rows="1" id="message" name='message'
                    placeholder="Messaggio"></textarea>

          <div className="form__box-btn">
            <button className="form__upload" type="file"><span className="icon-upload2"></span> Upload</button>
            <button className="form__send" type="submit">Invia</button>
          </div>

          <label>
            <input className="form__check" type="checkbox"/>
            Trattamento dati
          </label>

        </form>



  );

  {/*<form id="contact-form" onSubmit={sendEmail} method="POST">*/}
        {/*    <div className="form-group">*/}
        {/*        <div className="row">*/}
        {/*            <div className="col-md-6">*/}
        {/*                <input placeholder="Name"*/}
        {/*                       id="name"*/}
        {/*                       type="text"*/}
        {/*                       className="form-control"*/}
        {/*                       required*/}
        {/*                       name="name"*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*            <div className="col-md-6">*/}
        {/*                <input placeholder="Email"*/}
        {/*                       id="email"*/}
        {/*                       type="email"*/}
        {/*                       className="form-control"*/}
        {/*                       aria-describedby="emailHelp"*/}
        {/*                       required*/}
        {/*                       name="email"*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="form-group">*/}
        {/*        <input*/}
        {/*            placeholder = "Subject"*/}
        {/*            id="subject"*/}
        {/*            type="text"*/}
        {/*            className="form-control"*/}
        {/*            required*/}
        {/*            name="subject"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*    <div className="form-group">*/}
        {/*        <textarea placeholder = "Message"  id="message"*/}
        {/*                  className="form-control" rows="1"*/}
        {/*                  required*/}
        {/*                  name="message"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*    <form>*/}
        {/*        <label>*/}
        {/*            <input type="file" onChange={()=> ("ContactUsForm form file uploaded.")} />*/}
        {/*        </label>*/}
        {/*   </form>*/}

        {/*    <div className="input-group mb-3">*/}
        {/*            <input className="form-check-input mt-0" type="checkbox" value=""/>*/}
        {/*            <div> process data</div>*/}
        {/*    </div>*/}
        {/*   <button type="submit" className="primary-btn submit">Submit</button>*/}
        {/*</form>*/}
}

