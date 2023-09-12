// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <div className="left">
            <img src="./asset/img/contactleft.png" alt="left pic" />
          </div>
          <div className="info">
            <h1>Contact Us</h1>
            <div className="email">
              <p>Email:&nbsp; </p>
              <div className="link">
                <a href=" mailto:asadullahimran19@gmail.com">
                  asadullahimran19@gmail.com
                </a>
              </div>
            </div>
            <div className="phone">
              <p>Phone:&nbsp; </p>
              <div className="link">
                <a href="tel:+8801633356249">+880-16333-56249</a>
              </div>
            </div>
          </div>

          <div className="right">
            <img src="./asset/img/contactRight.png" alt="right pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
