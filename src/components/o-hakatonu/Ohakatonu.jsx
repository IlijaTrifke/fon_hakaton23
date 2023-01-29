import "./ohakatonu.scss";
import React from "react";
import icons from "./icons.png";

function Ohakatonu() {
  return (
    <div className="hakaton-section">
      <h1 className="hakaton-title">O Hakatonu</h1>
      <div className="hakaton-card card1">
        <div className="hakaton-header">
          <div className="hakaton-bead1"></div>
          <img src={icons} className="icons" alt="icons" />
        </div>
        <div className="hakaton-content">
          <p className="hakaton-descr">
            FON Hakaton je programersko takmičenje kreirano sa ciljem da
            učesnici za 24h osmisle i izrade softversko rešenje na zadatu temu.
            Tročlani ili četvoročlani timovi, koji će biti odabrani za veliko
            finale, imaće priliku da iskoriste svoja znanja i veštine i da u
            realnom okruženju steknu nezaboravna iskustva koja će im sigurno
            značiti u daljem napredovanju i usavršavanju programerske karijere.
            Timovi će imati pomoć IT stručnjaka sa dugogodišnjim iskustvom u
            ovoj oblasti, koji će im kroz konsultacije, pokazati put do
            realizacije što boljeg softverskog rešenja.
          </p>
        </div>
      </div>

      <div className="hakaton-card card2">
        <div className="agn-bead"></div>
        <div className="hakaton-header">
          <div className="hakaton-bead1"></div>
          <img src={icons} className="icons" alt="icons" />
        </div>
        <div className="hakaton-content">
          <p className="hakaton-descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            reprehenderit?
          </p>
        </div>
      </div>

      <div className="hakaton-card card3">
        <div className="agn-bead"></div>
        <div className="hakaton-header">
          <div className="hakaton-bead1"></div>
          <img src={icons} className="icons" alt="icons" />
        </div>
        <div className="hakaton-content">
          <p className="hakaton-descr">
            Generalni pokrovitelj takmičenja je kompanija Levi9 koja će zadati
            izazovnu temu Hakatona pružajući timovima priliku da pokažu
            inovativnost i stvore rešenje široke primene.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ohakatonu;
