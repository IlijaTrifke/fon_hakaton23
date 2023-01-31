import React from "react";
import "./pocetna.scss";
import logo from "../../images/FH_Logo.png";

export default function Pocetna() {
  return (
    <div className="pocetna-section">
      <img src={logo} alt="Fon hakaton logo" className="pocetna-logo" />
      <h1 className="pocetna-motto">Use your code to change the road</h1>
      <h1 className="pocetna-text-box">
        <span>PRIJAVI SE!</span>
      </h1>
      <div className="pocetna-bottom">
        <div className="pocetna-arrows">
          <h1>Saznaj Više</h1>
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
        </div>
        <div className="pocetna-bottom-middle">
          <h1>Ostalo je još:</h1>
          <div className="pocetna-date-box"></div>
        </div>
        <div className="pocetna-arrows">
          <h1>Saznaj Više</h1>
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
        </div>
      </div>
    </div>
  );
}
