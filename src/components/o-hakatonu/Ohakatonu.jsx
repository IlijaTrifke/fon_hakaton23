import "./ohakatonu.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Ohakatonu() {
  return (
    <div className="ohakatonu">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <h1 className="hakaton-title">O Hakatonu</h1>

      <div className="hakaton-section">
        <div className="hakaton-card card1">
          <div className="hakaton-header">
            <div className="hakaton-bead1"></div>
            <FontAwesomeIcon icon={faMinimize} />
            <FontAwesomeIcon icon={faMaximize} />
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="hakaton-content">
            <p className="hakaton-descr">
              FON Hakaton je programersko takmičenje kreirano sa ciljem da
              učesnici za 24h osmisle i izrade softversko rešenje na zadatu
              temu. Tročlani ili četvoročlani timovi, koji će biti odabrani za
              veliko finale, imaće priliku da iskoriste svoja znanja i veštine i
              da u realnom okruženju steknu nezaboravna iskustva koja će im
              sigurno značiti u daljem napredovanju i usavršavanju programerske
              karijere. Timovi će imati pomoć IT stručnjaka sa dugogodišnjim
              iskustvom u ovoj oblasti, koji će im kroz konsultacije, pokazati
              put do realizacije što boljeg softverskog rešenja.
            </p>
          </div>
        </div>

        <div className="hakaton-card card2">
          <div className="hakaton-header">
            <div className="hakaton-bead1"></div>
            <FontAwesomeIcon icon={faMinimize} />
            <FontAwesomeIcon icon={faMaximize} />
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="hakaton-content">
            <div className="hakaton-card-title">
              <div className="hakaton-arrows">
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
              </div>
              <h1> lokacija:</h1>
            </div>
            <p className="hakaton-descr">Fakultet organizacionih nauka</p>
            <div className="hakaton-card-title">
              <div className="hakaton-arrows">
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
              </div>
              <h1> vreme:</h1>
            </div>
            <p className="hakaton-descr">12. i 13. mart</p>
          </div>
        </div>

        <div className="hakaton-card card3">
          <div className="hakaton-header">
            <div className="hakaton-bead1"></div>
            <FontAwesomeIcon icon={faMinimize} />
            <FontAwesomeIcon icon={faMaximize} />
            <FontAwesomeIcon icon={faClose} />
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
    </div>
  );
}

export default Ohakatonu;
