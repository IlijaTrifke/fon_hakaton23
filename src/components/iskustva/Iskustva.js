import React from "react";
import "./iskustva.scss";
import Iskustvo from "./Iskustvo.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IskustvoSlider from "./IskustvaSlider.js";

import photo from "./assets/photo.jpg";
import iskustvaFoto from "./assets/fonis.jpg";

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
  return (
    <div className="ax-iskustva">
      <div className="ax-title">
        <h1>Iskustva</h1>
      </div>
      <div className="ax-top">
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
        <div className="ax-top-right-button">
          <button>desno</button>
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
