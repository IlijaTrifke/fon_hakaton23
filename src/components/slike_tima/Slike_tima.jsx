import React, { useState, useEffect } from "react";
import "./slike_tima.css";
import SLikaBordera1 from "../../images/Slike tima - okvir za sliku tima.png";
import StrelaLevo from "../../images/LeftArrow.png";
import StrelaDesno from "../../images/RightArrow.png";
import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";
import { DataSlider } from "./DataSlider";

const Slike_tima = () => {
  const [people] = useState(DataSlider);
  const [current, setCurrent] = useState(0);
  const [stateR, setStateR] = useState(false);
  const [stateL, setStateL] = useState(false);
  const [state, setState] = useState(false);
  const length = people.length;
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 0, title: "CORE" },
      { id: 1, title: "IT" },
      { id: 2, title: "Dizajn" },
      { id: 3, title: "PR" },
      { id: 4, title: "CR&AR" },
      { id: 5, title: "Logistika" },
      { id: 6, title: "HR" },
    ],
  });

  useEffect(() => {
    const lastCurrent = people.length - 1;
    if (current < 0) {
      setCurrent(lastCurrent);
    }
    if (current > lastCurrent) {
      setCurrent(0);
    }
  }, [current, people]);

  useEffect(() => {
    let slider = setInterval(
      () => {
        setState(false);
        if (current == 6) {
          toggleActiveStyles(0);
          toggleActive(0);
          setCurrent(0);
        } else {
          toggleActiveStyles(current + 1);
          toggleActive(current + 1);
          setCurrent(current + 1);
        }

        console.log(current);
        setCurrent(current + 1);
      },
      state === true ? 10000 : 3000
    );

    return () => {
      clearInterval(slider);
    };
  }, [current]);

  const nextSlide = () => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
    toggleActiveStyles(index);
    toggleActive(index);
  };

  const prevSlide = () => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
    toggleActiveStyles(index);
    toggleActive(index);
  };

  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    console.log(appState.objects[index], appState.activeObject);
    if (appState.objects[index] === appState.activeObject) {
      return "box activeS";
    } else {
      return "box inactiveS";
    }
  };

  const toggleStateR = () => {
    if (stateR === false) {
      setStateR(true);
    } else {
      setStateR(false);
    }
  };
  const toggleStateL = () => {
    if (stateL === false) {
      setStateL(true);
    } else {
      setStateL(false);
    }
  };

  const toggleActiveStylesRightArrow = () => {
    if (stateR === false) {
      return "right-arrow inactiveAR";
    } else {
      return "right-arrow activeAR";
    }
  };
  const toggleActiveStylesLeftArrow = () => {
    if (stateL === false) {
      return "left-arrow inactiveAR";
    } else {
      return "left-arrow activeAR";
    }
  };

  return (
    <div className="slike-tima-wrapper" id="tim">
      <div className="navbar-st">
        {appState.objects.map((elements, index) => (
          <h1
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
              setCurrent(index);
              setState(true);
            }}
          >
            {elements.title}
          </h1>
        ))}
      </div>
      <div className="slike-tima-container">
        <div className="slike-tima-levo">
          <section className="slider">
            <img
              className={toggleActiveStylesLeftArrow()}
              src={StrelaLevo}
              alt="Slika strele"
              onClick={() => {
                prevSlide();
                toggleStateL();
                setState(true);
              }}
            />
            <img
              className={toggleActiveStylesRightArrow()}
              src={StrelaDesno}
              alt="Slika strele"
              onClick={() => {
                nextSlide();
                toggleStateR();
                setState(true);
              }}
            />
            <img
              className="slika-bordera"
              src={SlikaBordera}
              alt="Okvir za sliku koordinatora"
            />
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img src={data.image} alt="group" className="image" />
                  )}
                </div>
              );
            })}
          </section>
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="opis-slike">
                    <h1 className="ime-koordinatora">{data.name}</h1>
                    <h3 className="funkcija-koordinatora">{data.title}</h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="slike-tima-desno">
          <div className="slika-roditelj">
            <img
              className="slika-bordera1"
              src={SLikaBordera1}
              alt="Okvir za sliku tima"
            />
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="slika-grupna"
                      src={data.imageGroup}
                      alt="Grupna slika tima"
                    />
                  )}
                </div>
              );
            })}
          </div>
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <p className="opis-tima">{data.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slike_tima;
