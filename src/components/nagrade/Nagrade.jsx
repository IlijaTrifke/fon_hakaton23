import React from "react";
import CountUp from "react-countup";
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
  //console.log(timlineRef.current);

  const seeRef = () => {
    //console.log(timlineRef.current); // <h1 ></h1>
    if (timlineRef.current !== undefined) {
      var sections = timlineRef.current.querySelectorAll(".ng-pole");
      //var timeline = timlineRef.current.querySelector(".ng-text");
      //console.log(sections);
      //console.log(timeline);
      let prevScrollY = window.scrollY;

      const targetY = window.innerHeight * 0.8;

      function scrollHandler(e) {
        const { scrollY } = window;
        //const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

        //console.log(dist);

        sections.forEach((item) => {
          //console.log(item);
          const rect = item.getBoundingClientRect(); //     //console.log(rect);

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add("show-pole");
          }
        }); // //console.log(up, down);

        prevScrollY = window.scrollY;
      }

      scrollHandler();
      window.addEventListener("scroll", scrollHandler);
    }
  };

  return (
    <div class="ng-nagrade" ref={timlineRef}>
      <div class="ng-text" ref={scrollRef}>
        <h1>OSVOJI NAGRADE U VREDNOSTI OD:</h1>
      </div>
      <div class="ng-stands">
        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">40.000</p>
          </div>
          <div class="ng-stand-2">
            <img src={Postolje} class="ng-postolje-img"></img>
            <div class="ng-postolje-text">2</div>
          </div>
        </div>

        <div class="ng-pole">
          <div class="ng-circle">
            <p class="ng-circletext">70.000</p>
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
          <div class="ng-stand-3">
            <img src={Postolje} class="ng-postolje-img"></img>
            <div class="ng-postolje-text">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagrade;
