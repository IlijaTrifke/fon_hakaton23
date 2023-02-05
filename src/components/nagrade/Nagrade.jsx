import React from "react";
import CountUp from "react-countup";
import "./nagrade.scss";
import Postolje from "./img/ng-Postolje.png";

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

          <div class="ng-stand-3">
            <img src={Postolje} class="ng-postolje-img"></img>
            <div class="ng-postolje-text">3</div>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-test">
            <div class="ng-circle">
              <p class="ng-circletext">70.000</p>
            </div>
          </div>
          <div class="ng-stand-1">
            <img src={Postolje} class="ng-postolje-img"></img>
            <div class="ng-postolje-text">1</div>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">20.000</p>
          </div>
          <div class="ng-stand-2">
            <img src={Postolje} class="ng-postolje-img"></img>
            <div class="ng-postolje-text">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagrade;
