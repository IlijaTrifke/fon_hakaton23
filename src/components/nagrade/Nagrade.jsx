import React from "react";
import CountUp from "react-countup";
import "./nagrade.scss";

const Nagrade = () => {
  return (
    <div class="ng-nagrade">
      <div class="ng-text">
        <h1>OSVOJI NAGRADE U VREDNOSTI OD:</h1>
      </div>
      <div class="ng-stands">
        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">40.000</p>
          </div>
          <div class="ng-rectangle2">
            <p class="ng-rectangletext">2</p>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">70.000</p>
          </div>
          <div class="ng-rectangle1">
            <p class="ng-rectangletext">1</p>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">20.000</p>
          </div>
          <div class="ng-rectangle3">
            <p class="ng-rectangletext">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagrade;
