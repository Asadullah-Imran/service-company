// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Service.scss";

function Service() {
  return (
    <div className="service">
      <div className="container">
        <div className="row1">
          <h1>Our Services</h1>
          <p>
            Share your services or product offerings here. Present them as
            simple headers that can lead out to their pages where you can
            expound on them further. You can also use this space for other
            purposes where the information is best presented as mere teasers to
            other individualized pages.
          </p>
        </div>
        <div className="row2">
          <div className="box box1">
            <img src="./asset/img/business_model.png" alt="" />
            <h2>Business model</h2>
            <p>
              You can also use this space for other purposes where the
              information is best presented as mere teasers to other
              individualized pages.
            </p>
          </div>
          <div className="box box2">
            <img src="./asset/img/business_execution.png" alt="" />
            <h2>business execution</h2>
            <p>
              You can also use this space for other purposes where the
              information is best presented as mere teasers to other
              individualized pages.
            </p>
          </div>
          <div className="box box3">
            <img src="./asset/img/business_monitoring.png" alt="" />
            <h2>business monitoring</h2>
            <p>
              You can also use this space for other purposes where the
              information is best presented as mere teasers to other
              individualized pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
