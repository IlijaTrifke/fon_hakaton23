import React from "react";
import "./slikeOrg.scss";
import slika from "./slikaOrg.png";

const SlikeOrg = () => {
  return (
    <div className="org-section">
      <div id="tim"></div>
      <h2 className="org-header">Organizacioni tim</h2>
      <div className="org-content">
        <div className="org-text">
          <p className="org-p">
            Motivisani mladi ljudi koji su zaslužni za organizovanje
            ovogodišnjeg FON Hakatona, udružili su snage da svojim trudom
            doprinesu zajedničkom cilju, a to je uspešno realizovanje
            takmičenja. Predanost i posvećenost svakog člana organizacionog tima
            je rezultat inspirativne atmosfere koja vlada u organizaciji i koja
            motiviše članove da vredno rade na tome da takmičenje učesnicima
            bude nezaboravno iskustvo. Svi članovi imaju posebnu ulogu da u
            jednom od 6 različitih timova, uz neophodna znanja i podršku od
            strane svojih koordinatora, omoguće da ovogodišnji FON Hakaton bude
            najbolji do sad.
          </p>
        </div>
        <div className="org-photo-hold">
          <img
            className="org-photo"
            src={slika}
            alt="Slika organizacionog tima"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default SlikeOrg;
