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
      partnerSlika: Slika,
      partnerIme: "ja alumni serbia",
      pozadina: "#000000",
      link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "it network",
      pozadina: "#C3B0FF",
      link: "https://www.itnetwork.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "nova s",
      pozadina: "#C3B0FF",
      link: "https://nova.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/codewithmary/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      partnerSlika: Slika,
      partnerIme: "n1",
      pozadina: "#C3B0FF",
      link: "https://rs.n1info.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "pr objave",
      pozadina: "#C3B0FF",
      link: "https://www.probjave.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "softuni",
      pozadina: "#C3B0FF",
      link: "https://www.softuni.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "youth.rs",
      pozadina: "#C3B0FF",
      link: "https://youth.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "znanje.rs",
      pozadina: "#C3B0FF",
      link: "http://www.znanje.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "kzm bajina basta",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/kzm_bb/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "startuj infostud",
      pozadina: "#C3B0FF",
      link: "https://startuj.com/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "tv brainz",
      pozadina: "#C3B0FF",
      link: "https://brainz.center/",
    },
  ];

  const robniPartneri = [
    {
      partnerSlika: naturalni3,
      partnerIme: "Dadov",
      pozadina: "#C3B0FF",
      link: "https://dadov.rs/",
    },
    {
      partnerSlika: naturalni9,
      partnerIme: "JDP",
      pozadina: "#000000",
      link: "https://www.jdp.rs/rs/",
    },

    {
      partnerSlika: naturalni5,
      partnerIme: "My moon M",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/mymoonmirror/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "KST",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/klubstudenatatehnike/",
    },
    {
      partnerSlika: naturalni10,
      partnerIme: "campster",
      pozadina: "#000000",
      link: "https://www.thecampster.com/rs/",
    },
    {
      partnerSlika: naturalni12,
      partnerIme: "Nauci dizajn",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/naucidizajn/?hl=sr",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Cubes School",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/cubesschool/?hl=sr",
    },
    {
      partnerSlika: naturalni1,
      partnerIme: "Adventure Hub",
      pozadina: "#000000",
      link: "https://www.instagram.com/adventure_hub_serbia/?hl=sr",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Laguna",
      pozadina: "#000000",
      link: "https://www.instagram.com/laguna_knjige/?hl=en",
    },
    {
      partnerSlika: naturalni13,
      partnerIme: "Sektor 44",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/sektor44beograd/?hl=en",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Akademska misao",
      pozadina: "#C3B0FF",
      link: "https://akademska-misao.rs/",
    },
    {
      partnerSlika: naturalni2,
      partnerIme: "Beer pong bar",
      pozadina: "#C3B0FF",
      link: "https://instagram.com/beerpongbar_belgrade?igshid=YmMyMTA2M2Y=",
    },
    {
      partnerSlika: naturalni7,
      partnerIme: "Escape game",
      pozadina: "#C3B0FF",
      link: "https://escapegame.rs/",
    },
    {
      partnerSlika: naturalni11,
      partnerIme: "Baza znanja",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/bazaznanjafon/",
    },
    {
      partnerSlika: naturalni8,
      partnerIme: "DIL Escape Room",
      pozadina: "#000000",
      link: "https://www.instagram.com/dilescaperooms/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Stark",
      pozadina: "#000000",
      link: "http://www.stark.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Grand",
      pozadina: "#C3B0FF",
      link: "http://grandkafa.rs/",
    },
    {
      partnerSlika: naturalni4,
      partnerIme: "Dr Brado",
      pozadina: "#C3B0FF",
      link: "https://brados.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Milford",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/milford_srbija/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Maf Maf",
      pozadina: "#C3B0FF",
      link: "https://instagram.com/maf_maf_mafinerija?igshid=YWJhMjlhZTc=",
    },
    {
      partnerSlika: naturalni14,
      partnerIme: "Stejsn klub",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/stejsnklub/",
    },
  ];

  const godisnjiPartneri = [
    {
      partnerSlika: godisnji1,
      partnerIme: "catenamedia",
      pozadina: "#C3B0FF",
      link: "https://www.catenamedia.com/",
    },
    {
      partnerSlika: godisnji2,
      partnerIme: "digitec",
      pozadina: "#000000",
      link: "https://www.digitec.rs/sr",
    },
    {
      partnerSlika: godisnji3,
      partnerIme: "fon",
      pozadina: "#C3B0FF",
      link: "http://www.fon.bg.ac.rs/",
    },
    {
      partnerSlika: godisnji4,
      partnerIme: "guarana",
      pozadina: "#C3B0FF",
      link: "https://guarana.rs/",
    },
    {
      partnerSlika: godisnji5,
      partnerIme: "hr fabrika",
      pozadina: "#C3B0FF",
      link: "https://hrfabrika.com/",
    },
    {
      partnerSlika: godisnji6,
      partnerIme: "hedwell",
      pozadina: "#C3B0FF",
      link: "https://hedwell.com/",
    },
    {
      partnerSlika: godisnji7,
      partnerIme: "mainstream",
      pozadina: "#C3B0FF",
      link: "https://www.mainstream.rs/",
    },
    {
      partnerSlika: godisnji8,
      partnerIme: "prime softver",
      pozadina: "#C3B0FF",
      link: "https://www.primeholding.com/",
    },
    {
      partnerSlika: godisnji9,
      partnerIme: "SBG",
      pozadina: "#C3B0FF",
      link: "https://sbgakademija.rs/",
    },
  ];

  return (
    <div className="ceo-partneri">
      <div id="partneri"></div>
      <div className="pokrovitelj">
        <h1 className="pokrovitelj-naslov">Pokrovitelj takmičenja</h1>
        <Partner
          partnerSlika={Pokrovitelj}
          partnerIme="Partner"
          id="pokrovitelj"
          link="https://www.ey.com/en_us"
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
