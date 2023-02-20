import React from "react";
import Agenda from "./components/agenda/Agenda";
import Statistika from "./components/statistika/Statistika";
import Pocetna from "./components/pocetna/Pocetna";
import Faq from "./components/faq/Faq";
import Partneri from "./components/partneri/Partneri";
import Nagrade from "./components/nagrade/Nagrade";
import Navbar from "./components/navbar/Navbar";
import SlikeOrg from "./components/slikeOrg/SlikeOrg";
import Ohakatonu from "./components/o-hakatonu/Ohakatonu";
import Iskustva from "./components/iskustva/Iskustva";
import Footer from "./components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="dveSekcijePO">
        <Pocetna />
        <Ohakatonu />
        <div className="balls-wrapper">
          <div className="blue-ball-blur" />
          <div className="purple-rectangle-blur" />
        </div>
      </div>
      <Nagrade />
      <div className="dveSekcijeAI">
        <div className="agn-rectangle-blur" />

        <Agenda />
        <Iskustva />
      </div>

      <Statistika />
      <Faq />
      <Partneri />
      <SlikeOrg />
      <Footer />
    </>
  );
}
export default Home;
