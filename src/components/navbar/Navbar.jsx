import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import "./navbar.scss";
import menuItems from "./MenuItems";
import { HashLink } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../../images/FH_Logo.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);
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
      style={{ ...navbarStyles, top: visible ? "0" : "-7rem" }}
    >
      <nav className="navbar">
        <img className="navbar-logo" src={logo} alt="Fon hakaton logo" />
        <div className="menu-icon" onClick={handleClick}>
          <Hamburger
            className="hamburger"
            toggled={active}
            toggle={setActive}
          />
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <HashLink
                  to={item.url}
                  className={item.cName}
                  onClick={handleClick}
                >
                  {item.title}
                </HashLink>
              </li>
            );
          })}
        </ul>
        <HashLink
          to="/prijava"
          className="prijavi-se desktop"
          onClick={handleClick}
        >
          PRIJAVI SE
        </HashLink>
      </nav>
    </div>
  );
};

export default Navbar;
