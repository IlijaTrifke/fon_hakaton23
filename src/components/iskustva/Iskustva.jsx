// import React from "react";
import "./iskustva.scss";
import Iskustvo from "./Iskustvo.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IskustvoSlider from "./IskustvaSlider.js";

import iskustva1 from "./assets/1.JPG";
import iskustva2 from "./assets/2.jpg";
import iskustva3 from "./assets/3.JPG";
import iskustva4 from "./assets/4.JPG";
import iskustva5 from "./assets/5.jpg";
import iskustva6 from "./assets/6.jpg";
import iskustva7 from "./assets/7.JPG";
import iskustva8 from "./assets/8.JPG";
import iskustva9 from "./assets/9.JPG";
import iskustva10 from "./assets/10.JPG";
import iskustva11 from "./assets/11.jpg";
import iskustva12 from "./assets/12.JPG";
import iskustva13 from "./assets/13.jpg";

import React, { useState, useEffect } from "react";

import StrelaLevo from "../../images/left-arrow.png";
import StrelaDesno from "../../images/right-arrow.png";

import { DataSlider } from "./DataSlider";

const Iskustva = (props) => {
  const iskustvaSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const downSlike = [
    {
      downSlika: iskustva1,
      iskustvoIme: "iskustvo1",
    },
    {
      downSlika: iskustva2,
      iskustvoIme: "iskustvo2",
    },
    {
      downSlika: iskustva3,
      iskustvoIme: "iskustvo3",
    },
    {
      downSlika: iskustva4,
      iskustvoIme: "iskustvo4",
    },
    {
      downSlika: iskustva5,
      iskustvoIme: "iskustvo5",
    },
    {
      downSlika: iskustva6,
      iskustvoIme: "iskustvo6",
    },
    {
      downSlika: iskustva7,
      iskustvoIme: "iskustvo7",
    },
    {
      downSlika: iskustva8,
      iskustvoIme: "iskustvo8",
    },
    {
      downSlika: iskustva9,
      iskustvoIme: "iskustvo9",
    },
    {
      downSlika: iskustva10,
      iskustvoIme: "iskustvo10",
    },
    {
      downSlika: iskustva11,
      iskustvoIme: "iskustvo11",
    },
    {
      downSlika: iskustva12,
      iskustvoIme: "iskustvo12",
    },
    {
      downSlika: iskustva13,
      iskustvoIme: "iskustvo13",
    },
  ];

  const [people] = useState(DataSlider);
  const [current, setCurrent] = useState(0);
  const [stateR, setStateR] = useState(false);
  const [stateL, setStateL] = useState(false);
  const [state, setState] = useState(false);
  const length = people.length;
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 0, title: "CORE" },
      { id: 1, title: "IT" },
      { id: 2, title: "Dizajn" },
      { id: 3, title: "PR" },
      { id: 4, title: "CR&AR" },
      { id: 5, title: "Logistika" },
      { id: 6, title: "HR" },
    ],
  });

  useEffect(() => {
    const lastCurrent = people.length - 1;
    if (current < 0) {
      setCurrent(lastCurrent);
    }
    if (current > lastCurrent) {
      setCurrent(0);
    }
  }, [current, people]);

  useEffect(() => {
    let slider = setInterval(
      () => {
        setState(false);
        if (current == 5) {
          toggleActiveStyles(0);
          toggleActive(0);
          setCurrent(0);
        } else {
          toggleActiveStyles(current + 1);
          toggleActive(current + 1);
          setCurrent(current + 1);
        }

        console.log(current);
        setCurrent(current + 1);
      },
      state === true ? 10000 : 3000
    );

    return () => {
      clearInterval(slider);
    };
  }, [current]);

  const nextSlide = () => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
    toggleActiveStyles(index);
    toggleActive(index);
  };

  const prevSlide = () => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
    toggleActiveStyles(index);
    toggleActive(index);
  };

  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    console.log(appState.objects[index], appState.activeObject);
    if (appState.objects[index] === appState.activeObject) {
      return "box activeS";
    } else {
      return "box inactiveS";
    }
  };

  const toggleStateR = () => {
    if (stateR === false) {
      setStateR(true);
    } else {
      setStateR(false);
    }
  };
  const toggleStateL = () => {
    if (stateL === false) {
      setStateL(true);
    } else {
      setStateL(false);
    }
  };

  const toggleActiveStylesRightArrow = () => {
    if (stateR === false) {
      return "right-arrow inactiveAR";
    } else {
      return "right-arrow activeAR";
    }
  };
  const toggleActiveStylesLeftArrow = () => {
    if (stateL === false) {
      return "left-arrow inactiveAR";
    } else {
      return "left-arrow activeAR";
    }
  };

  return (
    <div className="ax-iskustva">
      <div id="iskustva"></div>
      <div className="ax-title">
        <h1>Iskustva</h1>
      </div>

      <div className="ax-top-container">
        <div className="ax-top-left">
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="ax-top-slider">
                    <img src={data.image} alt="group" className="image" />
                    <div className="opis-slike">
                      <h1 className="ax-top-name">{data.name}</h1>
                      <hr />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <img
            className={toggleActiveStylesLeftArrow()}
            src={StrelaLevo}
            alt="Slika strele"
            onClick={() => {
              prevSlide();
              toggleStateL();
              setState(true);
            }}
          />
        </div>

        <div className="ax-top-right">
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <p className="ax-top-description">{data.description}</p>
                )}
              </div>
            );
          })}
          <img
            className={toggleActiveStylesRightArrow()}
            src={StrelaDesno}
            alt="Slika strele"
            onClick={() => {
              nextSlide();
              toggleStateR();
              setState(true);
            }}
          />
        </div>
      </div>

      <div className="ax-down">
        <div className="ax-iskustva-box">
          <IskustvoSlider
            iskustva={downSlike}
            settings={iskustvaSettings}
            width="16em"
            height="9em"
          />
        </div>
      </div>
    </div>
  );
};

export default Iskustva;
