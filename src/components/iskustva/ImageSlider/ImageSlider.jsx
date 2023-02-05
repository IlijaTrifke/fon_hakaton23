import React from "react";
import { useState } from "react";
import { DataSlider } from "./DataSlider";
import StrelaLevo from "../../../images/LeftArrow.png";
import StrelaDesno from "../../../images/RightArrow.png";
import SlikaBordera from "../../../images/Slike tima - okvir za koordinatora.png";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <img
        className="left-arrow"
        src={StrelaLevo}
        alt="Slika strele"
        onClick={prevSlide}
      />
      <img
        className="right-arrow"
        src={StrelaDesno}
        alt="Slika strele"
        onClick={nextSlide}
      />
      <img
        className="slika-bordera"
        src={SlikaBordera}
        alt="Okvir za sliku koordinatora"
      />
      {DataSlider.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="group" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}
