import "./ohakatonu.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Ohakatonu() {
  return (
    <div className="ohakatonu">
      <div id="o_hakatonu"></div>
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
              FON Hakaton je programersko takmičenje koje se ove godine održava
              18. i 19. marta na Fakultetu organizacionih nauka. Cilj samog
              takmičenja je pružanje prilike mladim programerima da primene
              svoja znanja i veštine u rešavanju konkretnih problema iz poslovne
              prakse i osvoje vredne nagrade. Članovi tročlanih i četvoročlanih
              timova imaće 24h da razviju softversko rešenje na zadati problem,
              nakon čega će ga prezentovati žiriju i ući u borbu za jednu od tri
              glavne nagrade. Za vreme takmičenja biće prisutni i stručni
              mentori iz IT industrije koji će ovo nezaboravno iskustvo
              učesnicima dodatno ulepšati i olakšati.
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
              <div className="hakaton-arrows right">
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
              </div>
            </div>
            <p className="hakaton-descr">Fakultet organizacionih nauka</p>
            <div className="hakaton-card-title">
              <div className="hakaton-arrows">
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
              </div>
              <h1> vreme:</h1>
              <div className="hakaton-arrows right">
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
                <div className="hakaton-arrow" />
              </div>
            </div>
            <p className="hakaton-descr">18. i 19. mart</p>
          </div>
        </div>

        <div className="hakaton-card card3">
          <div className="hakaton-header">
            <div className="hakaton-bead1"></div>
            <FontAwesomeIcon icon={faMinimize} />
            <FontAwesomeIcon icon={faMaximize} />
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="hakaton-content crd3">
            <div className="hakaton-arrows">
              <div className="hakaton-arrow" />
              <div className="hakaton-arrow" />
              <div className="hakaton-arrow" />
            </div>
            <p className="hakaton-descr">
              Pokrovitelj ovogodišnjeg FON Hakatona je svetski poznata
              konsultantska firma <span className="ernst"> Ernst & Young</span>,
              koja će odrediti temu samog takmičenja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ohakatonu;
