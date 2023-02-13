import React from "react";
import "./partneri.scss";

const Partner = (props) => {
  return (
    <div className="partner">
      <div id={props.id} className="ax-okvir-partneri">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.partnerSlika} alt={props.partnerIme} />
        </a>
      </div>
    </div>
  );
};

export default Partner;
