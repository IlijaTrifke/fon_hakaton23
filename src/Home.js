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

function Home() {
  return (
    <>
      <Ohakatonu />
      <Partneri />;
    </>
  );
}

export default Home;
