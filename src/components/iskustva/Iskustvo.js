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
      <div className="ax-okvir-iskustva">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.downSlika} alt={props.iskustvoIme} />
        </a>
      </div>
    </div>
  );
};

export default Iskustvo;
