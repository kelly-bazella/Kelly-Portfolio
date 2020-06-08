import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <br />
          <i className="material-icons large">contact_mail</i>
          <h1>Contact Me</h1>
          <p>
            Hello! I'd love to hear from you. Please send me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label>First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label>Last Name</label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="message" type="password" className="validate" />
                <label>Message</label>
              </div>
            </div>
           
 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
