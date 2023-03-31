import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import "./navbar.scss";
import menuItems from "./MenuItems";
import { HashLink } from "react-router-hash-link";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../../images/FH_Logo.png";
import Pravilnik from "../../FH_pravilnik.pdf";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);

  const [widthVisible, setwidthVisible] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    //treba videti kako da radi da nema trottle
    if (window.innerWidth <= 1200) {
      setwidthVisible(false);
    } else {
      setwidthVisible(true);
    }
  }, [widthVisible]);

  const navbarStyles = {
    position: "fixed",
    textAlign: "center",
    transition: "top 0.4s",
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className="ceo-nav"
      // style={{ ...navbarStyles, top: visible ? "0" : "-7rem" }}
    >
      <nav className="navbar">
        <a href="#pocetna" style={{ zIndex: 200 }}>
          <img className="navbar-logo" src={logo} alt="Fon hakaton logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <Hamburger
            className="hamburger"
            toggled={active}
            toggle={setActive}
          />
        </div>
        <div className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            if (index === 7 && widthVisible) {
              return null;
            }
            if (index === 6) {
              return (
                <a
                  id={index}
                  href={Pravilnik}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={item.cName}
                >
                  {item.title}
                </a>
              );
            }
            return (
              <HashLink
                key={index}
                to={item.url}
                id={index}
                className={item.cName}
                onClick={handleClick}
              >
                {item.title}
              </HashLink>
            );
          })}
        </div>
        {/* <p
          // to="/prijava"
          className="prijavi-se desktop"
          onClick={handleClick}
        >
          PRIJAVI SE
        </p> */}
      </nav>
    </div>
  );
};

export default Navbar;
