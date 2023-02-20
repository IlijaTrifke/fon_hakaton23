import React from "react";
import "./partneri.scss";

const Partner = (props) => {
  return (
    <div className="partner">
      <div id={props.id} className="ax-okvir-partneri">
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="partneri-slika">
            <img
              src={props.partnerSlika}
              alt={props.partnerIme}
              style={{
                backgroundColor: props.pozadina,
                width: props.width,
                height: props.height,
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Partner;
