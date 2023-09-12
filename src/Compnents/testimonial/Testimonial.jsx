// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testimonial.scss";
function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="title">
          <h1>Client Testimonials</h1>
          <p>
            Boost your product and service&apos;s credibility by adding
            testimonials from your clients.
          </p>
        </div>
        <div className="box">
          <div className="card">
            <img src="./asset/img/tstm1.jpg" alt="" />
            <span>
              Boost your product and service&apos;s credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who&apos;ve tried it is invaluable.
            </span>
            <span className="name">James Bond, CEO 007</span>
          </div>
          <div className="card">
            <img src="./asset/img/tstm2.JPG" alt="" />
            <span>
              Boost your product and service&apos;s credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who&apos;ve tried it is invaluable.
            </span>
            <span className="name">John Cena, Kargil.</span>
          </div>
          <div className="card">
            <img src="./asset/img/tstm3.jpg" alt="" />
            <span>
              Boost your product and service&apos;s credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who&apos;ve tried it is invaluable.
            </span>
            <span className="name">Asadullah Imran, Webli</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
