import React from "react";
import "./partneri.css";

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
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.partnerSlika} alt={props.partnerIme} />
      </a>
    </div>
  );
};

export default Partner;
