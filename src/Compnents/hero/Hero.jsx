// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <img src="../../../public/asset/img/home.png" alt="hero pic" />
      <div className="container">
        <div className="left">
          <div className="logo">Red Shark</div>
          <div className="title">
            <h1>Experience excellence with us.</h1>
            <span>Your partner in business</span>
          </div>
          <button>Learn More</button>
        </div>
        <div className="right">
          <div className="pic">some picture</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
