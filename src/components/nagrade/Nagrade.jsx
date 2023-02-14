import React from "react";
import "./nagrade.scss";
import Postolje from "./img/ng-Postolje.png";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Nagrade = () => {
  const scrollRef = useRef();
  const isInView = useInView(scrollRef);
  useEffect(() => {
    if (isInView) seeRef();
  }, [isInView]);
  var timlineRef = useRef();

  const seeRef = () => {
    if (timlineRef.current !== undefined) {
      var sections = timlineRef.current.querySelectorAll(".ng-pole");
      //var timeline = timlineRef.current.querySelector(".ng-text");
      //console.log(sections);
      //console.log(timeline);
      let prevScrollY = window.scrollY;

      const targetY = window.innerHeight * 1.3;

      function scrollHandler(e) {
        sections.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add("show-pole");
          }
        });
      }

      scrollHandler();
      window.addEventListener("scroll", scrollHandler);
    }
  };

  return (
    <div class="ng-nagrade" ref={timlineRef}>
      <div class="ng-text" ref={scrollRef}>
        <h1>Osvoji nagrade u vrednosti od:</h1>
      </div>
      <div class="ng-stands">
        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">40.000 rsd</p>
          </div>
          <div class="ng-stand-2">
            <img src={Postolje} alt="Postolje" class="ng-postolje-img"></img>
            <div class="ng-postolje-text">2</div>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">70.000 rsd</p>
          </div>
          <div class="ng-stand-1">
            <img src={Postolje} alt="Postolje" class="ng-postolje-img"></img>
            <div class="ng-postolje-text">1</div>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">20.000 rsd</p>
          </div>
          <div class="ng-stand-3">
            <img src={Postolje} alt="Postolje" class="ng-postolje-img"></img>
            <div class="ng-postolje-text">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagrade;
