// import React from "react";
import "./iskustva.scss";
import Iskustvo from "./Iskustvo.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IskustvoSlider from "./IskustvaSlider.js";

import photo from "./assets/photo.jpg";
import iskustvaFoto from "./assets/fonis.jpg";

// slike tima dolje
import React, { useState, useEffect } from "react";
// import "./slike_tima.css";
// import SLikaBordera1 from "../../images/Slike tima - okvir za sliku tima.png";
import StrelaLevo from "../../images/LeftArrow.png";
import StrelaDesno from "../../images/RightArrow.png";
// import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";
import { DataSlider } from "./DataSlider";
// slike tima gore

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
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo1",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo2",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo3",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo4",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo5",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo6",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo7",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo8",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo9",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo10",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo11",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo12",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo13",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo14",
    },
    {
      downSlika: iskustvaFoto,
      iskustvoIme: "iskustvo15",
    },
  ];
  // slike tima dolje
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
        if (current == 6) {
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
  // slike tima gore
  return (
    <div className="ax-iskustva">
      <div className="ax-title">
        <h1>Iskustva</h1>
      </div>
      {/* <div className="ax-top">
        <div className="ax-top-left-button">
          <button>lijevo</button>
        </div>
        <div className="ax-top-left-box">
          <img src={photo} alt="photo" className="ax-top-photo1" />
          <div className="ax-top-left-box-name">Nemanja Petronijevic</div>
          <hr className="ax-top-left-box-hr" />
        </div>
        <div className="ax-top-right-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione unde laborum voluptas, nobis quod ducimus quae itaque ab
            earum saepe doloremque aliquid atque dolore.
          </p>
        </div>

         { <p>Right arrow: <i class="arrow right"></i></p> } //ovdje bilo zakomentarisano kad ostalo nije!!! }
        <div className="ax-top-right-button">
          <button>desno</button>
        </div>
      </div> */}
      {/* slike tima dolje*/}
      {/* <div className="slike-tima-wrapper" id="tim"> */}
      {/* <div className="navbar-st">
          {appState.objects.map((elements, index) => (
            <h1
              key={index}
              className={toggleActiveStyles(index)}
              onClick={() => {
                toggleActive(index);
                setCurrent(index);
                setState(true);
              }}
            >
              {elements.title}
            </h1>
          ))}
        </div> */}

      <div className="ax-top-container">
        <div className="ax-top-left">
          <div className="ax-top-slider">
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
            {/* <img
              className="slika-bordera"
              src={SlikaBordera}
              alt="Okvir za sliku koordinatora"
            /> */}
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img src={data.image} alt="group" className="image" />
                  )}
                </div>
              );
            })}
          </div>
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  // <div className="opis-slike">
                  <h1 className="ax-top-name">{data.name}</h1>
                  // <h3 className="funkcija-koordinatora">{data.title}</h3>
                  // </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="ax-top-right">
          {/* <div className="slika-roditelj">
            <img
              className="slika-bordera1"
              src={SLikaBordera1}
              alt="Okvir za sliku tima"
            />
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="slika-grupna"
                      src={data.imageGroup}
                      alt="Grupna slika tima"
                    />
                  )}
                </div>
              );
            })}
          </div> */}
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
        </div>
      </div>
      {/* </div> */}
      {/* slike tima gore */}

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
