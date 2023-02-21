import React from "react";
import "./partneri.scss";
import Slider from "react-slick";
import Partner from "./Partner";

const PartneriSlider = (props) => {
  const partneri = props.partneri.map((partner) => {
    return (
      <Partner
        key={partner.partnerIme}
        partnerSlika={partner.partnerSlika}
        partnerIme={partner.partnerIme}
        width={partner.width}
        height={partner.height}
        link={partner.link}
        pozadina={partner.pozadina}
      />
    );
  });
  return (
    <div>
      <Slider {...props.settings}>{partneri}</Slider>
    </div>
  );
};

export default PartneriSlider;
