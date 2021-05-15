import React, { forwardRef } from "react";

//import style
import "../../styles/Visit.css";

//import assets
import garden from "../../assets/images/garden.jpg"

function Visit({ props }, ref) {
  return (
    <div className="visit" ref={ref}>
      <h2>Plan Your Visit</h2>
      <div className="visit-img">
        <img src={garden} alt="Viktor Barvitius painting" />
      </div>
      <div className="visit-container">
        <div className="visit-opening">
          <h3>Opening Hours</h3>
          <div className="visit-opening-schedule">
            <span className="container-start">Monday</span>
            <span className="container-end">Closed</span>
          </div>
          <div className="visit-opening-schedule">
            <span className="container-start">Tuesday - Sunday</span>
            <span className="container-end">10 AM - 6 PM</span>
          </div>
          <div className="visit-opening-schedule">
            <span className="container-start">Wednesday</span>
            <span className="container-end">10 AM - 8 PM</span>
          </div>
        </div>
        <div className="visit-admissions">
          <h3>Admissions</h3>
          <div className="visit-opening-price">
            <span className="container-start">Basic</span>
            <span className="container-end">16 EUR</span>
          </div>
          <div className="visit-opening-price">
            <span className="container-start">Reduced</span>
            <span className="container-end">10 EUR</span>
          </div>
          <div className="visit-opening-price">
            <span className="container-start">
              Children and youth to the age of 26
            </span>
            <span className="container-end">Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const forwardedVisit = forwardRef(Visit);
export default forwardedVisit;
