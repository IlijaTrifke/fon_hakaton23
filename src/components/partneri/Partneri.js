import React from "react";
import "./partneri.scss";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import naturalni1 from "./assets/robni/1.png";
import naturalni2 from "./assets/robni/2.png";
import naturalni3 from "./assets/robni/3.png";
import naturalni4 from "./assets/robni/4.png";
import naturalni5 from "./assets/robni/5.png";
import naturalni6 from "./assets/robni/6.png";
import naturalni7 from "./assets/robni/7.png";
// import naturalni8 from "./assets/robni/8.png";
import naturalni9 from "./assets/robni/9.png";
import naturalni10 from "./assets/robni/10.png";
import naturalni11 from "./assets/robni/11.png";
import naturalni12 from "./assets/robni/12.png";
import naturalni13 from "./assets/robni/13.png";
import naturalni14 from "./assets/robni/14.png";
import naturalni15 from "./assets/robni/15.png";
import naturalni16 from "./assets/robni/16.png";
import naturalni17 from "./assets/robni/17.png";
import naturalni18 from "./assets/robni/18.png";
import naturalni19 from "./assets/robni/19.png";
import naturalni20 from "./assets/robni/20.png";
import naturalni21 from "./assets/robni/21.png";
import naturalni22 from "./assets/robni/22.png";
import naturalni23 from "./assets/robni/23.png";
import naturalni24 from "./assets/robni/24.png";
import naturalni25 from "./assets/robni/25.png";
import naturalni26 from "./assets/robni/26.png";

import medijski1 from "./assets/medijski/1.png";
import medijski2 from "./assets/medijski/2.jpg";
import medijski3 from "./assets/medijski/3.png";
import medijski4 from "./assets/medijski/4.png";
import medijski5 from "./assets/medijski/5.jpg";
import medijski6 from "./assets/medijski/6.jpeg";
import medijski7 from "./assets/medijski/7.jpg";
import medijski8 from "./assets/medijski/8.png";
import medijski9 from "./assets/medijski/9.png";
import medijski10 from "./assets/medijski/10.png";
import medijski11 from "./assets/medijski/11.png";
import medijski12 from "./assets/medijski/12.png";
import medijski13 from "./assets/medijski/13.png";
import medijski14 from "./assets/medijski/14.jpg";
import medijski15 from "./assets/medijski/15.png";
import medijski16 from "./assets/medijski/16.png";
import medijski17 from "./assets/medijski/17.png";
import medijski18 from "./assets/medijski/18.jpg";
import medijski19 from "./assets/medijski/19.png";
import medijski20 from "./assets/medijski/20.png";
import medijski21 from "./assets/medijski/21.png";
import medijski22 from "./assets/medijski/22.png";
import medijski23 from "./assets/medijski/23.png";
import medijski24 from "./assets/medijski/24.png";
import medijski25 from "./assets/medijski/25.png";
import medijski26 from "./assets/medijski/26.png";
import medijski27 from "./assets/medijski/27.png";
import medijski28 from "./assets/medijski/28.png";

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
      partnerSlika: medijski1,
      partnerIme: "CaseStudyClub",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://casestudyclub.org/en/",
    },
    {
      partnerSlika: medijski2,
      partnerIme: "CentarZaPromocijuNauke",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://www.instagram.com/connecting.org.rs/",
    },
    {
      partnerSlika: medijski3,
      partnerIme: "StudentskaOrganizacijaViser",
      pozadina: "#fff",
      width: "13em",
      height: "8em",
      // link: "https://ehls.rs/",
    },
    {
      partnerSlika: medijski4,
      partnerIme: "Elektron",
      pozadina: "#fff",
      width: "13em",
      height: "8em",
      // link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      partnerSlika: medijski5,
      partnerIme: "GoogleDevelopment",
      pozadina: "#000",
      width: "13em",
      height: "9em",
      // link: "https://www.itnetwork.rs/",
    },
    {
      partnerSlika: medijski6,
      partnerIme: "nova s",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://nova.rs/",
    },
    {
      partnerSlika: medijski7,
      partnerIme: "Slika",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://www.instagram.com/codewithmary/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      partnerSlika: medijski8,
      partnerIme: "n1",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://rs.n1info.com/",
    },
    {
      partnerSlika: medijski9,
      partnerIme: "pr objave",
      pozadina: "#fff",
      width: "15em",
      height: "10em",
      // link: "https://www.probjave.com/",
    },
    {
      partnerSlika: medijski10,
      partnerIme: "softuni",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://www.softuni.rs/",
    },
    {
      partnerSlika: medijski11,
      partnerIme: "youth.rs",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://youth.rs/",
    },
    {
      partnerSlika: medijski12,
      partnerIme: "znanje.rs",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "http://www.znanje.rs/",
    },
    {
      partnerSlika: medijski13,
      partnerIme: "kzm bajina basta",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://www.instagram.com/kzm_bb/",
    },
    {
      partnerSlika: medijski14,
      partnerIme: "startuj infostud",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://startuj.com/",
    },
    {
      partnerSlika: medijski15,
      partnerIme: "tv brainz",
      pozadina: "#e52e40",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski16,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski17,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski18,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "8em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski19,
      partnerIme: "tv brainz",
      pozadina: "#014a7c",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski20,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski21,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski22,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski23,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski24,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski25,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "16em",
      height: "12em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski26,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "14em",
      height: "11em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski27,
      partnerIme: "tv brainz",
      pozadina: "#fff",
      width: "13em",
      height: "9em",
      // link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski28,
      partnerIme: "Viser",
      pozadina: "#fff",
      width: "13em",
      height: "8em",
      // link: "https://brainz.center/",
    },
  ];

  const robniPartneri = [
    {
      partnerSlika: naturalni3,
      partnerIme: "Dadov",
      pozadina: "#fff",
      link: "https://dadov.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni9,
      partnerIme: "JDP",
      pozadina: "#fff",
      link: "https://www.jdp.rs/rs/",
      width: "13em",
      height: "8em",
    },

    {
      partnerSlika: naturalni5,
      partnerIme: "My moon M",
      pozadina: "#304b38",
      link: "https://www.instagram.com/mymoonmirror/",
      width: "20em",
      height: "9em",
    },
    {
      partnerSlika: naturalni23,
      partnerIme: "KST",
      pozadina: "#fff",
      link: "https://www.instagram.com/klubstudenatatehnike/",
      width: "20em",
      height: "9em",
    },
    {
      partnerSlika: naturalni10,
      partnerIme: "campster",
      pozadina: "#fff",
      link: "https://www.thecampster.com/rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni12,
      partnerIme: "Nauci dizajn",
      pozadina: "#fff",
      link: "https://www.instagram.com/naucidizajn/?hl=sr",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni18,
      partnerIme: "Cubes School",
      pozadina: "#fff",
      link: "https://www.instagram.com/cubesschool/?hl=sr",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni1,
      partnerIme: "Adventure Hub",
      pozadina: "#98c123",
      link: "https://www.instagram.com/adventure_hub_serbia/?hl=sr",
      width: "15em",
      height: "9em",
    },
    {
      partnerSlika: naturalni6,
      partnerIme: "EdenBooks",
      pozadina: "#fff",
      link: "https://edenbooks.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni13,
      partnerIme: "Sektor44",
      pozadina: "#ffd503",
      link: "https://www.instagram.com/sektor44beograd/?hl=en",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni20,
      partnerIme: "Akademska misao",
      pozadina: "#ffffff",
      link: "https://akademska-misao.rs/",
      width: "16em",
      height: "9em",
    },
    {
      partnerSlika: naturalni2,
      partnerIme: "Beer pong bar",
      pozadina: "#fff",
      link: "https://instagram.com/beerpongbar_belgrade?igshid=YmMyMTA2M2Y=",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni7,
      partnerIme: "Escape game",
      pozadina: "#000",
      link: "https://escapegame.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni11,
      partnerIme: "BazaZnanja",
      pozadina: "#1a1a1a",
      link: "https://www.instagram.com/bazaznanjafon/",
      width: "13em",
      height: "8em",
    },
    // {
    //   partnerSlika: naturalni8,
    //   partnerIme: "DIL Escape Room",
    //   pozadina: "#000",
    //   link: "https://dilescaperooms.rs/",
    //   width: "13em",
    //   height: "8em",
    // },
    {
      partnerSlika: naturalni17,
      partnerIme: "Stark",
      pozadina: "#fff",
      link: "http://www.stark.rs/",
      width: "13em",
      height: "9em",
    },
    {
      partnerSlika: naturalni24,
      partnerIme: "Grand",
      pozadina: "#f5f5f5",
      link: "http://grandkafa.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni4,
      partnerIme: "Dr Brado",
      pozadina: "#fff",
      link: "https://brados.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni15,
      partnerIme: "Milford",
      pozadina: "#fff",
      link: "https://www.instagram.com/milford_srbija/",
      width: "16em",
      height: "12em",
    },
    {
      partnerSlika: naturalni26,
      partnerIme: "MafMaf",
      pozadina: "#fff",
      link: "https://instagram.com/maf_maf_mafinerija?igshid=YWJhMjlhZTc=",
      width: "14em",
      height: "9em",
    },
    {
      partnerSlika: naturalni14,
      partnerIme: "StejsnKlub",
      pozadina: "#fff",
      link: "https://www.instagram.com/stejsnklub/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni16,
      partnerIme: "Wolt",
      pozadina: "#fff",
      link: "https://wolt.com/sr/srb/belgrade",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni19,
      partnerIme: "Finesa",
      pozadina: "#fff",
      link: "https://www.finesa.edu.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni21,
      partnerIme: "Bitef",
      pozadina: "#fff",
      link: "https://teatar.bitef.rs/rs",
      width: "13em",
      height: "9em",
    },
    {
      partnerSlika: naturalni22,
      partnerIme: "NaturaLab",
      pozadina: "#fff",
      link: "https://naturalab.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: naturalni25,
      partnerIme: "Bazzinga",
      pozadina: "#fff",
      link: "www.bazzinga.shop",
      width: "13em",
      height: "8em",
    },
  ];

  const godisnjiPartneri = [
    {
      partnerSlika: godisnji1,
      partnerIme: "catenamedia",
      pozadina: "#fff",
      link: "https://www.catenamedia.com/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji2,
      partnerIme: "digitec",
      pozadina: "#fff",
      link: "https://www.digitec.rs/sr",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji3,
      partnerIme: "fon",
      pozadina: "#fff",
      link: "http://www.fon.bg.ac.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji4,
      partnerIme: "guarana",
      pozadina: "#fff",
      link: "https://guarana.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji5,
      partnerIme: "hr fabrika",
      pozadina: "#fff",
      link: "https://hrfabrika.com/",
      width: "19em",
      height: "10em",
    },
    {
      partnerSlika: godisnji6,
      partnerIme: "hedwell",
      pozadina: "#fff",
      link: "https://hedwell.com/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji7,
      partnerIme: "mainstream",
      pozadina: "#fff",
      link: "https://www.mainstream.rs/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji8,
      partnerIme: "prime softver",
      pozadina: "#fff",
      link: "https://www.primeholding.com/",
      width: "13em",
      height: "8em",
    },
    {
      partnerSlika: godisnji9,
      partnerIme: "SBG",
      pozadina: "#fff",
      link: "https://sbgakademija.rs/",
      width: "13em",
      height: "8em",
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
          height="10em"
          width="10em"
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
