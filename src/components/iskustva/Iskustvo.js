import React from "react";
import "./iskustva.scss";

const Iskustvo = (props) => {
  return (
    <div
      className="ax-iskustvo"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.downSlika} alt={props.iskustvoIme} />
      </a>
    </div>
  );
};

export default Iskustvo;
