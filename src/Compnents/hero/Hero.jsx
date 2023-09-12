// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <div className="logo">OptimumX</div>
          <div className="title">
            <h1>Experience excellence with us.</h1>
            <span>Your partner in business</span>
          </div>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img src="./asset/img/heroPic.png" alt="heroPic" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
