/* eslint-disable no-unused-vars */
import React from "react";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          This text block gives a brief overview of your company. Share your
          philosophy, vision, or mantra here.
        </div>
        <div className="image">
          <img src="./asset/img/about.jpg" alt="aboutpic" />
        </div>
      </div>
    </div>
  );
}

export default About;
