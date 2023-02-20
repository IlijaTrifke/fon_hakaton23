import React from "react";
import "./partneri.scss";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import Slika from "./assets/slika.png";

import naturalni1 from "./assets/robni/1.png";
import naturalni2 from "./assets/robni/2.png";
import naturalni3 from "./assets/robni/3.png";
import naturalni4 from "./assets/robni/4.png";
import naturalni5 from "./assets/robni/5.png";
import naturalni6 from "./assets/robni/6.png";
import naturalni7 from "./assets/robni/7.png";
import naturalni8 from "./assets/robni/8.png";
import naturalni9 from "./assets/robni/9.png";
import naturalni10 from "./assets/robni/10.png";
import naturalni11 from "./assets/robni/11.png";
import naturalni12 from "./assets/robni/12.png";
import naturalni13 from "./assets/robni/13.png";
import naturalni14 from "./assets/robni/14.png";

import godisnji1 from "./assets/godisnji/1.png";
import godisnji2 from "./assets/godisnji/2.png";
import godisnji3 from "./assets/godisnji/3.png";
import godisnji4 from "./assets/godisnji/4.png";
import godisnji5 from "./assets/godisnji/5.png";
import godisnji6 from "./assets/godisnji/6.png";
import godisnji7 from "./assets/godisnji/7.png";
import godisnji8 from "./assets/godisnji/8.png";
import godisnji9 from "./assets/godisnji/9.png";

import Pokrovitelj from "./assets/pokrovitelj.png";

import Vector6 from "../../images/Vector6.png";
import Vector4 from "../../images/Vector4.png";

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
      pozadina: "#f5f5f5",
      // link: "https://www.instagram.com/connecting.org.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "case study club",
      pozadina: "#f5f5f5",
      // link: "https://casestudyclub.org/en/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "ehls",
      pozadina: "#f5f5f5",
      // link: "https://ehls.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "ja alumni serbia",
      pozadina: "#f5f5f5",
      // link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "it network",
      pozadina: "#f5f5f5",
      // link: "https://www.itnetwork.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "nova s",
      pozadina: "#f5f5f5",
      // link: "https://nova.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#f5f5f5",
      // link: "https://www.instagram.com/codewithmary/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      partnerSlika: Slika,
      partnerIme: "n1",
      pozadina: "#f5f5f5",
      // link: "https://rs.n1info.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "pr objave",
      pozadina: "#f5f5f5",
      // link: "https://www.probjave.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "softuni",
      pozadina: "#f5f5f5",
      // link: "https://www.softuni.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "youth.rs",
      pozadina: "#f5f5f5",
      // link: "https://youth.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "znanje.rs",
      pozadina: "#f5f5f5",
      // link: "http://www.znanje.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "kzm bajina basta",
      pozadina: "#f5f5f5",
      // link: "https://www.instagram.com/kzm_bb/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "startuj infostud",
      pozadina: "#f5f5f5",
      // link: "https://startuj.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "tv brainz",
      pozadina: "#f5f5f5",
      // link: "https://brainz.center/",
    },
  ];

  const robniPartneri = [
    {
      partnerSlika: naturalni3,
      partnerIme: "Dadov",
      pozadina: "#fff",
      link: "https://dadov.rs/",
    },
    {
      partnerSlika: naturalni9,
      partnerIme: "JDP",
      pozadina: "#fff",
      link: "https://www.jdp.rs/rs/",
    },

    {
      partnerSlika: naturalni5,
      partnerIme: "My moon M",
      pozadina: "#304b38",
      link: "https://www.instagram.com/mymoonmirror/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "KST",
      pozadina: "#f5f5f5",
      link: "https://www.instagram.com/klubstudenatatehnike/",
    },
    {
      partnerSlika: naturalni10,
      partnerIme: "campster",
      pozadina: "#fff",
      link: "https://www.thecampster.com/rs/",
    },
    {
      partnerSlika: naturalni12,
      partnerIme: "Nauci dizajn",
      pozadina: "#fff",
      link: "https://www.instagram.com/naucidizajn/?hl=sr",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Cubes School",
      pozadina: "#f5f5f5",
      link: "https://www.instagram.com/cubesschool/?hl=sr",
    },
    {
      partnerSlika: naturalni1,
      partnerIme: "Adventure Hub",
      pozadina: "#98c123",
      link: "https://www.instagram.com/adventure_hub_serbia/?hl=sr",
    },
    {
      partnerSlika: naturalni6,
      partnerIme: "EdenBooks",
      pozadina: "#fff",
      link: "https://edenbooks.rs/",
    },
    {
      partnerSlika: naturalni13,
      partnerIme: "Sektor44",
      pozadina: "#ffd503",
      link: "https://www.instagram.com/sektor44beograd/?hl=en",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Akademska misao",
      pozadina: "#f5f5f5",
      link: "https://akademska-misao.rs/",
    },
    {
      partnerSlika: naturalni2,
      partnerIme: "Beer pong bar",
      pozadina: "#fff",
      link: "https://instagram.com/beerpongbar_belgrade?igshid=YmMyMTA2M2Y=",
    },
    {
      partnerSlika: naturalni7,
      partnerIme: "Escape game",
      pozadina: "#000",
      link: "https://escapegame.rs/",
    },
    {
      partnerSlika: naturalni11,
      partnerIme: "BazaZnanja",
      pozadina: "#1a1a1a",
      link: "https://www.instagram.com/bazaznanjafon/",
    },
    {
      partnerSlika: naturalni8,
      partnerIme: "DIL Escape Room",
      pozadina: "#000",
      link: "https://www.instagram.com/dilescaperooms/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Stark",
      pozadina: "#f5f5f5",
      link: "http://www.stark.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Grand",
      pozadina: "#f5f5f5",
      link: "http://grandkafa.rs/",
    },
    {
      partnerSlika: naturalni4,
      partnerIme: "Dr Brado",
      pozadina: "#fff",
      link: "https://brados.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Milford",
      pozadina: "#f5f5f5",
      link: "https://www.instagram.com/milford_srbija/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Maf Maf",
      pozadina: "#f5f5f5",
      link: "https://instagram.com/maf_maf_mafinerija?igshid=YWJhMjlhZTc=",
    },
    {
      partnerSlika: naturalni14,
      partnerIme: "StejsnKlub",
      pozadina: "#fff",
      link: "https://www.instagram.com/stejsnklub/",
    },
  ];

  const godisnjiPartneri = [
    {
      partnerSlika: godisnji1,
      partnerIme: "catenamedia",
      pozadina: "#fff",
      link: "https://www.catenamedia.com/",
    },
    {
      partnerSlika: godisnji2,
      partnerIme: "digitec",
      pozadina: "#fff",
      link: "https://www.digitec.rs/sr",
    },
    {
      partnerSlika: godisnji3,
      partnerIme: "fon",
      pozadina: "#fff",
      link: "http://www.fon.bg.ac.rs/",
    },
    {
      partnerSlika: godisnji4,
      partnerIme: "guarana",
      pozadina: "#fff",
      link: "https://guarana.rs/",
    },
    {
      partnerSlika: godisnji5,
      partnerIme: "hr fabrika",
      pozadina: "#fff",
      link: "https://hrfabrika.com/",
    },
    {
      partnerSlika: godisnji6,
      partnerIme: "hedwell",
      pozadina: "#fff",
      link: "https://hedwell.com/",
    },
    {
      partnerSlika: godisnji7,
      partnerIme: "mainstream",
      pozadina: "#fff",
      link: "https://www.mainstream.rs/",
    },
    {
      partnerSlika: godisnji8,
      partnerIme: "prime softver",
      pozadina: "#fff",
      link: "https://www.primeholding.com/",
    },
    {
      partnerSlika: godisnji9,
      partnerIme: "SBG",
      pozadina: "#fff",
      link: "https://sbgakademija.rs/",
    },
  ];

  return (
    <div className="ceo-partneri">
      <div id="partneri"></div>

      <img className="vector6" src={Vector6} alt="Web" />
      <img className="vector4" src={Vector4} alt="Web" />

      <div className="pokrovitelj">
        <h1 className="pokrovitelj-naslov">Pokrovitelj takmičenja</h1>
        <Partner
          partnerSlika={Pokrovitelj}
          partnerIme="Partner"
          height="13em"
          width="13em"
          id="pokrovitelj"
          link="https://www.ey.com/en_us"
          pozadina="#fff"
        ></Partner>
      </div>

      <h1>Godišnji partneri</h1>

      <div className="partneri-box">
        <PartneriSlider
          partneri={godisnjiPartneri}
          settings={partneriSettings}
        />
      </div>

      <h1>Naturalni partneri</h1>

      <div className="partneri-box">
        <PartneriSlider partneri={robniPartneri} settings={partneriSettings} />
      </div>

      <h1>Medijski partneri</h1>

      <div className="partneri-box">
        <PartneriSlider
          partneri={medijskiPartneri}
          settings={partneriSettings}
        />
      </div>
    </div>
  );
};

export default Partneri;
