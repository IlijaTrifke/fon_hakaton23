import React from "react";
import "./agenda.scss";

const Agenda = () => {
  return (
    <div className="agn-section">
      <h1 className="agn-header">Agenda</h1>
      <div className="agn-timeline">
        <div className="agn-line"></div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <h1 className="agn-head">Otvaranje prijava</h1>
          <div className="agn-text">
            <h2 className="agn-date">3. mart 2023.</h2>
            <p className="agn-descr">
              Samo nekoliko koraka deli vas od učešća na takmičenju koje će vam
              svojom uprčatljivom atmosferom pokazati moć programiranja i
              timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u prvi
              krug selekcije.
            </p>
          </div>
          <div className="agn-pseudo"></div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
