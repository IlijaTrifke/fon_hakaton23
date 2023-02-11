import React from "react";
import "./partneri.scss";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import Slika from "./assets/slika.png";

import Linija from "./assets/linija.png";

// import Slike_tima from "../slike_tima/Slike_tima";

import medijski1 from "./assets/medijski/1.png";
import medijski2 from "./assets/medijski/2.png";
import medijski3 from "./assets/medijski/3.png";
import medijski4 from "./assets/medijski/4.png";
import medijski5 from "./assets/medijski/5.png";
import medijski6 from "./assets/medijski/6.png";
import medijski7 from "./assets/medijski/7.png";
import medijski8 from "./assets/medijski/8.png";
import medijski9 from "./assets/medijski/9.png";
import medijski10 from "./assets/medijski/10.png";
import medijski11 from "./assets/medijski/11.png";
import medijski12 from "./assets/medijski/12.png";
import medijski13 from "./assets/medijski/13.png";
import medijski14 from "./assets/medijski/14.png";
import medijski15 from "./assets/medijski/15.jpeg";

import robni1 from "./assets/robni/1.png";
import robni2 from "./assets/robni/2.png";
import robni3 from "./assets/robni/3.png";
import robni4 from "./assets/robni/4.png";

import godisnji1 from "./assets/godisnji/1.png";
import godisnji2 from "./assets/godisnji/2.png";
import godisnji3 from "./assets/godisnji/3.png";
import godisnji4 from "./assets/godisnji/4.png";
import godisnji5 from "./assets/godisnji/5.png";
import godisnji6 from "./assets/godisnji/6.png";
import godisnji7 from "./assets/godisnji/7.png";
import godisnji8 from "./assets/godisnji/8.png";
import godisnji9 from "./assets/godisnji/9.png";
import godisnji10 from "./assets/godisnji/10.png";

import Pokrovitelj from "./assets/pokrovitelj.png";

const Partneri = (props) => {
  const partneriSettings = {
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

  const medijskiPartneri = [
    {
      partnerSlika: Slika,
      partnerIme: "connecting",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/connecting.org.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "case study club",
      pozadina: "#C3B0FF",
      link: "https://casestudyclub.org/en/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "ehls",
      pozadina: "#C3B0FF",
      link: "https://ehls.rs/",
    },
    {
      // partnerSlika: medijski4,
      partnerSlika: Slika,
      partnerIme: "ja alumni serbia",
      pozadina: "#000000",
      link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      // partnerSlika: medijski5,
      partnerSlika: Slika,
      partnerIme: "it network",
      pozadina: "#C3B0FF",
      link: "https://www.itnetwork.rs/",
    },
    {
      // partnerSlika: medijski6,
      partnerSlika: Slika,
      partnerIme: "nova s",
      pozadina: "#C3B0FF",
      link: "https://nova.rs/",
    },
    {
      // partnerSlika: medijski7,
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/codewithmary/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      // partnerSlika: medijski8,
      partnerSlika: Slika,
      partnerIme: "n1",
      pozadina: "#C3B0FF",
      link: "https://rs.n1info.com/",
    },
    {
      // partnerSlika: medijski9,
      partnerSlika: Slika,
      partnerIme: "pr objave",
      pozadina: "#C3B0FF",
      link: "https://www.probjave.com/",
    },
    {
      // partnerSlika: medijski10,
      partnerSlika: Slika,
      partnerIme: "softuni",
      pozadina: "#C3B0FF",
      link: "https://www.softuni.rs/",
    },
    {
      // partnerSlika: medijski11,
      partnerSlika: Slika,
      partnerIme: "youth.rs",
      pozadina: "#C3B0FF",
      link: "https://youth.rs/",
    },
    {
      // partnerSlika: medijski12,
      partnerSlika: Slika,
      partnerIme: "znanje.rs",
      pozadina: "#C3B0FF",
      link: "http://www.znanje.rs/",
    },
    {
      // partnerSlika: medijski13,
      partnerSlika: Slika,
      partnerIme: "kzm bajina basta",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/kzm_bb/",
    },
    {
      // partnerSlika: medijski14,
      partnerSlika: Slika,
      partnerIme: "startuj infostud",
      pozadina: "#C3B0FF",
      link: "https://startuj.com/",
    },
    {
      // partnerSlika: medijski15,
      partnerSlika: Slika,
      partnerIme: "tv brainz",
      pozadina: "#C3B0FF",
      link: "https://brainz.center/",
    },
  ];

  const robniPartneri = [
    {
      partnerSlika: Slika,
      partnerIme: "upisi fon",
      pozadina: "#C3B0FF",
      link: "https://upisifon.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "devhub",
      pozadina: "#000000",
      link: "https://www.instagram.com/dev_hub_/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "campster",
      pozadina: "#000000",
      link: "https://www.thecampster.com/rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "njamb",
      pozadina: "#C3B0FF",
      link: "https://www.jaffa.rs/en/njamb/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
  ];

  const godisnjiPartneri = [
    {
      partnerSlika: Slika,
      partnerIme: "upisi fon",
      pozadina: "#C3B0FF",
      link: "https://upisifon.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "devhub",
      pozadina: "#000000",
      link: "https://www.instagram.com/dev_hub_/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "guarana",
      pozadina: "#C3B0FF",
      link: "https://guarana.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "hedwell",
      pozadina: "#C3B0FF",
      link: "https://hedwell.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "mainstream",
      pozadina: "#C3B0FF",
      link: "https://www.mainstream.rs/en/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "mintpromoprint",
      pozadina: "#C3B0FF",
      link: "https://www.mintpromoprint.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "primeholding",
      pozadina: "#C3B0FF",
      link: "https://primeholding.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "devit",
      pozadina: "#C3B0FF",
      link: "https://www.devit.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "fon",
      pozadina: "#C3B0FF",
      link: "http://www.fon.bg.ac.rs/",
    },
    {
      tpartnerSlika: Slika,
      partnerIme: "sbgakademija",
      pozadina: "#C3B0FF",
      link: "https://sbgakademija.rs/",
    },
  ];

  // const partneriLista = [
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },

  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  //   {
  //     partnerSlika: Slika,
  //     partnerIme: "Slika",
  //     pozadina: "#C3B0FF",
  //     link: "http://fonis.rs/",
  //   },
  // ];

  return (
    <div className="ceo-partneri">
      <div className="pokrovitelj">
        <h1 className="pokrovitelj-naslov">POKROVITELJ TAKMIČENJA</h1>
        <Partner
          partnerSlika={Slika}
          partnerIme="Partner"
          width="16em"
          height="9em"
          pozadina="#C3B0FF"
          link="https://www.telesign.com/"
        ></Partner>
      </div>
      <h1>GODIŠNJI PARTNERI</h1>
      <div className="partneri-box">
        <PartneriSlider
          partneri={godisnjiPartneri}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
      <h1>NATURALNI PARTNERI</h1>
      <div className="partneri-box">
        <PartneriSlider
          partneri={robniPartneri}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
      <h1>MEDIJSKI PARTNERI</h1>
      <div className="partneri-box">
        <PartneriSlider
          partneri={medijskiPartneri}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
    </div>
  );
};

export default Partneri;
