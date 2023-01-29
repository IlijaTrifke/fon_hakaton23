import React from "react";
import "./iskustva.scss";
import Iskustvo from "./Iskustvo.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IskustvoSlider from "./IskustvaSlider.js";

// import Slika from "./assets/slika.png";

// import Linija from "./assets/linija.png";
import photo from "./assets/photo.jpg";
// import iskustvaFoto1 from "./assets/iskustvaFoto/1.png";
// import medijski2 from "./assets/medijski/2.png";
// import medijski3 from "./assets/medijski/3.png";
// import medijski4 from "./assets/medijski/4.png";
// import medijski5 from "./assets/medijski/5.png";
// import medijski6 from "./assets/medijski/6.png";
// import medijski7 from "./assets/medijski/7.png";
// import medijski8 from "./assets/medijski/8.png";
// import medijski9 from "./assets/medijski/9.png";
// import medijski10 from "./assets/medijski/10.png";
// import medijski11 from "./assets/medijski/11.png";
// import medijski12 from "./assets/medijski/12.png";
// import medijski13 from "./assets/medijski/13.png";
// import medijski14 from "./assets/medijski/14.png";
// import medijski15 from "./assets/medijski/15.jpeg";
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
    <div className="iskustva">
      <div className="title">
        <h1>Iskustva</h1>
      </div>
      <div className="top">
        <div className="top-left-button">
          <button>lijevo</button>
        </div>
        <div className="top-left-box">
          <img src={photo} alt="photo" className="top-photo1" />
          <div className="top-left-box-name">Nemanja Petronijevic</div>
          <hr className="top-left-box-hr" />
        </div>
        <div className="top-right-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione unde laborum voluptas, nobis quod ducimus quae itaque ab
            earum saepe doloremque aliquid atque dolore.
          </p>
        </div>
        <div className="top-right-button">
          <button>desno</button>
        </div>
      </div>

      <div className="down">
        <div className="iskustva-box">
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
