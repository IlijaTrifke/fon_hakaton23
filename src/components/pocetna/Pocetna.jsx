import React, { useState, useEffect } from "react";
import "./pocetna.scss";
import logo from "../../images/FH_Logo.png";

export default function Pocetna() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer(() => getTime(new Date("Feb 30, 2023 23:59:59").getTime()));
    }, 1000);
  });

  function getTime(countDownDate) {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
      days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return `${days}:${hours}:${minutes}:${seconds}`;
  }

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
          <h1 className="pocetna-middle-text">Ostalo je još:</h1>
          <div className="pocetna-timer">
            {/* <div className="timer-text">
              <div className="timer-span">PRIJAVE SU ZATVORENE!</div>
            </div> */}
            {timer}
          </div>
          <div className="pocetna-date-box"></div>
        </div>
        <div className="pocetna-arrows">
          <h1>Saznaj Više</h1>
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
          <div className="pocetna-arrow" />
        </div>
      </div>
      <div className="blue-ball-blur" />
      <div className="purple-rectangle-blur" />
    </div>
  );
}
