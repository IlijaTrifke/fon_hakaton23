import React from "react";
import "./iskustva.scss";
import Slider from "react-slick";
import Iskustvo from "./Iskustvo";

const IskustvaSlider = (props) => {
  const iskustva = props.iskustva.map((iskustvo) => {
    return (
      <Iskustvo
        downSlika={iskustvo.downSlika}
        width={props.width}
        height={props.height}
        iskutvoIme={iskustvo.iskustvoIme}
      />
    );
  });
  return (
    <div>
      <Slider {...props.settings}>{iskustva}</Slider>
    </div>
  );
};

export default IskustvaSlider;
