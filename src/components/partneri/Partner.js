import React from "react";
import "./partneri.scss";

const Partner = (props) => {
  return (
    <div
      className="partner"
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.pozadina,
      }}
    >
      <div className="ax-okvir-partneri">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.partnerSlika} alt={props.partnerIme} />
        </a>
      </div>
    </div>
  );
};

export default Partner;
