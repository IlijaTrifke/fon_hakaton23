import React from "react";
import "./partneri.scss";

const Partner = (props) => {
  return (
    <div className="partner">
      <div className="ax-okvir-partner">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="partneri-slika"
          id={props.id}
          style={{
            backgroundColor: props.pozadina,
          }}
        >
          <img
            src={props.partnerSlika}
            alt={props.partnerIme}
            style={{
              width: props.width,
              height: props.height,
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Partner;
